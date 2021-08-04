/**
 *  Vite Plugin for fast creating SVG sprites.
 * https://github.com/anncwb/vite-plugin-svg-icons
 */

import viteSvgIcons from 'vite-plugin-svg-icons';

import { resolve } from 'path';

export function configSvgIconsPlugin(isBuild: boolean) {
  const svgIconsPlugin = viteSvgIcons({
    iconDirs: [resolve(process.cwd(), 'src/assets/svg')],
    svgoOptions: isBuild,
    // default
    symbolId: 'icon-[dir]-[name]',
  });
  return svgIconsPlugin;
}
