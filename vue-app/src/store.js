// store.js
import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      isToken: null, // Inisialisasi dengan status tidak login
    };
  },
  mutations: {
    setToken(state, value) {
      state.isToken = value;
    },
  },
});

export default store;
