<template>
  <div id="app">
    <ToolBar title="fengjijiao"/>
    <Drawer/>
    <div id="context">
        <router-view></router-view>
    </div>
    <Footer :isLightColor="isLightColor"/>
  </div>
</template>

<script>
import ToolBar from './components/ToolBar.vue'
import Drawer from './components/Drawer.vue'
import Footer from './components/Footer.vue'

export default {
    name: 'App',
    components: {
        ToolBar,
        Drawer,
        Footer
    },
    data() {
        return {
            isLightColor: true
        }
    },
    methods: {
        checkSignInStatus: function() {
            var that = this
            if(!that.store.has('uuid')) return
            that.$.post('https://api.fengjijiao.cn/v1/user/checkSignIn', {uuid: that.store.get('uuid')}, function(res){
                if(!res.status) {
                    that.setSignStatus(false)
                    that.store.remove('uuid')
                    that.mdui.snackbar({
                        message: '登录状态已过期'
                    })
                }else {
                    that.setSignStatus(true)
                    that.mdui.snackbar({
                        message: '登录状态同步完成'
                    })
                }
            },'json')
        },
        setSignStatus: function(newStatus) {
            this.xstore.commit({type: 'setSignStatus', isSignIn: newStatus})
        }
    },
    created() {
        var that = this
        console.info(that.store())
        that.checkSignInStatus()
        that.isLightColor = that.store.has('isLightColor')?that.store.get('isLightColor'):true
        //开启黑暗模式
        if(!that.isLightColor) {
            that.global.toggleBodyClass("mdui-theme-layout-dark")
        }
        that.bus.$on('global_themeColor',(data)=>{
            that.isLightColor = data
        })
    },
    computed: {
        isSignIn() {
            return this.xstore.state.isSignIn
        }
    }
}
</script>

<style>
#app {
  font-weight: 300;
  #font-style: italic;
}
#context {
        margin:77px auto!important;
}
</style>
