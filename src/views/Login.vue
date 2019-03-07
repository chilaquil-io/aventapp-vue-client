<template>
  <section>
    <app-navbar></app-navbar>
    <sign-in></sign-in>
    <app-footer></app-footer>
  </section>
</template>

<script>
// @ is an alias to /src
import AppNavbar from '@/layout/AppNavbar.vue';
import AppFooter from '@/layout/AppFooter.vue';
import SignIn from '@/components/SignIn.vue';

export default {
  name: 'Login',
  components: {
    'app-navbar': AppNavbar,
    'app-footer': AppFooter,
    'sign-in': SignIn,
  }
};
</script>

<style scoped>

</style>
