<template>
  <div id="app">
    <div id="loginForm" class="card has-text-centered">
      <header class="card-header" style="text-align: center;">
        <p class="card-header-title">
          <strong>Inicia sesión en Aventapp</strong>
        </p>
      </header>
      <div class="card-content">
        <div class="content">
          <div class="field">
            <div class="g-signin2" data-onsuccess="onSignIn"></div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="container">
      
    </div>-->
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

#loginForm {
  max-width: 500px;
  border-radius: 7px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 50%;
  height: 30%;
  margin: auto;
}
</style>
