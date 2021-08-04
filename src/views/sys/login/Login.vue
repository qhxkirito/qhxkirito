<template>
  <div class="kirito-login">
    <div class="container">
      <div class="introduce">
        <SvgIcon name="login-box-bg" />
        <div class="loginName">
          kirito的后台管理系统
        </div>
      </div>
      <div class="loginFrom">
        <h2 class="loginTitle">登录</h2>
        <LoginForm />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import SvgIcon from '@/components/common/SvgIcon.vue'
import LoginForm from "./LoginForm.vue";
export default {
  name: 'Login',
  components: { 
    SvgIcon,
    LoginForm,
   },
}
</script>
<style lang="less">
.kirito-login {
  min-width: 12rem;
  min-height: 100%;
  overflow: hidden;
  padding-left: 1rem;
  padding-right: 1rem;
  position: relative;

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
    content: "";
  }

  .container {
    position: absolute;
    width: calc(100% - 3rem);
    height: 100%;
    padding: 2.5rem 0.5rem;
    margin: auto;
    display: flex;
    justify-content: space-between;
    
    .loginName {
      font-weight: bold;
      color: #fff;
      font-size: 0.4rem;
      line-height: 0.45rem;
      margin-top: 0.3rem;  
    }

    .loginFrom {
      width: 50%;
      padding: 0 0.2rem 0 0.8rem;
      
      .loginTitle {
        font-size: 0.48rem;
        line-height: 0.5rem;
        font-weight: 700;
        padding-bottom: 0.1rem;
      }
    }
  }

}
</style>
