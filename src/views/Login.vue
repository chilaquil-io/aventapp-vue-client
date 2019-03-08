<template>
  <div>
    <sign-in></sign-in>
  </div>
</template>

<script>
// @ is an alias to /src
import SignIn from '@/components/SignIn.vue';
import Layout from '@/layout/Layout.vue';

export default {
  name: 'Login',
  created() {
    this.$emit('update:layout', Layout);
  },
  components: {
    'sign-in': SignIn
  }
};
</script>

<style scoped>

</style>
