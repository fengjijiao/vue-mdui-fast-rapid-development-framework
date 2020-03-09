<template>
    <div class="mdui-container">
        <!--context start-->
        <div class="mdui-row">
            <div class="msg mdui-col-sm-6 mdui-col-md-4" v-for="msg in messages" v-bind:key="msg.mid">
                <div class="mdui-card">
                    <div class="mdui-card-primary">
                        <div class="mdui-card-primary-title">{{ msg.title }}</div>
                        <div class="mdui-card-primary-subtitle">{{ msg.description }}</div>
                    </div>
                    <div class="mdui-card-content" v-show="msg.showDetail">{{ msg.content }}</div>
                    <div class="mdui-card-actions">
                        <button class="mdui-btn mdui-btn-icon mdui-float-right mdui-ripple" v-on:click="showDetailMsg(msg)"><i class="mdui-icon material-icons">{{ msg.showDetail?'expand_less':'expand_more' }}</i></button>
                    </div>
                </div>
            </div>
        </div>
        <!--context end-->
    </div>
</template>

<script>
export default {
    name: 'Message',
    data() {
        return {
            messages: []
        }
    },
    methods: {
        //显示|隐藏消息的详细信息
        showDetailMsg: function(msg) {
            if(msg.showDetail) {
                msg.showDetail = false
            }else {
                msg.showDetail = true
            }
            
        },
        init: function() {
            var that = this
            if(that.isSignIn || that.store.has('uuid')) {
                that.$.post('https://api.fengjijiao.cn/v1/user/getMessage', {uuid: that.store.get('uuid')}, function(res) {
                    if(res.status) {
                        for(var i=0;i<res.data.length;i++) {
                            var exist = false
                            //防止消息本体重复
                            for(var j=0;j<that.messages.length;j++) {
                                if(that.messages[j].mid == res.data[i].mid) {
                                    exist = true
                                    break
                                }
                            }
                            if(exist) continue
                            that.messages.push({"mid":res.data[i].mid,"title":res.data[i].title,"description":res.data[i].description,"content":res.data[i].content,"showDetail":false})
                        }
                    }else {
                        that.mdui.dialog({
                            title: '提示',
                            content: '无任何消息！',
                            buttons: [
                                {
                                    text: '确认',
                                    onClick: function() {
                                        that.$router.push({ path: '/home' })
                                    }
                                }
                            ]
                        })
                    }
                },'json')
            }else {
                for(var i=0;i<9;i++) {
                    that.messages.push({"mid":i,"title":"打卡成功","description":new Date(),"content":"okkkkkkkkkkkkkkkkkkkkk","showDetail":false})
                }
            }
        }
    },
    computed: {
        isSignIn() {
            return this.xstore.state.isSignIn
        }
    },
    watch: {
        'isSignIn': {
            handler(newValue, oldValue) {
                console.log("isSignIn: newValue", newValue, "oldValue", oldValue)
                this.init()
            },
            immediate: true
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.msg {
    margin-top: 20px;
}
</style>