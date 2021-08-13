<script lang="ts" setup>
import SvgIcon from '@/components/common/SvgIcon.vue'
import LoginForm from './LoginForm.vue'
import MobileForm from './MobileForm.vue'

</script>
<template>
  <div class="relative h-screen px-4 overflow-hidden kirito-login min-w-320">
    <div class="flex justify-between w-full px-4 py-8">
      <div class="z-20 pt-2 overflow-hidden">
        <SvgIcon name="login-box-bg" />
        <div class="mt-1 text-base font-bold text-white">kirito的后台管理系统</div>
      </div>
      <div class="w-3/6 pl-3 pr-1 loginForm">
        <LoginForm />
        <!-- <MobileForm /> -->
      </div>
    </div>
  </div>
</template>

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
}
</style>
