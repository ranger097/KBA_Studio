import process from 'node:process';
import adapter from '@sveltejs/adapter-static';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    sveltekit({
      adapter: adapter({
        pages: 'build',
        assets: 'build',
        // generate a 404.html fallback for GitHub Pages
        fallback: '404.html',
        strict: true
      }),
      // use the BASE_PATH provided by the GitHub Actions step
      paths: {
        base: process.env.BASE_PATH || ''
      },
      // ensure prerendering works — do not set ssr: false
      // trailingSlash: 'always' // uncomment if you need /a/index.html instead of /a.html
    })
  ]
});
