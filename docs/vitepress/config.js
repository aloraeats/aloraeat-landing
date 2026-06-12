import { defineConfig } from 'vitepress';

export default defineConfig({
    title: 'Alora Eat Docs',
    description: 'Documentation for Alora Eat — Modern restaurant management for Ghana.',

    // Deploys to docs.aloraeat.xyz
    // No base needed since it's a subdomain not a subfolder
    base: '/',

    // Output goes to docs/.vitepress/dist
    // GitHub Actions will deploy this to docs.aloraeat.xyz
    outDir: '.vitepress/dist',

    themeConfig: {
        logo: null,
        siteTitle: '🍽️ Alora Eat',

        // Brand green matches landing page exactly
        // VitePress uses CSS vars for theming
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Getting Started', link: '/getting-started' },
            { text: '← Back to aloraeat.xyz', link: 'https://aloraeat.xyz' },
        ],

        sidebar: [
            {
                text: 'Introduction',
                items: [
                    { text: 'Overview', link: '/' },
                    { text: 'Getting Started', link: '/getting-started' },
                ],
            },
            {
                text: 'Features',
                items: [
                    { text: 'QR Ordering',       link: '/qr-ordering' },
                    { text: 'Kitchen Board',      link: '/kitchen-board' },
                    { text: 'Menu Management',    link: '/menu-management' },
                    { text: 'Staff Management',   link: '/staff-management' },
                    { text: 'Branches',           link: '/branches' },
                    { text: 'Inventory',          link: '/inventory' },
                    { text: 'Billing',            link: '/billing' },
                ],
            },
        ],

        socialLinks: [
            {
                icon: 'github',
                link: 'https://github.com/your-github-username/aloraeat-landing',
            },
        ],

        footer: {
            message: 'Built for Ghana 🇬🇭',
            copyright: '© 2026 Alora Eat',
        },

        search: {
            provider: 'local',
        },
    },

    // Brand green color override
    head: [
        [
            'style',
            {},
            `
            :root {
                --vp-c-brand-1: #22c55e;
                --vp-c-brand-2: #16a34a;
                --vp-c-brand-3: #15803d;
                --vp-c-brand-soft: rgba(34, 197, 94, 0.1);
            }
            `,
        ],
    ],
});