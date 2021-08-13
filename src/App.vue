<script lang="ts" setup>
import { ConfigProvider } from 'ant-design-vue'
import zhCN from 'ant-design-vue/es/locale/zh_CN'
// import { AppProvider } from '@/components/Application';
// import { useTitle } from '/@/hooks/web/useTitle';
// import { useLocale } from '/@/locales/useLocale';

// useTitle();

// support Multi-language
// const { getAntdLocale } = useLocale();

const locale = zhCN
</script>
<template>
  <ConfigProvider :locale="locale">
    <RouterView />
  </ConfigProvider>
</template>
