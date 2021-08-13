<script lang="ts" setup>
import { computed } from 'vue'
interface Props {
  prefix?: string
  name: string
  color?: string
}

const props = withDefaults(defineProps<Props>(), {
  prefix: 'icon',
  color: '#333'
})
console.log(props, 'props')
const symbolId = computed(() => `#${props.prefix}-${props.name}`)
</script>

<template>
  <svg aria-hidden="true">
    <use :xlink:href="symbolId" :fill="color" />
  </svg>
</template>
