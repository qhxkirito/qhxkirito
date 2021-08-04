import type { Plugin } from 'vite';

import vue from '@vitejs/plugin-vue';
// import { configThemePlugin } from './theme';
// import { configImageminPlugin } from './imagemin';
import { configSvgIconsPlugin } from './svgSprite';

export function createVitePlugins(isBuild: boolean) {


  const vitePlugins: (Plugin | Plugin[])[] = [
    // have to
    vue(),
    // have to
    // vueJsx(),
  ];

  
  vitePlugins.push(configSvgIconsPlugin(isBuild));
  
  // vitePlugins.push(configThemePlugin(isBuild));

  return vitePlugins;
}
