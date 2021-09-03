// vite.config.js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from "@vitejs/plugin-vue-jsx";
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    extensions: ['.mjs', '.js', '.ts','.vue', '.jsx', '.tsx', '.json']
  },
  plugins: [vue(),vueJsx()],
  module: {
    rules: [
      { test: /\.tsx$/, loader: 'ts-loader'}
    ]
  }
})
