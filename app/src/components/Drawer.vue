<template>
    <div class="mdui-drawer" id="left-drawer">
        <ul class="mdui-list">
            <li class="mdui-list-item mdui-ripple" v-on:click="goToContext('/home')">
                <i class="mdui-list-item-icon mdui-icon material-icons">home</i>
                <div class="mdui-list-item-content">Home</div>
            </li>
            <li class="mdui-list-item mdui-ripple" v-show="isSignIn" v-on:click="goToContext('/message')">
                <i class="mdui-list-item-icon mdui-icon material-icons">message</i>
                <div class="mdui-list-item-content">Message</div>
            </li>
            <li class="mdui-list-item mdui-ripple">
                <i class="mdui-list-item-icon mdui-icon material-icons">send</i>
                <div class="mdui-list-item-content">Sent</div>
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
    data() {
        return {
            //
        }
    },
    methods: {
        closeDrawer: function() {
            new this.mdui.Drawer('#left-drawer').close()
            this.$$.hideOverlay()
        },
        showAboutDialog: function() {
            var that = this
            if(!that.global.visitor.isDesktop) {
                that.closeDrawer()
            }
            that.mdui.dialog({
                title: 'About',
                content: 
                        '<div class="mdui-typo">'
                        +'<span>Copyright(C) 2018 by fengjijiao <a href="mailto:fengjijiao@fengjijiao.cn">fengjijiao#fengjijiao.cn</a></span><br/>'
                        +'<span>Standing on the shoulders of giants.</span>'
                        +'<h5>Open Source Licenses</h5>'
                        +'<span><a alt="github" href="https://github.com/fengjijiao/vue-mdui-fast-rapid-development-framework">Github</a></span>'
                        +'</div>',
                buttons: [
                    {
                        text: '确认',
                        onClick: function() {
                            //that.$$('*').reflow();
                        }
                    }
                ]
            })
        },
        goToContext: function(path) {
            var that = this
            if(that.$router.history.current.path !== path) {//判断是否与当前路径相同
                that.$router.push({ path: path })
            }
            if(!that.global.visitor.isDesktop) {
                that.closeDrawer()
            }
        }
    },
    computed: {
        isSignIn() {
            return this.xstore.state.isSignIn
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>