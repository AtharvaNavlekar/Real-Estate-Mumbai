import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, BadgeCheck, Github, Mail } from 'lucide-react';

export default function Auth() {
    const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Mock login logic
        navigate('/dashboard');
    };

    return (
        <main className="min-h-screen bg-v-gray flex">
            {/* Left Column - Form */}
            <div className="flex-1 flex flex-col justify-center px-4 sm:px-6 lg:flex-none lg:w-1/2 lg:px-20 xl:px-24">
                <div className="mx-auto w-full max-w-sm lg:w-96">
                    <Link to="/" className="inline-flex items-center text-sm font-bold uppercase tracking-widest text-slate-500 hover:text-v-blue transition-colors mb-12">
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
                    </Link>

                    <div>
                        <div className="w-12 h-12 bg-v-black rounded-full flex items-center justify-center shadow-inner mb-6">
                            <BadgeCheck className="w-7 h-7 text-white drop-shadow-sm" />
                        </div>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-v-black tracking-tight">
                            {authMode === 'login' ? 'Welcome back' : 'Create account'}
                        </h2>
                        <p className="mt-4 text-slate-500">
                            {authMode === 'login' ? 'Log in to access your saved properties and searches.' : 'Join Mumbai\'s most exclusive real estate network.'}
                        </p>
                    </div>

                    <div className="mt-10">
                        <div className="mt-6">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {authMode === 'signup' && (
                                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }}>
                                        <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">
                                            Full Name
                                        </label>
                                        <div className="mt-1">
                                            <input
                                                id="name"
                                                name="name"
                                                type="text"
                                                autoComplete="name"
                                                required
                                                className="w-full p-4 rounded-xl border border-black/10 bg-white focus:outline-none focus:ring-2 focus:ring-v-blue transition-all"
                                                placeholder="Arjun Mehta"
                                            />
                                        </div>
                                    </motion.div>
                                )}

                                <div>
                                    <label htmlFor="email" className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">
                                        Email address
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            autoComplete="email"
                                            required
                                            className="w-full p-4 rounded-xl border border-black/10 bg-white focus:outline-none focus:ring-2 focus:ring-v-blue transition-all"
                                            placeholder="arjun@example.com"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-1">
                                    <label htmlFor="password" className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">
                                        Password
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            id="password"
                                            name="password"
                                            type="password"
                                            autoComplete="current-password"
                                            required
                                            className="w-full p-4 rounded-xl border border-black/10 bg-white focus:outline-none focus:ring-2 focus:ring-v-blue transition-all"
                                            placeholder="••••••••"
                                        />
                                    </div>
                                </div>

                                {authMode === 'login' && (
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center">
                                            <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-v-blue focus:ring-v-blue" />
                                            <label htmlFor="remember-me" className="ml-2 block text-sm text-slate-500">
                                                Remember me
                                            </label>
                                        </div>

                                        <div className="text-sm">
                                            <a href="#" className="font-bold text-v-blue hover:text-indigo-500">
                                                Forgot your password?
                                            </a>
                                        </div>
                                    </div>
                                )}

                                <div>
                                    <button
                                        type="submit"
                                        className="w-full flex justify-center py-4 px-4 border border-transparent rounded-full shadow-sm text-sm font-bold text-white bg-v-black hover:bg-v-blue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-v-blue transition-colors"
                                    >
                                        {authMode === 'login' ? 'Sign in' : 'Create account'}
                                    </button>
                                </div>
                            </form>

                            <div className="mt-6">
                                <div className="relative">
                                    <div className="absolute inset-0 flex items-center">
                                        <div className="w-full border-t border-slate-200" />
                                    </div>
                                    <div className="relative flex justify-center text-sm">
                                        <span className="px-2 bg-v-gray text-slate-500">Or continue with</span>
                                    </div>
                                </div>

                                <div className="mt-6 grid grid-cols-2 gap-3">
                                    <button className="w-full inline-flex justify-center items-center py-3 px-4 border border-slate-200 rounded-xl bg-white text-sm font-medium text-slate-500 hover:bg-slate-50 transition-colors">
                                        <span className="sr-only">Sign in with Google</span>
                                        <Mail className="w-5 h-5 text-red-500" />
                                    </button>
                                    <button className="w-full inline-flex justify-center items-center py-3 px-4 border border-slate-200 rounded-xl bg-white text-sm font-medium text-slate-500 hover:bg-slate-50 transition-colors">
                                        <span className="sr-only">Sign in with Apple</span>
                                        <Github className="w-5 h-5 text-slate-900" />
                                    </button>
                                </div>
                            </div>

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
                    <BadgeCheck className="w-12 h-12 mb-6 text-white drop-shadow-lg" />
                    <h2 className="text-4xl font-display font-bold tracking-tight mb-4 leading-tight">
                        Exclusive properties, unparalleled transparency.
                    </h2>
                    <p className="text-lg text-slate-300 font-medium">
                        Join the platform built entirely on logic. From algorithmic pricing engines to independent legal verification teams, we bring complete peace of mind to Mumbai's premium real estate market.
                    </p>
                </div>
            </div>
        </main>
    );
}
