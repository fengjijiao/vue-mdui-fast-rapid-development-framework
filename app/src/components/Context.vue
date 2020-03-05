<template>
    <div class="context mdui-container">
        <!--context start-->
        <h1 class="doc-title mdui-text-color-theme">Welcome !!!</h1>
        <!--img alt="Vue logo" src=".././assets/logo.png"-->
        <div class="mdui-panel mdui-panel-gapless" mdui-panel>
            <div class="mdui-panel-item">
                <div class="mdui-panel-item-header">First</div>
                <div class="mdui-panel-item-body">
                    <p>First content</p>
                    <p>First content</p>
                    <p>First content</p>
                    <p>First content</p>
                    <p>First content</p>
                    <p>First content</p>
                </div>
            </div>
            
            <div class="mdui-panel-item">
                <div class="mdui-panel-item-header">Second</div>
                <div class="mdui-panel-item-body">
                    <p>Second content</p>
                    <p>Second content</p>
                    <p>Second content</p>
                    <p>Second content</p>
                    <p>Second content</p>
                    <p>Second content</p>
                </div>
            </div>
            
            <div class="mdui-panel-item">
                <div class="mdui-panel-item-header">Third</div>
                <div class="mdui-panel-item-body">
                    <p>Third content</p>
                    <p>Third content</p>
                    <p>Third content</p>
                    <p>Third content</p>
                    <p>Third content</p>
                    <p>Third content</p>
                </div>
            </div>
            
        </div>
    <!--context end-->
    </div>
</template>

<script>
export default {
    name: 'Context',
    props: {
        //title: String
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.context {
        margin:77px auto!important;
}
</style>