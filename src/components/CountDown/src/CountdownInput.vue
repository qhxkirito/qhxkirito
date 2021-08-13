<template>
  <Input v-bind="$attrs" class="countdown-input" size="large" :value="state">
    <template #addonAfter>
      <CountButton :size="size" :count="count" :value="state" :beforeStartFunc="sendCodeApi" />
    </template>
  </Input>
</template>
<script lang="ts">
  import { Input } from 'ant-design-vue';
  import { defineComponent, PropType } from 'vue';
  import CountButton from './CountButton.vue';
  import { useRuleFormItem } from '@/hooks/component/useFormItem';

  const props = {
    value: { type: String },
    size: { type: String, validator: (v) => ['default', 'large', 'small'].includes(v) },
    count: { type: Number, default: 60 },
    sendCodeApi: {
      type: Function as PropType<() => Promise<boolean>>,
      default: null,
    },
  };
  export default defineComponent({
    name: 'CountDownInput',
    components: { CountButton, Input },
    inheritAttrs: false,
    props,
    setup(props) {
      const [state] = useRuleFormItem(props);

      return { state };
    },
  });
</script>
<style lang="less">
  .countdown-input {
    .ant-input-group-addon {
      padding-right: 0;
      background-color: transparent;
      border: none;

      button {
        font-size: 0.14rem;
      }
    }
  }
</style>
