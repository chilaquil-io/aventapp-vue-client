import Vue from 'vue';
import Router from './router'
import App from './App.vue';
import 'bulma/css/bulma.css';

Vue.use(Router);

Vue.config.productionTip = false;

new Vue({
  Router,
  render: h => h(App),
}).$mount('#app');
