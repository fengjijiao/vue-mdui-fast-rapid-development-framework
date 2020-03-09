import Context from './components/Context/Home.vue'
import Message from './components/Context/Message.vue'
import NoFound from './components/Context/NoFound.vue'

export default [
    { path: '/', redirect: '/home' },
    { path: '/home', component: Context, name: "Home" },
    { path: '/message', component: Message, name: "Message" },
    { path: '*', component: NoFound, name: "NoFound" }
]