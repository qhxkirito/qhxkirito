<template>
  <div>
    <LayoutHeader/>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';

  import LayoutHeader from './index.vue';
  export default defineComponent({
    name: 'LayoutMultipleHeader',
    components: { LayoutHeader },
    setup() {
    },
  });
</script>

