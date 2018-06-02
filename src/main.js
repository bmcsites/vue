import Vue from 'vue';
import App from './App.vue';
/*import VueRouter from 'vue-router'*/
import VueResource from 'vue-resource';
import menuItem from '../mymenu/menu-item/menu-item.vue';

Vue.component('menu-item',menuItem);
Vue.use(VueResource);
new Vue({
  el: '#app',
  render: h => h(App)
});
