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
        fallback: '404.html',
        precompress: false,
        strict: true
      }),
      // Use empty base in dev, otherwise use the CI-provided BASE_PATH
      paths: {
        base: process.argv.includes('dev') ? '' : process.env.BASE_PATH || ''
      }
    })
  ]
});
