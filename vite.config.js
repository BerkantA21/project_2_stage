import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
 
export default defineConfig({
    plugins: [
        laravel({
          input: 'src/scss/styles.scss',
          publicDirectory: '/src',
        }),
    ],
    resolve: {
        alias: {
            '~': '/node_modules',
        },
    },
});