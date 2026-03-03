import { useState } from 'react';
import { Lock, ShieldCheck, Mail, ArrowRight, Activity, Terminal } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [authenticating, setAuthenticating] = useState(false);
    const [authStep, setAuthStep] = useState(0);
    const navigate = useNavigate();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        setAuthenticating(true);

        // Simulate complex decrypting animation
        const steps = [
            () => setAuthStep(1),
            () => setAuthStep(2),
            () => setAuthStep(3),
            () => navigate('/dashboard')
        ];

        steps.forEach((step, index) => {
            setTimeout(step, index * 800);
        });
    };

    const authMessages = [
        "Awaiting credentials...",
        "Negotiating secure handshake...",
        "Validating deep-ocean clearance...",
        "Access Granted. Redirecting..."
    ];

    return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center relative overflow-hidden font-sans">

            {/* Immersive Background Nodes (Light) */}
            <div className="absolute inset-0 z-0">
                <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
                    transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-v-blue/20 rounded-full blur-[140px]"
                />
                <motion.div
                    animate={{ scale: [1, 1.5, 1], opacity: [0.1, 0.2, 0.1] }}
                    transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
                    className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] bg-emerald-500/10 rounded-full blur-[150px]"
                />
            </div>

            <div className="w-full max-w-5xl z-10 flex flex-col md:flex-row gap-12 items-center p-6">

                {/* Left Panel: Brand & Secure Context */}
                <div className="flex-1 space-y-8">
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-lg border border-black/5">
                            <ShieldCheck className="w-6 h-6 text-v-blue" />
                        </div>
                        <h1 className="text-2xl font-display font-black tracking-tight text-v-black">VANGUARD <span className="font-light text-slate-400">| ADMIN</span></h1>
                    </div>

                    <div>
                        <h2 className="text-6xl font-display font-black tracking-tighter text-v-black leading-tight mb-4">
                            Strategic <br /> <span className="text-v-blue">Command.</span>
                        </h2>
                        <p className="text-slate-500 font-medium text-lg max-w-md">
                            You are entering a high-clearance zone. All operations within this vector are logged, tracked, and cryptographically verified.
                        </p>
                    </div>

                    <div className="flex items-center gap-8 border-t border-black/5 pt-8">
                        <div className="flex flex-col gap-1">
                            <span className="text-xs font-bold font-mono text-slate-400 uppercase tracking-widest">Server Status</span>
                            <span className="flex items-center gap-2 text-emerald-600 font-black text-sm">
                                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                                ONLINE & SECURE
                            </span>
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="text-xs font-bold font-mono text-slate-400 uppercase tracking-widest">Protocol</span>
                            <span className="text-v-black font-black text-sm">AES-256</span>
                        </div>
                    </div>
                </div>

                {/* Right Panel: Authentication Node */}
                <div className="w-full max-w-md">
                    <form onSubmit={handleLogin} className="glass-panel border border-black/5 p-8 sm:p-10 rounded-[2rem] shadow-2xl relative overflow-hidden bg-white/80">

                        {/* Subtle Top Glow */}
                        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-v-blue/50 to-transparent" />

                        <div className="mb-10 text-center">
                            <div className="w-20 h-20 bg-slate-50 rounded-full border border-black/5 shadow-inner flex items-center justify-center mx-auto mb-4 relative">
                                <Lock className="w-8 h-8 text-v-blue" />
                                {authenticating && (
                                    <motion.div animate={{ rotate: 360 }} transition={{ duration: 2, repeat: Infinity, ease: 'linear' }} className="absolute inset-[-4px] rounded-full border-2 border-transparent border-t-v-blue" />
                                )}
                            </div>
                            <h3 className="text-xl font-bold text-v-black">Authenticate Identity</h3>
                            <p className="text-sm text-slate-500 font-medium mt-1">Requires biometric or cryptokey.</p>
                        </div>

                        <div className="space-y-5 relative z-10">
                            <div>
                                <label className="block text-xs font-bold text-slate-600 uppercase tracking-widest mb-2">Director Email</label>
                                <div className="relative group">
                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-v-blue transition-colors" />
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full bg-slate-50 border border-black/5 rounded-xl pl-12 pr-4 py-3.5 text-v-black font-medium focus:outline-none focus:ring-2 focus:ring-v-blue/20 transition-all placeholder-slate-400"
                                        placeholder="admin@vanguard.net"
                                        disabled={authenticating}
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <div className="flex justify-between mb-2">
                                    <label className="block text-xs font-bold text-slate-600 uppercase tracking-widest">Master Key</label>
                                    <a href="#" className="flex text-xs font-bold text-v-blue hover:text-blue-700">Rotate Key?</a>
                                </div>
                                <div className="relative group">
                                    <Terminal className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-v-blue transition-colors" />
                                    <input
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="w-full bg-slate-50 border border-black/5 rounded-xl pl-12 pr-4 py-3.5 text-v-black font-mono focus:outline-none focus:ring-2 focus:ring-v-blue/20 transition-all placeholder-slate-400"
                                        placeholder="••••••••••••••"
                                        disabled={authenticating}
                                        required
                                    />
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={authenticating}
                                className={`w - full py - 4 rounded - xl font - black text - sm uppercase tracking - widest transition - all shadow - xl flex items - center justify - center gap - 2 overflow - hidden relative group ${authenticating ? 'bg-slate-200 text-slate-500 shadow-none' : 'bg-v-black text-white hover:bg-slate-800 shadow-black/20 hover:scale-[1.02] active:scale-[0.98]'} `}
                            >
                                {authenticating ? (
                                    <span className="flex items-center gap-2">
                                        <Activity className="w-5 h-5 animate-pulse" /> Decrypting Node...
                                    </span>
                                ) : (
                                    <>
                                        <span>Initialize Session</span>
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </>
                                )}
                            </button>

                            {/* Diagnostic Output */}
                            <div className="h-6 mt-4 flex items-center justify-center">
                                <AnimatePresence mode="wait">
                                    <motion.p
                                        key={authStep}
                                        initial={{ opacity: 0, y: 5 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -5 }}
                                        className="text-xs font-mono font-bold text-slate-500"
                                    >
                                        {authMessages[authStep]}
                                    </motion.p>
                                </AnimatePresence>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
