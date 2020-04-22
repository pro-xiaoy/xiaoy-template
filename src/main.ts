import Vue from 'vue'
import App from '@/App.vue'
import router from './router'
import yCompentent from 'y-compentent'

Vue.config.productionTip = false

Vue.use(yCompentent)
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
