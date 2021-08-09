<template>
  <div class="layout-content">
    <PageLayout />
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import PageLayout from '@/layouts/page/index.vue';

  export default defineComponent({
    name: 'LayoutContent',
    components: { PageLayout },
    setup() {
    },
  });
</script>

<style lang="less" scoped>
  .layout-content {
    position: relative;
    flex: 1 1 auto;
    min-height: 0;
    margin: 0.24rem 0.16rem;
    padding: 0.24rem; 
    background: #fff;
  }
</style>
