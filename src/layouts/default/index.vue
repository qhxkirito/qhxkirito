<template>
  <Layout>
    <LayoutSider v-model:collapsed="collapsed" :trigger="null" collapsible>
      <LayoutLogo v-model:collapsed="collapsed" />
      <!-- menu start -->
      <!-- <div :class="`${prefixCls}-menu`" v-if="getShowTopMenu && !getIsMobile">
        <LayoutMenu
          :isHorizontal="true"
          :theme="getHeaderTheme"
          :splitType="getSplitType"
          :menuMode="getMenuMode"
        />
      </div> -->
      <!-- menu-end -->
      <Menu theme="dark" mode="inline" v-model:selectedKeys="selectedKeys">
        <MenuItem key="1">
          <user-outlined />
          <span>nav 1</span>
        </MenuItem>
        <MenuItem key="2">
          <video-camera-outlined />
          <span>nav 2</span>
        </MenuItem>
        <MenuItem key="3">
          <upload-outlined />
          <span>nav 3</span>
        </MenuItem>
      </Menu>
    </LayoutSider>
    <Layout>
      <LayoutHead />
      <LayoutContent />
      <LayoutFooter />
    </Layout>
  </Layout>
</template>
<script lang="ts">
import { Layout, Menu, MenuItem } from 'ant-design-vue'
import LayoutFooter from '@/layouts/default/footer/index.vue'
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons-vue'
import LayoutContent from '@/layouts/default/content/index.vue';
import LayoutHead from '@/layouts/default/header/index.vue';
import { defineComponent, ref } from 'vue'
import LayoutLogo from '../LayoutLogo.vue'
export default defineComponent({
  name: 'LayoutHome',
  components: {
    Layout,
    LayoutHead,
    LayoutSider: Layout.Sider,
    LayoutContent,
    Menu,
    MenuItem: MenuItem,
    LayoutFooter,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    LayoutLogo,
  },
  setup() {
    return {
      selectedKeys: ref<string[]>(['1']),
      collapsed: ref<boolean>(false),
    }
  },
})
</script>
<style lang="less" scoped>
.ant-layout {
  height: 100vh;
}

.trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

.trigger:hover {
  color: #1890ff;
}

.logo {
  background: rgba(255, 255, 255, 0.3);
}

.site-layout .site-layout-background {
  background: #fff;
}
</style>
