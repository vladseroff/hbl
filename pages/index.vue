<template lang="pug">
.app
    BaseHeader
    ModuleHomeBanner
    ModuleFirstDrop
    ModuleVersus(
        :key="1"
    )
    ModuleHot
    ModuleDelivery
    ModuleGallery
    ModuleCatalog
    ModuleVersus.white(
        :key="2"
    )
    ModuleBest
    ModuleCatalog(
        minimal
    )
    ModuleStock
    ModuleVideo
    BaseFooter
</template>

<script setup>
onMounted(() => {
    
})
</script>

<style lang="scss" scoped>
.app {
    overflow: hidden;
    width: 100vw;
}
</style>