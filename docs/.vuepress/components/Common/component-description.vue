<template>
    <div class="main">
        <p v-if="componentName" class="vue-vi-name">{{componentName}}</p>
        <p v-if="description" class="vue-vi-desc">{{description}}</p>
    </div>
</template>
<script>
export default {
    name: 'componentDescription',
    props:{
        componentName: {},
        description:{}
    }    
}
</script>
<style lang="scss" scoped>
    *{
        padding: 0;
        margin:0;
        box-sizing: border-box;
    }
    .main{
        font-family: Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,SimSun,sans-serif;
        font-size:16px;
        color: #5e6d82;
        margin-bottom: 2.2em; 
        .vue-vi-name{
            font-size: 1.8em;
            // font-size:28px;
            color: #1f2f3d;
            font-weight: 400;
        }
        .vue-vi-desc{
            font-size: 0.8em;
        }
    }
</style>
