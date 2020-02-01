import 'normalize.css'
import 'vue-virtual-scroller/dist/vue-virtual-scroller.css'
import Vue from 'vue'
import App from './App.vue'

import VueVirtualScroller from 'vue-virtual-scroller'
Vue.use(VueVirtualScroller)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
