import { defineConfig } from 'vite';
// import legacy from '@vitejs/plugin-legacy';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { viteSingleFile } from 'vite-plugin-singlefile';
import viteJuicePlugin from './vite-plugin-juice';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [
    // legacy(),
    viteSingleFile(),
    viteJuicePlugin({
      enabled: false,
    }),
  ],
  build: {
    reportCompressedSize: false,
    modulePreload: { polyfill: false },
    rollupOptions: {
      input: {
        // main: resolve(__dirname, 'index.html'),
        nested: resolve(__dirname, 'src/nested/index.html'),
      },
    },
  },
});
