<template>
  <Footer class="layout-footer" ref="footerRef">
    <div class="layout-footer__links text-center">
      <GithubFilled @click="openWindow('http://localhost:3000/')" :class="`layout-footer__github`" />
    </div>
    <div class="text-center">Copyright &copy;2020 KIRITO</div>
  </Footer>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { Layout } from 'ant-design-vue';

  import { GithubFilled } from '@ant-design/icons-vue';

  import { openWindow } from '@/utils';


  export default defineComponent({
    name: 'LayoutFooter',
    components: { Footer: Layout.Footer, GithubFilled },
    setup() {

      const footerRef = ref<ComponentRef>(null);

      return {
        openWindow,
        footerRef,
      };
    },
  });
</script>
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
