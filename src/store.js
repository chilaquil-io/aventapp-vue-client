import Vue from 'vue';
import Vuex from 'vuex';
import router from './router';
import userService from './services/UserService';

Vue.use(Vuex);

/*const user = JSON.parse(localStorage.getItem('user'));
const state = user
  ? { status: { loggedIn: true }, user }
  : { status: {}, user: null };*/

export default new Vuex.Store({
  state: {
    authenticated: false,
    user: null,
  },
  mutations: {
    authenticate(state, payload) {
      state.authenticated = payload;
      console.log(payload);
    },
    createUser(state, payload) {
      state.user = payload;
    },
  },
  actions: {
    async login({ dispatch, commit }, { username, password }) {
      try {
        const user = await userService.login(username, password);
        // set user
        localStorage.setItem('user', JSON.stringify(user));
        commit('authenticate', true);
        commit('createUser', user);
        router.push('/');
      } catch (e) {
        commit('authenticate', false);
        dispatch('alert', e.message, { root: true });
      }
    },
    logout({ dispatch, commit }) {
      userService.logout();
      router.push('/login');
      localStorage.setItem('user', null);
      commit('authenticate', false);
    },
  },
});
