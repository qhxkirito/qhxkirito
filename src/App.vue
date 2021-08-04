<template>
  <ConfigProvider :locale="locale">
    <RouterView />
  </ConfigProvider>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { ConfigProvider } from 'ant-design-vue';
  import zhCN from 'ant-design-vue/es/locale/zh_CN';
  // import { AppProvider } from '@/components/Application';
  // import { useTitle } from '/@/hooks/web/useTitle';
  // import { useLocale } from '/@/locales/useLocale';

  export default defineComponent({
    name: 'App',
    components: { ConfigProvider},
    setup() {
      // useTitle();

      // support Multi-language
      // const { getAntdLocale } = useLocale();

      return { locale: zhCN, };
    },
  });
</script>