<script lang="ts" setup>
import { Layout } from 'ant-design-vue'
import HeaderTrigger from '@/layouts/default/trigger/index.vue'
const LayoutHead = Layout.Header;
</script>
<template>
  <LayoutHead class="p-0 bg-white! h-2">
    <div class="flex h-2">
      <HeaderTrigger class="px-0.5 transition hover:bg-gray-200 cursor-pointer flex items-center" />
    </div>
  </LayoutHead>
</template>
