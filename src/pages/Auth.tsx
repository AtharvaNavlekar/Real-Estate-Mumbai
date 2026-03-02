import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, BadgeCheck, Eye, EyeOff, CheckCircle, AlertCircle } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

function Toast({ message, type }: { message: string; type: 'success' | 'error' }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`fixed top-28 right-6 z-50 flex items-center gap-3 px-5 py-3 rounded-2xl shadow-xl text-white text-sm font-bold ${type === 'success' ? 'bg-green-500' : 'bg-red-500'}`}
            role="alert"
            aria-live="assertive"
        >
            {type === 'success' ? <CheckCircle className="w-4 h-4" /> : <AlertCircle className="w-4 h-4" />}
            {message}
        </motion.div>
    );
}

export default function Auth() {
    const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);
    const { login, signup } = useAuth();
    const navigate = useNavigate();

    const showToast = (message: string, type: 'success' | 'error') => {
        setToast({ message, type });
        setTimeout(() => setToast(null), 3500);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        const result = authMode === 'login'
            ? await login(email, password)
            : await signup(name, email, password);

        setIsLoading(false);

        if (result.success) {
            showToast(authMode === 'login' ? 'Welcome back!' : 'Account created successfully!', 'success');
            setTimeout(() => navigate('/dashboard'), 1000);
        } else {
            showToast(result.error || 'Something went wrong. Please try again.', 'error');
        }
    };

    return (
        <main className="min-h-screen bg-v-gray flex">
            {toast && <Toast message={toast.message} type={toast.type} />}

            {/* Left Column - Form */}
            <div className="flex-1 flex flex-col justify-center px-4 sm:px-6 lg:flex-none lg:w-1/2 lg:px-20 xl:px-24">
                <div className="mx-auto w-full max-w-sm lg:w-96">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-display font-bold text-v-black tracking-tight mt-12">
                            {authMode === 'login' ? 'Welcome back' : 'Create account'}
                        </h1>
                        <p className="mt-4 text-slate-500">
                            {authMode === 'login' ? 'Log in to access your saved properties and searches.' : 'Join Mumbai\'s most exclusive real estate network.'}
                        </p>
                    </div>

                    <div className="mt-10">
                        <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                            {authMode === 'signup' && (
                                <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }}>
                                    <label htmlFor="name" className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">
                                        Full Name
                                    </label>
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        autoComplete="name"
                                        required
                                        value={name}
                                        onChange={e => setName(e.target.value)}
                                        className="w-full p-4 rounded-xl border border-black/10 bg-white focus:outline-none focus:ring-2 focus:ring-v-blue transition-all"
                                        placeholder="Arjun Mehta"
                                    />
                                </motion.div>
                            )}

                            <div>
                                <label htmlFor="email" className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">
                                    Email address
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    className="w-full p-4 rounded-xl border border-black/10 bg-white focus:outline-none focus:ring-2 focus:ring-v-blue transition-all"
                                    placeholder="arjun@example.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="password" className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">
                                    Password
                                </label>
                                <div className="relative">
                                    <input
                                        id="password"
                                        name="password"
                                        type={showPassword ? 'text' : 'password'}
                                        autoComplete={authMode === 'login' ? 'current-password' : 'new-password'}
                                        required
                                        value={password}
                                        onChange={e => setPassword(e.target.value)}
                                        className="w-full p-4 pr-12 rounded-xl border border-black/10 bg-white focus:outline-none focus:ring-2 focus:ring-v-blue transition-all"
                                        placeholder="••••••••"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                                        aria-label={showPassword ? 'Hide password' : 'Show password'}
                                    >
                                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                    </button>
                                </div>
                                {authMode === 'signup' && (
                                    <p className="mt-1.5 text-xs text-slate-400">Must be at least 6 characters.</p>
                                )}
                            </div>

                            {authMode === 'login' && (
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-v-blue focus:ring-v-blue" />
                                        <label htmlFor="remember-me" className="ml-2 block text-sm text-slate-500">Remember me</label>
                                    </div>
                                    <button type="button" className="text-sm font-bold text-v-blue hover:text-indigo-500">Forgot password?</button>
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full flex justify-center py-4 px-4 border border-transparent rounded-full shadow-sm text-sm font-bold text-white bg-v-black hover:bg-v-blue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-v-blue transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                                aria-busy={isLoading}
                            >
                                {isLoading ? (
                                    <span className="flex items-center gap-2">
                                        <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                                        </svg>
                                        {authMode === 'login' ? 'Signing in...' : 'Creating account...'}
                                    </span>
                                ) : authMode === 'login' ? 'Sign in' : 'Create account'}
                            </button>
                        </form>

                        <p className="mt-8 text-center text-sm text-slate-500 font-medium">
                            {authMode === 'login' ? 'New to Verified.RealEstate? ' : 'Already have an account? '}
                            <button
                                onClick={() => setAuthMode(authMode === 'login' ? 'signup' : 'login')}
                                className="font-bold text-v-blue hover:underline"
                            >
                                {authMode === 'login' ? 'Create one now' : 'Log in here'}
                            </button>
                        </p>
                    </div>
                </div>
            </div>

            {/* Right Column - Image Showcase */}
            <div className="hidden lg:block relative w-0 flex-1">
                <img
                    className="absolute inset-0 h-full w-full object-cover"
                    src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000&q=80"
                    alt="Luxury Mumbai Real Estate"
                    referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-v-black via-v-black/40 to-transparent mix-blend-multiply opacity-80" />
                <div className="absolute bottom-16 left-16 max-w-xl text-white">
                    <BadgeCheck className="w-12 h-12 mb-6 text-white drop-shadow-lg" aria-hidden="true" />
                    <h2 className="text-4xl font-display font-bold tracking-tight mb-4 leading-tight">
                        Exclusive properties, unparalleled transparency.
                    </h2>
                    <p className="text-lg text-slate-300 font-medium">
                        From algorithmic pricing engines to independent legal verification teams, we bring complete peace of mind to Mumbai's premium real estate market.
                    </p>
                </div>
            </div>
        </main>
    );
}
