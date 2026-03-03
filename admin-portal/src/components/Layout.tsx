import { Outlet, NavLink, useNavigate, useLocation } from 'react-router-dom';
import { LayoutDashboard, Building2, Users, Settings, LogOut, Bell, Search, Command } from 'lucide-react';
import { motion } from 'motion/react';

export default function Layout() {
    const navigate = useNavigate();
    const location = useLocation();

    const navLinks = [
        { path: '/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
        { path: '/properties', icon: Building2, label: 'Properties' },
        { path: '/leads', icon: Users, label: 'Leads CRM' },
    ];

    return (
        <div className="min-h-screen bg-slate-50 flex text-v-black font-sans selection:bg-v-blue selection:text-white overflow-hidden">
            {/* Sidebar */}
            <aside className="w-64 bg-white/70 backdrop-blur-2xl border-r border-black/5 flex flex-col relative z-20">
                <div className="p-8 shrink-0">
                    <div className="flex items-center gap-3 mb-1">
                        <div className="w-8 h-8 rounded-xl bg-v-black flex items-center justify-center shadow-lg shadow-black/10">
                            <div className="w-3 h-3 rounded-full bg-white animate-pulse" />
                        </div>
                        <h1 className="text-xl font-display font-black tracking-tight text-v-black">VANGUARD</h1>
                    </div>
                    <p className="text-[10px] uppercase font-black tracking-widest text-slate-400 ml-11">Admin Portal</p>
                </div>

                <nav className="flex-1 px-4 space-y-2 mt-4">
                    {navLinks.map((link) => {
                        const Icon = link.icon;
                        const isActive = location.pathname.includes(link.path);
                        return (
                            <NavLink
                                key={link.path}
                                to={link.path}
                                className={({ isActive }) =>
                    \`flex items-center gap-3 px-4 py-3 rounded-xl font-bold transition-all relative group \${isActive ? 'text-v-blue bg-v-blue/5' : 'text-slate-500 hover:text-v-black hover:bg-slate-100'
                    }\`
                                }
                            >
                    <Icon className={\`w-5 h-5 \${isActive ? 'drop-shadow-sm' : ''}\`} />
                    {link.label}
                    {isActive && (
                        <motion.div
                            layoutId="sidebar-active"
                            className="absolute left-0 w-1 h-6 bg-v-blue rounded-r-md shadow-sm"
                            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        />
                    )}
                </NavLink>
                );
                    })}
            </nav>

            <div className="p-4 shrink-0">
                <div className="glass-panel p-4 rounded-2xl mb-4 bg-white border border-black/5 shadow-sm">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-full bg-slate-100 border border-black/5 overflow-hidden">
                            <img src="https://ui-avatars.com/api/?name=Admin+User&background=0A0A0A&color=fff" alt="Admin" className="w-full h-full object-cover" />
                        </div>
                        <div>
                            <p className="text-sm font-bold text-v-black">A. Navlekar</p>
                            <p className="text-[10px] font-bold uppercase tracking-widest text-emerald-600">Super Admin</p>
                        </div>
                    </div>
                    <button className="w-full flex items-center justify-center gap-2 py-2 text-xs font-bold text-slate-500 hover:text-v-black bg-slate-50 hover:bg-slate-100 rounded-lg transition-colors border border-black/5">
                        <Settings className="w-4 h-4" /> Preferences
                    </button>
                </div>

                <button
                    onClick={() => navigate('/login')}
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-red-600 hover:bg-red-50 transition-colors border border-transparent hover:border-red-100"
                >
                    <LogOut className="w-5 h-5" />
                    Terminate Session
                </button>
            </div>
        </aside>

            {/* Main Content Pane */ }
    <main className="flex-1 flex flex-col h-screen relative z-10">
        {/* Header */}
        <header className="h-20 border-b border-black/5 bg-white/70 backdrop-blur-md flex items-center justify-between px-10 shrink-0 sticky top-0 z-30">
            <div className="flex items-center gap-4 flex-1">
                <div className="relative group max-w-md w-full">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-v-blue transition-colors" />
                    <input
                        type="text"
                        placeholder="Command Palette..."
                        className="w-full bg-white border border-black/5 rounded-xl pl-11 pr-12 py-2.5 text-sm font-medium focus:outline-none focus:border-v-blue/30 focus:shadow-sm transition-all text-v-black placeholder-slate-400 shadow-sm"
                    />
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1 opacity-50">
                        <Command className="w-3 h-3" />
                        <span className="text-[10px] font-bold">K</span>
                    </div>
                </div>
            </div>

            <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)] animate-pulse" />
                    <span className="text-xs font-bold uppercase tracking-widest text-slate-500">System Nominal</span>
                </div>
                <div className="h-6 w-px bg-black/10" />
                <button className="relative p-2 text-slate-400 hover:text-v-black transition-colors rounded-lg hover:bg-slate-50">
                    <Bell className="w-5 h-5" />
                    <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-v-blue shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                </button>
            </div>
        </header>

        <div className="p-10 flex-1 overflow-y-auto">
            <Outlet />
        </div>
    </main>
        </div >
    );
}
