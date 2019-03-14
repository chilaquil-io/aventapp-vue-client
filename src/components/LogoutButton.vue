<template>
  <a class="is-narrow" v-on:click.prevent="signOut">
    <slot>Logoutt</slot>
  </a>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'LogoutButton',
  methods: {
    ...mapActions(['logout']),
    signOut() {
      this.logout();
      /*const auth2 = gapi.auth2.getAuthInstance();
      auth2.signOut().then(() => {
        console.log('User signed out.');
      });*/
    },
  },
};
</script>

<style scoped>

</style>
