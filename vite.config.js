// vite.config.js
import adapter from '@sveltejs/adapter-static';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

const dev = process.env.NODE_ENV === 'development';

export default defineConfig({
  plugins: [
    sveltekit({
      config: {
        kit: {
          adapter: adapter({
            pages: 'docs',
            assets: 'docs',
            fallback: null,
            precompress: false,
            strict: true
          }),
          paths: {
            base: dev ? '' : '/KBA_Studio'
          }
        }
      }
    })
  ]
});
