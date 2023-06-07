import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(
    {
        base: '/TOP_ShoppingCart_ReactRouter/',
        plugins:
            [
                react(),
                '@babel/plugin-syntax-jsx',
            ],
        test: {
          globals: true,
          environment: 'jsdom',
          setupFiles: './src/testing/setup.js'
  },
    }
);
