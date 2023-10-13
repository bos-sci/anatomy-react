import { defineConfig } from 'vite';
import { resolve } from 'path';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import eslint from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '/components/': '/src/components/',
      '/helpers/': '/src/helpers/',
      '/hooks/': '/src/hooks/',
      '/stories/': '/src/stories/',
      'types': '/src/types.ts'
    }
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'anatomy-react',

      fileName: (format) => `anatomy-react.${format}.js`
    },
    outDir: 'lib',
    sourcemap: true,
    rollupOptions: {
      external: ['react', 'react-dom', 'react-router-dom'],
      output: {
        globals: {
          react: 'React'
        }
      }
    }
  },
  plugins: [
    react(),
    dts({
      insertTypesEntry: true
    }),
    eslint()
  ]
});
