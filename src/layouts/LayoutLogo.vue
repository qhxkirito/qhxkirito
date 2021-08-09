<template>
  <div class="flex justify-between items-center h-2 m-0.5">
    <SvgIcon :class="{'w-3/6':!$attrs.collapsed,}" class="transition-all h-3/5" name="layout-logo" />
    <div v-if="!$attrs.collapsed" class="w-3/6 text-white font-bold text-sm">kirito</div>
  </div>
</template>
<script lang="ts">
import SvgIcon from '@/components/common/SvgIcon.vue';

export default {
  name: 'LayouyLogo',
  components: {
    SvgIcon,
  },
}
</script>