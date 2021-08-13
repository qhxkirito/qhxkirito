<script lang="ts" setup>
import { useMenuSetting } from '@/hooks/settings/useMenuSetting'
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons-vue'

const { toggleCollapsed } = useMenuSetting()
</script>
<template>
  <span @click="toggleCollapsed">
    <MenuUnfoldOutlined v-if="true" />
    <MenuFoldOutlined v-else />
  </span>
</template>

<style lang="less" scoped>
::v-deep(svg) {
  width: 0.16rem;
  height: 0.16rem;
  fill: black;
  cursor: pointer;
}
</style>
