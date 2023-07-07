<template lang="pug">
.app
    BaseHeader
    ModuleHomeBanner
    ModuleFirstDrop
    ModuleVersus
    ModuleHot
    ModuleDelivery
    ModuleGallery
    ModuleCatalog
    ModuleVersus
    ModuleBest
    ModuleCatalog(
        minimal
    )
    ModuleStock
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