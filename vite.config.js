import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    minify: true,
    chunkSizeWarningLimit: 1000, // زيادة الحد المسموح به
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          router: ['react-router-dom'],
          // يمكنك إضافة المزيد من المكتبات هنا
        }
      }
    }
  },
  base: '/', // تأكد من هذه القيمة
});