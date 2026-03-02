import React, { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';

// ─── Types ──────────────────────────────────────────────────────────────────
interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: 'buyer' | 'owner' | 'agent';
}

interface StoredSession {
  user: User;
  expiresAt: number;  // Unix timestamp
  checksum: string;   // Tamper-detection hash
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  signup: (name: string, email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

const STORAGE_KEY = 're-mumbai-session';
const SESSION_DURATION_MS = 24 * 60 * 60 * 1000; // 24 hours
const VALID_ROLES: User['role'][] = ['buyer', 'owner', 'agent'];

// ─── Helpers ────────────────────────────────────────────────────────────────

/** Simple hash for tamper detection (not cryptographic, but catches manual edits) */
function computeChecksum(user: User, expiresAt: number): string {
  const raw = `${user.id}|${user.email}|${user.role}|${expiresAt}|re-mumbai-salt-2026`;
  let hash = 0;
  for (let i = 0; i < raw.length; i++) {
    const char = raw.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash |= 0; // Convert to 32-bit integer
  }
  return Math.abs(hash).toString(36);
}

/** Validate email format */
function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/** Sanitize string input */
function sanitize(input: string): string {
  return input.replace(/[<>"'&]/g, '').trim();
}

/** Validate a stored session for integrity */
function validateSession(stored: unknown): StoredSession | null {
  if (!stored || typeof stored !== 'object') return null;

  const session = stored as Record<string, unknown>;
  if (!session.user || typeof session.user !== 'object') return null;
  if (typeof session.expiresAt !== 'number') return null;
  if (typeof session.checksum !== 'string') return null;

  const user = session.user as Record<string, unknown>;
  if (typeof user.id !== 'string' || !user.id) return null;
  if (typeof user.email !== 'string' || !isValidEmail(user.email)) return null;
  if (typeof user.name !== 'string' || !user.name) return null;
  if (typeof user.role !== 'string' || !VALID_ROLES.includes(user.role as User['role'])) return null;

  const validSession: StoredSession = {
    user: {
      id: user.id,
      name: sanitize(user.name as string),
      email: user.email as string,
      avatar: typeof user.avatar === 'string' ? user.avatar : undefined,
      role: user.role as User['role'],
    },
    expiresAt: session.expiresAt as number,
    checksum: session.checksum as string,
  };

  // Tamper detection
  const expectedChecksum = computeChecksum(validSession.user, validSession.expiresAt);
  if (validSession.checksum !== expectedChecksum) {
    return null; // Tampered
  }

  // Expiry check
  if (Date.now() > validSession.expiresAt) {
    return null; // Expired
  }

  return validSession;
}

// ─── Provider ───────────────────────────────────────────────────────────────

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Restore session on mount
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        const session = validateSession(parsed);
        if (session) {
          setUser(session.user);
        } else {
          // Invalid or expired session — clean up
          localStorage.removeItem(STORAGE_KEY);
        }
      }
    } catch {
      localStorage.removeItem(STORAGE_KEY);
    }
    setIsLoading(false);
  }, []);

  // Periodic session check (every 60s)
  useEffect(() => {
    const interval = setInterval(() => {
      try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (raw) {
          const parsed = JSON.parse(raw);
          const session = validateSession(parsed);
          if (!session) {
            localStorage.removeItem(STORAGE_KEY);
            setUser(null);
          }
        }
      } catch {
        localStorage.removeItem(STORAGE_KEY);
        setUser(null);
      }
    }, 60_000);

    return () => clearInterval(interval);
  }, []);

  const persistSession = useCallback((newUser: User) => {
    const expiresAt = Date.now() + SESSION_DURATION_MS;
    const checksum = computeChecksum(newUser, expiresAt);
    const session: StoredSession = { user: newUser, expiresAt, checksum };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(session));
    setUser(newUser);
  }, []);

  const login = useCallback(async (email: string, password: string): Promise<{ success: boolean; error?: string }> => {
    const cleanEmail = sanitize(email).toLowerCase();
    const cleanPassword = password; // Don't sanitize passwords — they may contain special chars

    if (!cleanEmail || !cleanPassword) return { success: false, error: 'Email and password are required.' };
    if (!isValidEmail(cleanEmail)) return { success: false, error: 'Please enter a valid email address.' };
    if (cleanPassword.length < 6) return { success: false, error: 'Password must be at least 6 characters.' };
    if (cleanPassword.length > 128) return { success: false, error: 'Password is too long.' };

    // Simulate API delay
    await new Promise(r => setTimeout(r, 800));

    const mockUser: User = {
      id: btoa(cleanEmail + ':' + Date.now()),
      name: cleanEmail.split('@')[0].replace(/[._]/g, ' ').replace(/\b\w/g, c => c.toUpperCase()),
      email: cleanEmail,
      avatar: `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(cleanEmail)}`,
      role: 'buyer',
    };

    persistSession(mockUser);
    return { success: true };
  }, [persistSession]);

  const signup = useCallback(async (name: string, email: string, password: string): Promise<{ success: boolean; error?: string }> => {
    const cleanName = sanitize(name);
    const cleanEmail = sanitize(email).toLowerCase();
    const cleanPassword = password;

    if (!cleanName || cleanName.length < 2) return { success: false, error: 'Please enter your full name (min 2 characters).' };
    if (cleanName.length > 100) return { success: false, error: 'Name is too long.' };
    if (!cleanEmail) return { success: false, error: 'Email is required.' };
    if (!isValidEmail(cleanEmail)) return { success: false, error: 'Please enter a valid email address.' };
    if (cleanPassword.length < 6) return { success: false, error: 'Password must be at least 6 characters.' };
    if (cleanPassword.length > 128) return { success: false, error: 'Password is too long.' };

    await new Promise(r => setTimeout(r, 800));

    const newUser: User = {
      id: btoa(cleanEmail + ':' + Date.now()),
      name: cleanName,
      email: cleanEmail,
      avatar: `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(cleanName)}`,
      role: 'buyer',
    };

    persistSession(newUser);
    return { success: true };
  }, [persistSession]);

  const logout = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY);
    setUser(null);
  }, []);

  return (
    <AuthContext.Provider value={{ user, isLoading, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
