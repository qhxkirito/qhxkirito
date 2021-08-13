<script lang="ts" setup>
import { Form, Input, Button, Row, Col, Checkbox, Divider } from 'ant-design-vue'
// 引入icon
import {
  UserOutlined,
  LockOutlined,
  GithubFilled,
  WechatFilled,
  AlipayCircleFilled,
  GoogleCircleFilled,
  TwitterCircleFilled,
} from '@ant-design/icons-vue'
import type { ValidateErrorEntity } from 'ant-design-vue/es/form/interface'
import { reactive, ref, onRenderTriggered } from 'vue'
import type { UnwrapRef } from 'vue'
import LoginFormTitle from './LoginFormTitle.vue'

interface FormState {
  user: string
  password: string
}

const FormItem = Form.Item
const InputPassword = Input.Password
const rememberMe = ref(false)
const formState: UnwrapRef<FormState> = reactive({
  user: 'kirito',
  password: 'kirito123',
})

const formLoginLoading = ref(false)

const handleFinish = (values: FormState) => {
  formLoginLoading.value = true
  setTimeout(() => {
    formLoginLoading.value = false
  }, 3000)
  console.log(values, formState.user)
}
const handleFinishFailed = (errors: ValidateErrorEntity<FormState>) => {
  console.log(errors)
}

onRenderTriggered(event => {
  console.log('状态触发组件--------------->')
  console.log(event)
})
</script>

<template>
  <LoginFormTitle />
  <Form
    layout="horizontal"
    :model="formState"
    @finish="handleFinish"
    @finishFailed="handleFinishFailed"
  >
    <FormItem>
      <Input v-model:value="formState.user" size="large" placeholder="Username">
        <template #prefix>
          <UserOutlined :style="{'fontSize': '0.16rem','color': 'rgba(0, 0, 0, 0.25)'}" />
        </template>
      </Input>
    </FormItem>
    <FormItem>
      <InputPassword
        size="large"
        visibilityToggle
        v-model:value="formState.password"
        placeholder="Password"
      >
        <template #prefix>
          <LockOutlined :style="{'fontSize': '0.16rem','color': 'rgba(0, 0, 0, 0.25)'}" />
        </template>
      </InputPassword>
    </FormItem>
    <Row class="flex justify-between">
      <Col :span="6">
        <FormItem>
          <!-- No logic, you need to deal with it yourself -->
          <Checkbox v-model:checked="rememberMe" size="small"> 记住我 </Checkbox>
        </FormItem>
      </Col>
      <Col :span="6">
        <FormItem :style="{ 'text-align': 'right' }">
          <!-- No logic, you need to deal with it yourself -->
          <Button type="link" size="small">忘记密码? </Button>
        </FormItem>
      </Col>
    </Row>
    <FormItem>
      <Button
        type="primary"
        size="large"
        block
        html-type="submit"
        :loading="formLoginLoading"
        :disabled="formState.user === '' || formState.password === ''"
      >
        登录
      </Button>
    </FormItem>
    <Row class="flex justify-between mb-1">
      <Col :span="6">
        <Button block >手机登录</Button>
      </Col>
      <Col :span="8">
        <Button block>二维码登录</Button>
      </Col>
      <Col :span="4">
        <Button block>注册</Button>
      </Col>
    </Row>
    <Divider>其他登录方式</Divider>

    <div class="flex justify-evenly login-sign-in-way">
      <GithubFilled />
      <WechatFilled />
      <AlipayCircleFilled />
      <GoogleCircleFilled />
      <TwitterCircleFilled />
    </div>
  </Form>
</template>
<style lang="less" scoped>
.login-sign-in-way {
  :deep(.anticon) {
    font-size: 0.22rem;
    color: #888;
    cursor: pointer;

    &:hover {
      color: #0960bd;
    }
  }
}

:deep(span) {
  font-size: 0.12rem;
}
.ant-divider :deep(span) {
  font-size: 0.12rem;
  color: rgba(0, 0, 0, 0.45);
}
</style>
