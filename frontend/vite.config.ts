import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        embed: resolve(__dirname, 'embed.html'),
      },
      output: {
        entryFileNames: (chunkInfo) => {
          if (chunkInfo.name === 'embed') {
            return 'assets/embed.js';
          }
          return 'assets/[name]-[hash].js';
        },
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          // CSS com hash para evitar problemas de cache
          if (assetInfo.name && assetInfo.name.endsWith('.css')) {
            if (assetInfo.names && assetInfo.names.some((name: string) => name.includes('embed'))) {
              return 'assets/embed-[hash].css';
            }
            // CSS principal com hash
            return 'assets/index-[hash].css';
          }
          return 'assets/[name]-[hash].[ext]';
        },
      },
    },
  },
})





