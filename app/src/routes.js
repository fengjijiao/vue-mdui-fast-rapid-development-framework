const NotFound = { template: '<div><h1>页面没有找到！</h1><p>请尝试重新操作！</p></div>' }
import Context from './components/Context.vue'

export default [
    { path: '/', redirect: '/home' },
    { path: '/home', component: Context, name: "Home" },
    { path: '*', component: NotFound, name: "No found" }
]