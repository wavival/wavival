import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://photography-landing.dev',
  vite: {
    ssr: {
      external: ['lucide-astro']
    }
  },
  experimental: {
    assets: true
  }
});
