import Vue from 'vue';
import VueUp from 'vueup';
import VueClipboard from 'vue-clipboard2';

import App from './App';
import store from './store';

import './assets/css/font-awesome.css';

Vue.use(VueUp);
Vue.use(VueClipboard);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  render: h => h(App),
});
