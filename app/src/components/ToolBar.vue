<template>
    <div class="mdui-appbar mdui-appbar-fixed">
        <div class="mdui-toolbar mdui-color-theme">
            <a v-on:click="toggleLeftDrawer('toggle')" mdui-tooltip="{content: '菜单'}" class="mdui-btn mdui-btn-icon"><i class="mdui-icon material-icons">{{ left_drawer_status }}</i></a>
            <span class="mdui-typo-title">{{ title }}</span>
            <div class="mdui-toolbar-spacer"></div>
            <div class="mdui-textfield" v-if="isClickedSearch">
                <input class="mdui-textfield-input" type="text" placeholder="Search"/>
            </div>
            <a v-if="!isClickedSearch" v-on:click="setClickedSearch" class="mdui-btn mdui-btn-icon"><i class="mdui-icon material-icons">search</i></a>
            <a href="javascript:;" v-on:click="checkVersionRefresh" mdui-tooltip="{content: '刷新'}" class="mdui-btn mdui-btn-icon"><i class="mdui-icon material-icons">refresh</i></a>
            <a mdui-menu="{target: '#right-menu'}" mdui-tooltip="{content: '更多'}" class="mdui-btn mdui-btn-icon"><i class="mdui-icon material-icons">more_vert</i></a>
            <Menu/>
        </div>
    </div>
</template>

<script>
import Menu from './Menu.vue'
export default {
    name: 'ToolBar',
    props: {
        title: String
    },
    data() {
        return {
            isClickedSearch: false,
            left_drawer_status: 'menu'
        }
    },
    components: {
            Menu
    },
    methods: {
        setClickedSearch: function() {
            this.isClickedSearch = true
        },
        toggleLeftDrawer: function(action) {
            var left_drawer = new this.mdui.Drawer("#left-drawer")
            //抽屉菜单状态切换
            if(action === "toggle") {
                left_drawer.toggle()
            }
            //桌面版开启图标变换
            if(this.global.visitor.isDesktop) {
                if(action === "init") {//首次初始化
                    this.left_drawer_status = "close"
                }else if(left_drawer.getState() === "opening") {//抽屉菜单打开状态的时候
                    this.left_drawer_status = "close"
                }else {//抽屉菜单关闭状态的时候
                    this.left_drawer_status = "menu"
                }
            }
            
        },
        checkVersionRefresh: function() {
            this.mdui.snackbar({
                message: '已是最新版本，当前显现版本：v0.001！'
            });
        }
    },
    created() {
        this.toggleLeftDrawer('init')
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>