<template>
  <div class="kirito-login min-w-320 px-4 min-h-full overflow-hidden relative">
    <div class="w-full py-8 px-4 flex justify-between">
      <div class="overflow-hidden pt-2 z-20">
        <SvgIcon name="login-box-bg" />
        <div class="font-bold text-white text-base mt-1">kirito的后台管理系统</div>
      </div>
      <div class="loginForm w-3/6 pr-1 pl-3 pt-2">
        <h2 class="text-base font-bold">登录</h2>
        <LoginForm />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import SvgIcon from '@/components/common/SvgIcon.vue'
import LoginForm from './LoginForm.vue'
export default {
  name: 'Login',
  components: {
    SvgIcon,
    LoginForm,
  },
}
</script>
<style lang="less" scoped>
.kirito-login {
  &::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(src/assets/svg/login-bg-dark.svg);
    margin-left: -48%;
    background-position: 100%;
    background-repeat: no-repeat;
    background-size: auto 100%;
    content: '';
  }

  .loginForm {
    ::v-deep(.ant-btn > span) {
      font-size: 0.16rem;
    }
  }
}
</style>
