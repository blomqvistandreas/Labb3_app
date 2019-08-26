import Vue from 'nativescript-vue'
import App from './components/App'
import store from './store'

import VueDevtools from 'nativescript-vue-devtools'

new Vue({
  store,
  render: h => h('frame', [h(App)])
}).$start()
