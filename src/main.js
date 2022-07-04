import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router"
import router from "./router/index"
import echarts from './plugins/echarts'
import './plugins/vant'
import './assets/css/base.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import store from './store'
import 'swiper/css/swiper.css'
Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false
Vue.use(echarts)
Vue.use(VueRouter)
new Vue({
  render: h => h(App),
  router,
  store

}).$mount('#app')
