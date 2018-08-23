
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import 'bootstrap/dist/css/bootstrap-grid.min.css';
import 'bootstrap-vue/dist/bootstrap-vue.min.css';
import 'jquery/dist/jquery.min';
// bootstrap is just for this example
import 'bootstrap/dist/css/bootstrap.css';
// import this component
import flatPickr from 'vue-flatpickr-component';
import 'flatpickr/dist/flatpickr.css';
// theme is optional
// try more themes at - https://chmln.github.io/flatpickr/themes/
import 'flatpickr/dist/themes/material_blue.css';
import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import App from './App.vue';
import router from './router/admin_route';
import ClientTable from 'vue-tables-2'
// import Moment from

import 'vue-event-calendar/dist/style.css'
import vueEventCalendar from 'vue-event-calendar'

Vue.component('App', require('./App.vue'));
Vue.use(vueEventCalendar,{locale:'en'})
Vue.use(BootstrapVue);
Vue.use(ClientTable);
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
  }

})
