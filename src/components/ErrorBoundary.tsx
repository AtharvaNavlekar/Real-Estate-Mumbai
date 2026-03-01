import React, { Component, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';

interface Props {
    children: ReactNode;
    fallback?: ReactNode;
    /** Label shown in the fallback to help identify which section crashed */
    section?: string;
}

interface State {
    hasError: boolean;
    error: Error | null;
}

/**
 * ErrorBoundary — catches any render or lifecycle errors in its subtree
 * and shows a user-friendly fallback instead of a blank white screen.
 *
 * Usage:
 *   <ErrorBoundary section="Property Details">
 *     <PropertyDetails />
 *   </ErrorBoundary>
 */
export default class ErrorBoundary extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error };
    }

    componentDidCatch(error: Error, info: React.ErrorInfo) {
        // In production, send to an error monitoring service (Sentry, etc.)
        console.error(`[ErrorBoundary:${this.props.section || 'App'}]`, error, info.componentStack);
    }

    private handleReset = () => {
        this.setState({ hasError: false, error: null });
    };

    render() {
        if (!this.state.hasError) return this.props.children;

        // Use custom fallback if provided
        if (this.props.fallback) return this.props.fallback;

        return (
            <div
                className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6 py-20"
                role="alert"
                aria-live="assertive"
            >
                <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mb-6">
                    <AlertTriangle className="w-8 h-8 text-red-400" aria-hidden="true" />
                </div>
                <h2 className="text-2xl font-display font-bold text-v-black mb-3">
                    Something went wrong
                </h2>
                <p className="text-slate-500 max-w-md mb-8 text-sm leading-relaxed">
                    {this.props.section
                        ? `The "${this.props.section}" section encountered an unexpected error.`
                        : 'An unexpected error occurred while loading this page.'}
                    {' '}Please try refreshing or go back to the homepage.
                </p>

                <div className="flex items-center gap-4">
                    <button
                        onClick={this.handleReset}
                        className="flex items-center gap-2 px-6 py-3 bg-v-black text-white rounded-full text-sm font-bold hover:bg-v-blue transition-colors"
                    >
                        <RefreshCw className="w-4 h-4" aria-hidden="true" />
                        Try Again
                    </button>
                    <a
                        href="/"
                        className="flex items-center gap-2 px-6 py-3 border border-black/10 text-v-black rounded-full text-sm font-bold hover:bg-slate-50 transition-colors"
                    >
                        <Home className="w-4 h-4" aria-hidden="true" />
                        Go Home
                    </a>
                </div>

                {/* Dev-only error details */}
                {process.env.NODE_ENV === 'development' && this.state.error && (
                    <details className="mt-10 text-left max-w-2xl w-full">
                        <summary className="text-xs font-bold uppercase tracking-widest text-slate-400 cursor-pointer mb-2">
                            Error Details (development only)
                        </summary>
                        <pre className="text-xs bg-slate-50 border border-slate-200 rounded-xl p-4 overflow-x-auto text-red-600 whitespace-pre-wrap">
                            {this.state.error.toString()}
                        </pre>
                    </details>
                )}
            </div>
        );
    }
}
