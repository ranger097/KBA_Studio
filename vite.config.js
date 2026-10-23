import { sveltekit } from '@sveltejs/kit/vite';
import adapter from '@sveltejs/adapter-static';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [
        sveltekit({
            adapter: adapter({
                pages: 'build',
                assets: 'build',
                fallback: '404.html', // Recommended for client-side routing
                precompress: false,
                strict: true
            }),
            paths: {
                // Replace '/KBA_Studio' with your exact GitHub repository name
                // Leave it empty ('') if your repo is username.github.io
                base: process.env.NODE_ENV === 'production' ? '/KBA_Studio' : ''
	        relative: false
            }
        })
    ]
});
