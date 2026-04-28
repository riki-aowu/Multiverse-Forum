import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// GitHub Pages 子路径部署用
// 仓库名：Multiverse-Forum
export default defineConfig({
  plugins: [react()],
  base: '/Multiverse-Forum/',
});
