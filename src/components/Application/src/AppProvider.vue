<script lang="ts">
import { defineComponent } from 'vue';

const props = {
  /**
   * class style prefix
   */
  prefixCls: { type: String, default: false },
};

export default defineComponent({
  name: 'AppProvider',
  props,
  setup(props) {
    return props;
  }
})
</script>