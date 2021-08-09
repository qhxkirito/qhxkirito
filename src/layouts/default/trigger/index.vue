<template>
  <SiderTrigger v-if="sider" />
  <HeaderTrigger v-else />
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import HeaderTrigger from './HeaderTrigger.vue';
  import SiderTrigger from './SiderTrigger.vue';

  export default defineComponent({
    name: 'LayoutTrigger',
    components: {
      SiderTrigger,
      HeaderTrigger: HeaderTrigger,
    },
    props: {
      sider:{
        type: [Boolean],
        default: () => 1,
      },
    },
  });
</script>
