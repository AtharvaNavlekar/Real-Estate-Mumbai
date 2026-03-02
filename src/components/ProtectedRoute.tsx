import React, { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

interface ProtectedRouteProps {
    children: ReactNode;
    requiredRole?: 'buyer' | 'owner' | 'agent';
}

/**
 * Wraps any route that requires authentication.
 * Redirects to /auth if the user is not logged in.
 * Optionally enforces a specific role.
 */
export default function ProtectedRoute({ children, requiredRole }: ProtectedRouteProps) {
    const { user, isLoading } = useAuth();
    const location = useLocation();

    // Show nothing while auth state is loading to prevent flash
    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-v-gray">
                <div className="w-8 h-8 border-4 border-v-blue border-t-transparent rounded-full animate-spin" />
            </div>
        );
    }

    // Not authenticated — redirect to login, preserving the intended destination
    if (!user) {
        return <Navigate to="/auth" state={{ from: location.pathname }} replace />;
    }

    // Role check — if requiredRole is specified, verify it matches
    if (requiredRole && user.role !== requiredRole) {
        return <Navigate to="/dashboard" replace />;
    }

    return <>{children}</>;
}
