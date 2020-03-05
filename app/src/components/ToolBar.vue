<template>
    <div class="mdui-appbar mdui-appbar-fixed">
        <div class="mdui-toolbar mdui-color-theme">
            <a mdui-drawer="{target: '#left-drawer'}" mdui-tooltip="{content: '菜单'}" class="mdui-btn mdui-btn-icon"><i class="mdui-icon material-icons">menu</i></a>
            <span class="mdui-typo-title">{{ title }}</span>
            <div class="mdui-toolbar-spacer"></div>
            <div class="mdui-textfield">
                <input class="mdui-textfield-input" type="text" placeholder="Search"/>
            </div>
            <a href="javascript:;" mdui-tooltip="{content: '搜索'}" class="mdui-btn mdui-btn-icon"><i class="mdui-icon material-icons">search</i></a>
            <a href="javascript:;" mdui-tooltip="{content: '刷新'}" class="mdui-btn mdui-btn-icon"><i class="mdui-icon material-icons">refresh</i></a>
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
    components: {
            Menu
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>