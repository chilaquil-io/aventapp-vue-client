import Vue from 'vue';
import Router from './router';
import App from './App.vue';
import 'bulma/css/bulma.css';
import store from './store';

Vue.config.productionTip = false;

new Vue({
  router: Router,
  store,
  render: h => h(App),
}).$mount('#app');
