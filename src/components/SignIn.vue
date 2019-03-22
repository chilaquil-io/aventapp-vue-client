<template>
  <div class="container">
    <section class="hero is-success is-fullheight">
      <div class="hero-body">
        <div class="container has-text-centered">
          <div class="column is-4 is-offset-4">
            <h3 class="title has-text-grey">Login</h3>
            <p class="subtitle has-text-grey">Please login to proceed.</p>
            <div class="box columns">
              <div id="google-signin-button column" class="field"></div>
              <a class="button" href="#" v-on:click.prevent="fakeSignIn">Fake Sign In</a>
              <logout-button class="button">Fake Logout</logout-button>
            </div>
            <p class="has-text-grey"></p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import LogoutButton from './LogoutButton.vue';

export default {
  name: 'SignIn',
  data: () => ({

  }),
  components: {
    'logout-button': LogoutButton,
  },
  mounted() {
    const recaptchaScript = document.createElement('script');
    recaptchaScript.setAttribute('src', 'https://apis.google.com/js/platform.js');
    recaptchaScript.setAttribute('async', true);
    recaptchaScript.setAttribute('defer', true);
    document.head.appendChild(recaptchaScript);

    /*gapi.signin2.render('google-signin-button', {
      onsuccess: this.onSignIn,
    });*/
  },
  methods: {
    ...mapActions(['login', 'logout']),
    fakeSignIn() {
      this.$store.dispatch('toggleModal', true);
      this.login('email', 'password');
    },
    onSignIn(googleUser) {
      const profile = googleUser.getBasicProfile();
      const authResponse = googleUser.getAuthResponse();
      const token = authResponse.id_token;
      const id = profile.getId();
      console.log(`ID: ${id}`); // Do not send to your backend! Use an ID token instead.
      console.log(`Name: ${profile.getName()}`);
      console.log(`Image URL: ${profile.getImageUrl()}`);
      console.log(`Email: ${profile.getEmail()}`); // This is null if the 'email' scope is not present.
      console.log(`Token: ${token}`); // This is null if the 'email' scope is not present.
      console.log(`response${authResponse}`);

      const xhr = new XMLHttpRequest();
      xhr.open('POST', 'http://127.0.0.1:3000/login');
      xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
      xhr.onload = function () {
        console.log(`Signed in as: ${xhr.responseText}`);
      };
      xhr.send(`token=${token}&uuid=${id}`);
    },
  },
};
</script>

<style scoped>
  .hero.is-success {
    background: #F2F6FA;
  }
  .hero .nav, .hero.is-success .nav {
    -webkit-box-shadow: none;
    box-shadow: none;
  }
  .box {
    margin-top: 5rem;
  }
  .avatar {
    margin-top: -70px;
    padding-bottom: 20px;
  }
  .avatar img {
    padding: 5px;
    background: #fff;
    border-radius: 50%;
    -webkit-box-shadow: 0 2px 3px rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.1);
    box-shadow: 0 2px 3px rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.1);
  }
  input {
    font-weight: 300;
  }
  p {
    font-weight: 700;
  }
  p.subtitle {
    padding-top: 1rem;
  }
</style>
