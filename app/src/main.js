import Vue from 'vue'
import VueRouter from 'vue-router'
import Jquery from 'jquery'
import App from './App.vue'
import 'mdui/dist/css/mdui.css'
import mdui from 'mdui'
import routes from './routes.js'
//全局变量/函数
import global from './global.js'
//事件总线
import bus from './eventBus.js'
//本地储存
import store from 'store2'

Vue.config.productionTip = false

//挂载this,JQ属性
Object.defineProperty(Vue.prototype, '$', { value: Jquery })
//挂载this,mdui-mini-JQ属性
Object.defineProperty(Vue.prototype, '$$', { value: mdui.JQ })
//挂载this,mdui属性
Object.defineProperty(Vue.prototype, 'mdui', { value: mdui })
//挂载this,全局变量属性
Object.defineProperty(Vue.prototype, 'global', { value: global })
//挂载this,事件总线属性
Object.defineProperty(Vue.prototype, 'bus', { value: bus })
//挂载this,本地储存属性
Object.defineProperty(Vue.prototype, 'store', { value: store })

Vue.use(VueRouter)//important

const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
