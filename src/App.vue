<template>
  <div id="app">
     <div class="container">
        <sign-in></sign-in>
    </div>
  </div>
</template>

<style>
#app {
  font-family: "Comfortaa", cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #e1eff6;
  height: 100vh;
}
</style>

<script>
import SingIn from './components/SignIn.vue';

export default {
  components: {
    'sign-in': SingIn,
  },
};
</script>
