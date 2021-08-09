<template>
  <div>
    <DoubleRightOutlined v-if="true" />
    <DoubleLeftOutlined v-else />
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { DoubleRightOutlined, DoubleLeftOutlined } from '@ant-design/icons-vue';

  export default defineComponent({
    name: 'SiderTrigger',
    components: { DoubleRightOutlined, DoubleLeftOutlined },
    setup() {

    },
  });
</script>
