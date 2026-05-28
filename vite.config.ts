import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { vitePrerenderPlugin } from 'vite-prerender-plugin';
import Sitemap from 'vite-plugin-sitemap';
import { getBlogRoutes } from './prerender/blog-routes.js';
import { getSitemapLastmod } from './prerender/blog-sitemap.js';

function escapeHtmlAttr(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  const appTitle = escapeHtmlAttr(
    env.VITE_APP_TITLE || env.OVERVIEW_TITLE || 'DCA Travel'
  );

  const appDescription = escapeHtmlAttr(
    env.VITE_APP_DESCRIPTION ||
      env.OVERVIEW_DESCRIPTION ||
      'Operadora de viajes para agencias: itinerarios, materiales y experiencias en LATAM.'
  );

  const siteUrl = env.VITE_SITE_URL || 'https://dcatravel.com';
  const backendUrl = env.VITE_BACKEND_URL?.trim();

  const blogPrerenderRoutes = command === 'build' ? getBlogRoutes() : [];

  return {
    plugins: [
      react(),

      Sitemap({
        hostname: siteUrl,
        lastmod: getSitemapLastmod(),
        readable: true,
        generateRobotsTxt: true,
      }),

      ...(blogPrerenderRoutes.length > 0
        ? [
            vitePrerenderPlugin({
              renderTarget: '#root',
              prerenderScript: path.resolve(__dirname, 'prerender/blog.js'),
              additionalPrerenderRoutes: blogPrerenderRoutes,
            }),
          ]
        : []),
    ],

    define: {
      'process.env.VITE_APP_TITLE': JSON.stringify(appTitle),
      'process.env.VITE_APP_DESCRIPTION': JSON.stringify(appDescription),
      'process.env.VITE_APP_LOGO_URL': JSON.stringify(
        env.VITE_APP_LOGO_URL || env.OVERVIEW_LOGO_URL || '/favicon.svg'
      ),
    },

    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },

    server: {
      host: '0.0.0.0',
      port: Number(env.VITE_PORT || 5173),

      // Solo activa proxy si existe VITE_BACKEND_URL.
      // Si estás trabajando solo frontend, déjalo vacío o no lo declares.
      proxy: backendUrl
        ? {
            '/api': {
              target: backendUrl,
              changeOrigin: true,
              secure: false,
            },
            '/admin': {
              target: backendUrl,
              changeOrigin: true,
              secure: false,
            },
            '/media': {
              target: backendUrl,
              changeOrigin: true,
              secure: false,
            },
          }
        : undefined,

      watch: {
        usePolling: true,
        interval: 600,
      },
    },

    build: {
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('react-router-dom')) return 'router-vendor';

            if (id.includes('react') && !id.includes('react-router-dom')) {
              return 'react-vendor';
            }

            if (
              [
                '@radix-ui/react-accordion',
                '@radix-ui/react-alert-dialog',
                '@radix-ui/react-aspect-ratio',
                '@radix-ui/react-avatar',
                '@radix-ui/react-checkbox',
                '@radix-ui/react-collapsible',
                '@radix-ui/react-context-menu',
                '@radix-ui/react-dialog',
                '@radix-ui/react-dropdown-menu',
                '@radix-ui/react-hover-card',
                '@radix-ui/react-label',
                '@radix-ui/react-menubar',
                '@radix-ui/react-navigation-menu',
                '@radix-ui/react-popover',
                '@radix-ui/react-progress',
                '@radix-ui/react-radio-group',
                '@radix-ui/react-scroll-area',
                '@radix-ui/react-select',
                '@radix-ui/react-separator',
                '@radix-ui/react-slider',
                '@radix-ui/react-slot',
                '@radix-ui/react-switch',
                '@radix-ui/react-tabs',
                '@radix-ui/react-toast',
                '@radix-ui/react-toggle',
                '@radix-ui/react-toggle-group',
                '@radix-ui/react-tooltip',
              ].some((pkg) => id.includes(pkg))
            ) {
              return 'ui-vendor';
            }

            if (
              ['react-hook-form', '@hookform/resolvers', 'zod'].some((pkg) =>
                id.includes(pkg)
              )
            ) {
              return 'form-vendor';
            }

            if (
              [
                'axios',
                'clsx',
                'tailwind-merge',
                'class-variance-authority',
                'date-fns',
                'lucide-react',
              ].some((pkg) => id.includes(pkg))
            ) {
              return 'utils-vendor';
            }

            if (id.includes('@tanstack/react-query')) {
              return 'query-vendor';
            }
          },
        },
      },

      chunkSizeWarningLimit: 1000,
    },
  };
});