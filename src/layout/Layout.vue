<template>
  <div>
    <main>
       <slot/>
    </main>
    <app-footer></app-footer>
  </div>
</template>

<script>
// @ is an alias to /src
import AppFooter from '@/layout/AppFooter.vue';

export default {
  name: 'Layout',
  components: {
    AppFooter
  }
};
</script>

<style scoped>

</style>
