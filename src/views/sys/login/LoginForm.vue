<template>
  <Form
    layout="horizontal"
    :model="formState"
    @finish="handleFinish"
    @finishFailed="handleFinishFailed"
  >
    <FormItem>
      <Input v-model:value="formState.user" size="large" placeholder="Username">
        <template #prefix>
          <UserOutlined style="color: rgba(0, 0, 0, 0.25)" />
        </template>
      </Input>
    </FormItem>
    <FormItem>
      <InputPassword
        v-model:value="formState.password"
        size="large"
        type="password"
        placeholder="Password"
      >
        <template #prefix>
          <LockOutlined style="color: rgba(0, 0, 0, 0.25)" />
        </template>
      </InputPassword>
    </FormItem>
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
  </Form>
</template>
<script lang="ts">
import { Form, Input, Button } from 'ant-design-vue'
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue'
import { ValidateErrorEntity } from 'ant-design-vue/es/form/interface'
import { defineComponent, reactive, UnwrapRef, ref } from 'vue'
interface FormState {
  user: string
  password: string
}
export default defineComponent({
  name: 'LoginForm',
  components: {
    UserOutlined,
    LockOutlined,
    Form,
    FormItem: Form.Item,
    Input,
    InputPassword: Input.Password,
    Button,
  },
  setup() {
    const formState: UnwrapRef<FormState> = reactive({
      user: '',
      password: '',
    })

    const formLoginLoading = ref(false);;

    const handleFinish = (values: FormState) => {
      formLoginLoading.value = true;
      setTimeout(() => {
        formLoginLoading.value =false
      }, 3000);
      console.log(values, formState.user)
    }
    const handleFinishFailed = (errors: ValidateErrorEntity<FormState>) => {
      console.log(errors)
    }
    return {
      formLoginLoading,
      formState,
      handleFinish,
      handleFinishFailed,
    }
  },
})
</script>
