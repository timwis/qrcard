import Vue from 'vue'
import AsyncComputed from 'vue-async-computed'

import App from './App.vue'
import './registerServiceWorker'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false
Vue.use(AsyncComputed)

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
