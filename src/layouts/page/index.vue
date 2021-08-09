<template>
  <RouterView>
    <template #default="{ Component, route }">
        <keep-alive>
          <component :is="Component" :key="route.fullPath" />
        </keep-alive>
        <!-- <component v-else :is="Component" :key="route.fullPath" /> -->
    </template>
  </RouterView>
  <!-- <FrameLayout v-if="getCanEmbedIFramePage" /> -->
</template>

<script lang="ts">
  import { computed, defineComponent, unref } from 'vue';

  // import FrameLayout from '/@/layouts/iframe/index.vue';

  export default defineComponent({
    name: 'PageLayout',
    setup() {
    },
  });
</script>
