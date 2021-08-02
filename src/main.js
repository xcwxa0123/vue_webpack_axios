// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'
import store from './store/vuexStorage'
import scrollReveal from 'scrollreveal';

Vue.config.productionTip = false
Vue.prototype.$axios = Axios
/* eslint-disable no-new */
Vue.prototype.$scrollReveal = scrollReveal;
Vue.prototype.$scroll = new scrollReveal({reset: true,init: false});
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
