// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import FastClick from 'fastclick';
import store from './store/';
import vueResource from 'vue-resource';
import Es6Promise from 'es6-promise';
import mockjs from "./server/mock";
Es6Promise.polyfill();
if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
    }, false);
};
(function () {
  var scalar = 750,
  scale = parseInt(window.screen.width) / scalar,
  userScalable = 'no';
  var val = scale.toFixed(2) * 1;
  document.getElementById('viewport').setAttribute('content', 'target-densitydpi=device-dpi,width=750,user-scalable=no,initial-scale=' +val +',minimum-scale=' +val +', maximum-scale=' +val+'');
  })();
Vue.config.productionTip = false
Vue.use(vueResource);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
