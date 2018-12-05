<template>
    <div class="icon">
        <vi-icon vi-icon-name="fold" vi-icon-size="medium"></vi-icon>
        <vi-icon vi-icon-name="unfold" vi-icon-size="medium"></vi-icon>
        <vi-icon vi-icon-name="left" vi-icon-size="medium"></vi-icon>
        <vi-icon vi-icon-name="right" vi-icon-size="medium"></vi-icon>
        <vi-icon vi-icon-name="download" vi-icon-size="medium"></vi-icon>
        <vi-icon vi-icon-name="upload" vi-icon-size="medium"></vi-icon>
        <vi-icon vi-icon-name="loading" vi-icon-size="medium"></vi-icon>
        <vi-icon vi-icon-name="search" vi-icon-size="medium"></vi-icon>
        <vi-icon vi-icon-name="top" vi-icon-size="medium"></vi-icon>
        <vi-icon vi-icon-name="setting" vi-icon-size="medium"></vi-icon>
    </div>
</template>

<script>
import '../../public/svg.js'
import Icon from '../../../../src/components/icon'
export default {
    components:{
        'vi-icon': Icon
    }
}
</script>

<style lang="scss" scoped>

</style>
