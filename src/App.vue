<template>
  <component id="app" :is="layout">
    <router-view :layout.sync="layout"></router-view>
  </component>
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
export default {
  name: 'App',
  data() {
    return {
      layout: 'div',
    };
  },
};
</script>
