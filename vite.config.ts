import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/ชื่อ-repo/',
  plugins: [react()],
});
