import { defineConfig } from "vite";
import { resolve } from "path";
import { createVitePlugins } from './build/vite/plugin';

const pathResolve = (dir: string): string => {
  return resolve(__dirname, ".", dir);
};

export default defineConfig({
  resolve: {
    alias: [
      // /@/xxxx => src/xxxx
      {
        find: /@\//,
        replacement: pathResolve('src') + '/',
      },
      // /#/xxxx => types/xxxx
      {
        find: /#\//,
        replacement: pathResolve('types') + '/',
      },
    ],
  },
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {},
        javascriptEnabled: true,
      },
    },
  },
  plugins: createVitePlugins(false),
});