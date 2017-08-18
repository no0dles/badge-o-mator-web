import Vue from 'vue';
import VueUp from 'vueup';

import App from './App';
import store from './store';

// import '../node_modules/milligram/dist/milligram.css';
import './assets/css/font-awesome.css';

Vue.use(VueUp);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  render: h => h(App),
});
