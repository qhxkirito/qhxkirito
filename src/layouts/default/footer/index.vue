<script lang="ts" setup>
import { ref } from 'vue'
import { Layout } from 'ant-design-vue'

import { GithubFilled } from '@ant-design/icons-vue'

import { openWindow } from '@/utils'

const Footer = Layout.Footer

const footerRef = ref<ComponentRef>(null)
</script>
<template>
  <Footer class="layout-footer" ref="footerRef">
    <div class="text-center layout-footer__links">
      <GithubFilled
        @click="openWindow('http://localhost:3000/')"
        :class="`layout-footer__github`"
      />
    </div>
    <div class="text-center">Copyright &copy;2020 KIRITO</div>
  </Footer>
</template>

<style lang="less" scoped>
@prefix-cls: '-layout-footer';

@normal-color: rgba(0, 0, 0, 0.45);

@hover-color: rgba(0, 0, 0, 0.85);

.@{prefix-cls} {
  color: @normal-color;
  text-align: center;

  &__links {
    margin-bottom: 8px;

    a {
      color: @normal-color;

      &:hover {
        color: @hover-color;
      }
    }
  }

  &__github {
    margin: 0 30px;

    &:hover {
      color: @hover-color;
    }
  }
}
</style>
