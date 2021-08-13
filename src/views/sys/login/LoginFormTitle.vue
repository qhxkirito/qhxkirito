<script lang="ts" setup>
import { unref, reactive } from "vue";
import type { UnwrapRef } from "vue"
interface logintitle {
  LOGIN: string
  RESET_PASSWORD: string
  REGISTER: string
  MOBILE: string
  QR_CODE: string
}
const titleObj : UnwrapRef<logintitle> = reactive({
    RESET_PASSWORD: '重制密码',
    LOGIN: '登录',
    REGISTER: '忘记密码',
    MOBILE: '手机登录',
    QR_CODE: '验证码',
});

</script>
<template>
  <h2 class="text-base font-bold">{{titleObj.MOBILE}}</h2>
</template>