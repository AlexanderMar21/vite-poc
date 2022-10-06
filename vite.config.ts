import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/components/index.ts"),
      name: "UI LIBRARY",
      fileName: (format) => `ui-lib.${format}.js`,
    },
    rollupOptions: {
      output: {
        globals: {
          vue: 'Vue',
        },
      },
      // make sure to externalize deps that shouldn't be bundled into your library

      external: ["vue"],
    },
  },
})
