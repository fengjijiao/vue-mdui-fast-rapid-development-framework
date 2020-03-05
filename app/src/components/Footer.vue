<template>
    <div class="footer mdui-typo" v-bind:class="{ 'mdui-color-theme': isLightColor }">
        <span>{{ visitor_information }}</span><br/>
        <span><a href="http://www.miitbeian.gov.cn/">闽ICP备18022327号-1</a></span><br/>
        <span>Copyright © 2018 fengjijiao All rights reserved.</span>
    </div>
</template>

<script>
export default {
    name: 'Footer',
    props: {
        isLightColor: Boolean
    },
    data() {
        return {
            visitor_information: "Determing your ISP..."
        }
    },
    created() {
        var that = this
        that.$.get("https://api.ip.sb/geoip",function(data){
            console.log(data)
            if(data.isp != null) {
                that.visitor_information = "You are connected via " + data.isp + " to ShenZhen server in China."
            }else {
                that.visitor_information = "You are connected via " + data.country + " to ShenZhen server in China."
            }
        },"json")
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer {
    padding:30px 0;
    text-align: center;
}
</style>