import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  const isProd = mode === 'production';

  return {
    plugins: [react(), tailwindcss()],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
      // Strip console.log and console.error in production
      ...(isProd ? {
        'globalThis.__DEV__': 'false',
      } : {
        'globalThis.__DEV__': 'true',
      }),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify — file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
    },
    build: {
      // Production build hardening
      sourcemap: false,  // Don't expose source maps in production
      rollupOptions: {
        output: {
          // Consistent chunk naming for cache-busting
          chunkFileNames: 'assets/[hash].js',
          entryFileNames: 'assets/[hash].js',
          assetFileNames: 'assets/[hash].[ext]',
        },
      },
    },
    esbuild: isProd ? {
      // Remove console.log and console.warn in production builds
      drop: ['console', 'debugger'],
    } : undefined,
  };
});
