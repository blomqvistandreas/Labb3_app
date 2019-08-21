import Vue from 'nativescript-vue'
import App from './components/App'
import store from './store'

import VueDevtools from 'nativescript-vue-devtools'

import {TNSFontIcon, fonticon} from 'nativescript-fonticon';

TNSFontIcon.debug = true;
TNSFontIcon.paths = {
  // 'fa': './assets/css/all.min.css',
  // 'fal': './assets/css/all.min.css',
  // 'far': './assets/css/all.min.css',
  // 'fas': './assets/css/all.min.css',
  // 'fab': './assets/css/all.min.css',
  'fa': './assets/css/fontawesome.min.css',
  'far': './assets/css/regular.min.css',
  'fas': './assets/css/solid.min.css',
  'fab': './assets/css/brands.min.css'
};
TNSFontIcon.loadCss();

Vue.filter('fonticon', fonticon);

if(TNS_ENV !== 'production') {
  Vue.use(VueDevtools)
}
// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'production')

new Vue({
  store,
  render: h => h('frame', [h(App)])
}).$start()
