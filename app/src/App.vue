<template>
  <div id="app">
    <ToolBar title="fengjijiao"/>
    <Drawer/>
    <router-view></router-view>
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
    created() {
        var that = this
        console.info(that.store())
        that.isLightColor = that.store.has('isLightColor')?that.store.get('isLightColor'):true
        //开启黑暗模式
        if(!that.isLightColor) {
            that.global.toggleBodyClass("mdui-theme-layout-dark")
        }
        that.bus.$on('global_themeColor',(data)=>{
            that.isLightColor = data
        })
    }
}
</script>

<style>
#app {
  font-weight: 100;
  font-style: italic;
}
</style>
