<template>
  <div id="app">
    <router-view></router-view>
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
import AppFooter from './layout/AppFooter.vue';
import AppNavbar from './layout/AppNavbar.vue';

export default {
  components: {
    'app-footer': AppFooter,
    'app-navbar' : AppNavbar,
  },
};
</script>
