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
          <div id="google-signin-button" class="field">
           
            <!-- <div class="g-signin2" data-onsuccess="onSignIn"></div> -->
          </div>
           <a href="#" v-on:click="signOut">Sign out</a>
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
<script>
export default {
  data: () => ({

  }),
  mounted() {
    let recaptchaScript = document.createElement('script')
    recaptchaScript.setAttribute('src', 'https://apis.google.com/js/platform.js')
    recaptchaScript.setAttribute('async', true);
    recaptchaScript.setAttribute('defer', true);
    document.head.appendChild(recaptchaScript);

    gapi.signin2.render('google-signin-button', {
      onsuccess: this.onSignIn
    })

    // const go = goCloud().new();

    // go().setValidator(go().factory.makeValidator( (pattern, url) => {
    //   return new URL(url).pathname.match(`^${pattern}$`)
    // }));
    // go().router("/users", (res, extras)=>{
    //   console.log(res);
    // });
  },
  methods: {
    onSignIn(googleUser) {
      var profile = googleUser.getBasicProfile();
      var authResponse = googleUser.getAuthResponse();
      var token = authResponse.id_token;
      var id = profile.getId();
      console.log('ID: ' + id); // Do not send to your backend! Use an ID token instead.
      console.log('Name: ' + profile.getName());
      console.log('Image URL: ' + profile.getImageUrl());
      console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
      console.log('Token: ' + token); // This is null if the 'email' scope is not present.
      console.log('response' + authResponse);

      var xhr = new XMLHttpRequest();
      xhr.open('POST', 'http://127.0.0.1:3000/login');
      xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
      xhr.onload = function() {
        console.log('Signed in as: ' + xhr.responseText);
      };
      xhr.send(`token=${token}&uuid=${id}`);

    },
    signOut() {
      var auth2 = gapi.auth2.getAuthInstance();
      auth2.signOut().then(function () {
        console.log('User signed out.');
      });
    }
  }
}
</script>