import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  root: '.',
  publicDir: 'public',
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: './public/index.html',  // 명시적으로 index.html 경로 지정
      },
    },
  },
});
