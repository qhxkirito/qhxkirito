<template>
  <LayoutHead class="p-0 bg-white!">
    <div class="layout-head-left">
      <LayoutTrigger
        :sider="false"
      />
    </div>
  </LayoutHead>
</template>

<script lang="ts">
import { Layout } from 'ant-design-vue'
import LayoutTrigger from '@/layouts/default/trigger/index.vue'
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'DefaultLayout',
  components: {
    LayoutHead: Layout.Header,
    LayoutTrigger,
  },
})
</script>
