<template>
    <ul class="mdui-menu" id="right-menu">
        <li class="mdui-menu-item">
            <a href="javascript:;" class="mdui-ripple">Refresh</a>
        </li>
        <li class="mdui-menu-item" disabled>
            <a href="javascript:;">Help & feedback</a>
        </li>
        <li class="mdui-menu-item">
            <a v-on:click="showSettingsDialog" class="mdui-ripple">Settings</a>
        </li>
        <li class="mdui-divider"></li>
        <li class="mdui-menu-item" v-if="isSignIn">
            <a v-on:click="showSignOutDialog" class="mdui-ripple">Sign out</a>
        </li>
        <li class="mdui-menu-item" v-else>
            <a v-on:click="showSignInDialog" class="mdui-ripple">Sign in</a>
        </li>
    </ul>
</template>

<script>
export default {
    name: 'Menu',
    data() {
        return {
            //
        }
    },
    methods: {
        showSettingsDialog: function() {
            var that=this;
            that.mdui.dialog({
                title: '设置',
                content:'<form id="formSettings">' 
                    +'<p class="mdui-typo-subheading">主题色</p>'
                    +'<div class="mdui-row-xs-3">'
                    //
                    +'<div class="mdui-col">'
                    +'<label class="mdui-radio">'
                    +'<input type="radio" name="isLightColor" value="true" '+(that.isLightColor?'checked':'')+'/>'
                    +'<i class="mdui-radio-icon"></i>'
                    +'Light'
                    +'</label>'
                    +'</div>'
                    //
                    +'<div class="mdui-col">'
                    +'<label class="mdui-radio">'
                    +'<input type="radio" name="isLightColor" value="false" '+(that.isLightColor?'':'checked')+'/>'
                    +'<i class="mdui-radio-icon"></i>'
                    +'Dark'
                    +'</label>'
                    +'</div>'
                    //
                    +'</div>'
                    +'</from>',
                buttons: [
                    {
                        text: '取消'
                    },
                    {
                        text: '确认',
                        onClick: function(){
                            const formData = that.global.formSerializeArrayToDict(that.$$('form#formSettings').serializeArray())
                            that.bus.$emit('global_themeColor', formData.isLightColor)
                            that.store.set('isLightColor', formData.isLightColor)
                            if(formData.isLightColor != that.isLightColor) that.global.toggleBodyClass("mdui-theme-layout-dark")
                                that.isLightColor = formData.isLightColor
                                that.mdui.snackbar({
                                    message: '保存完成'
                                });
                        }
                    }
                ]
            })
        },
        showSignInDialog: function() {
            var that=this;
            that.mdui.dialog({
                title: '登录',
                content: '<form id="formSignIn">'
                        
                        +'<div class="mdui-textfield mdui-textfield-floating-label">'
                        +'<label class="mdui-textfield-label">用户名</label>'
                        +'<input class="mdui-textfield-input" type="text" name="username" required/>'
                        +'<div class="mdui-textfield-error">用户名不能为空</div>'
                        +'</div>'
                        
                        +'<div class="mdui-textfield mdui-textfield-floating-label">'
                        +'<label class="mdui-textfield-label">密码</label>'
                        +'<input class="mdui-textfield-input" type="text" pattern="^.*(?=.{6,})(?=.*[a-z])(?=.*[A-Z]).*$" name="password" required/>'
                        +'<div class="mdui-textfield-error">密码至少 6 位，且包含大小写字母</div>'
                        +'</div>'
                        
                        +'</form>',
                buttons: [
                    {
                        text: '取消'
                    },
                    {
                        text: '确认',
                        onClick: function(){
                            const formData = that.global.formSerializeArrayToDict(that.$$('form#formSignIn').serializeArray())
                            that.$.post('https://api.fengjijiao.cn/v1/user/signIn', {username: formData.username, password: formData.password}, function(res){
                                if(res.status) {
                                    that.mdui.snackbar({
                                        message: res.msg
                                    })
                                    that.setSignStatus(true)
                                    that.store.set('uuid', res.data.uuid)
                                }else {
                                    that.mdui.snackbar({
                                        message: res.msg
                                    })
                                }
                            },"json")
                        }
                    }
                ]
            })
        },
        showSignOutDialog: function() {
            this.store.remove('uuid')
            this.setSignStatus(false)
            this.mdui.alert('退出完成')
        },
        setSignStatus: function(newStatus) {
            this.xstore.commit({type: 'setSignStatus', isSignIn: newStatus})
        }
    },
    created() {
        this.isLightColor = this.store.has('isLightColor')?this.store.get('isLightColor'):true
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