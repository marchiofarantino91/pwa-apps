<template>
 <layout />
</template>

<script>
import Message from './components/vToast/index.vue'
import Layout from './layout/index.vue'
export default {
  name: 'App',
  components:{
    Message,
    Layout
  },
  data: () => ({
    //
  }),
  mounted() {
      this.$root.message = this.$refs.message
    },
};
</script>
