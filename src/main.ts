// main.ts

// 基础样式
import '@/design/index.less';
import '@/design/tailwind.css';
// 雪碧图
import 'virtual:svg-icons-register';
import { createApp } from 'vue'
import App from './App.vue'

// rem转换
import "@/components/common/plugins/Autosize";
// 路由
import router from '@/router'
// import HelloWord from '@/components/HelloWord.vue'
// import FocusDirective from '@/directive/focus'

import 'ant-design-vue/dist/antd.less';

async function bootstrap() {
  const app = createApp(App);
  // 使用插件
  app.use(router)
  // 注册全局组件
  // app.component('HelloWord', HelloWord)
  // 注册全局组件
  // app.directive('focus', FocusDirective)
  // 全局 provide
  // app.provide('guide', 'vue3 guide')
  // 挂载应用实例
  app.mount('#app')
}

void bootstrap();