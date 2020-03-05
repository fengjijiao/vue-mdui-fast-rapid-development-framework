<template>
    <div class="mdui-drawer" id="left-drawer">
        <ul class="mdui-list">
            <li class="mdui-list-item mdui-ripple">
                <i class="mdui-list-item-icon mdui-icon material-icons">move_to_inbox</i>
                <div class="mdui-list-item-content">Inbox</div>
            </li>
            <li class="mdui-list-item mdui-ripple">
                <i class="mdui-list-item-icon mdui-icon material-icons">star</i>
                <div class="mdui-list-item-content">Starred</div>
            </li>
            <li class="mdui-list-item mdui-ripple">
                <i class="mdui-list-item-icon mdui-icon material-icons">send</i>
                <div class="mdui-list-item-content">Sent mail</div>
            </li>
            <li class="mdui-list-item mdui-ripple">
                <i class="mdui-list-item-icon mdui-icon material-icons">drafts</i>
                <div class="mdui-list-item-content">Drafts</div>
            </li>
            <li class="mdui-subheader">Subheader</li>
            <li class="mdui-list-item mdui-ripple">
                <i class="mdui-list-item-icon mdui-icon material-icons">email</i>
                <div class="mdui-list-item-content">All mail</div>
            </li>
            <li class="mdui-list-item mdui-ripple">
                <i class="mdui-list-item-icon mdui-icon material-icons">delete</i>
                <div class="mdui-list-item-content">Trash</div>
            </li>
            <li class="mdui-list-item mdui-ripple" v-on:click="showAboutDialog">
                <i class="mdui-list-item-icon mdui-icon material-icons">info</i>
                <div class="mdui-list-item-content">About</div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Drawer',
    props: {
        //msg: String
    },
    methods: {
        showAboutDialog: function() {
            var that = this
            that.mdui.dialog({
                title: 'About',
                content: 
                        '<div class="mdui-typo">'
                        +'<span>Copyright(C) 2018 by fengjijiao <a href="mailto:fengjijiao@fengjijiao.cn">fengjijiao#fengjijiao.cn</a></span><br/>'
                        +'<span>Standing on the shoulders of giants.</span>'
                        +'<h3>Open Source Licenses</h3>'
                        +'<span><a alt="github" href="https://www.github.com/">Github</a></span>'
                        +'</div>',
                buttons: [
                    {
                        text: '确认'
                    }
                ]
            })
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>