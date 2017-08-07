import Vue from 'vue';
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import axios from 'axios'
import {routes} from './routes'
import App from './App';
import {store} from './store'

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});