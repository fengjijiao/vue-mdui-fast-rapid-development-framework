<template>
    <ul class="mdui-menu" id="right-menu">
        <li class="mdui-menu-item">
            <a href="javascript:;" class="mdui-ripple">Refresh</a>
        </li>
        <li class="mdui-menu-item" disabled>
            <a href="javascript:;">Help & feedback</a>
        </li>
        <li class="mdui-menu-item">
            <a v-on:click="showSettingDialog" class="mdui-ripple">Settings</a>
        </li>
        <li class="mdui-divider"></li>
        <li class="mdui-menu-item">
            <a href="javascript:;" class="mdui-ripple">Sign out</a>
        </li>
    </ul>
</template>

<script>
export default {
    name: 'Menu',
    props: {
        //title: String
    },
    data() {
        return {
            //
        }
    },
    methods: {
        showSettingDialog: function() {
            var that=this;
            that.mdui.dialog({
                title: '设置',
                content:'<form>' 
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
                            const formData = that.global.formSerializeArrayToDict(that.$$('form').serializeArray())
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
        }
    },
    created(){
        this.isLightColor = this.store.has('isLightColor')?this.store.get('isLightColor'):true
        //this.getVisitorInformation()
    },
    watch: {
        // 如果路由有变化，会再次执行该方法
        //'$route': 'getVisitorInformation'
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>