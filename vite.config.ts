import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            src: '/src',
            components: '/src/components',
            pages: '/src/pages',
            assets: '/src/assets',
            api: '/src/api',
            helpers: '/src/helpers',
            styles: '/src/styles',
            hooks: '/src/hooks',
        },
    },
    base: '/food-boutique',
});
