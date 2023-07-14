<template lang="pug">
.app
    BaseHeader
    .app__container
        ModuleHomeBanner
        ModuleFirstDrop
        ModuleVideo
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
    BaseFooter
</template>

<script setup>
onMounted(() => {
    let isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
    if (isSafari) {
        document.body.classList.add('isSafari')
    }
})
</script>

<style lang="scss" scoped>
.app {
    // overflow: hidden;
    position: relative;
    width: 100vw;
    // &__sticky {
    //     position: absolute;
    //     padding-top: 1500px;
    //     top: 0;
    //     left: 0;
    //     bottom: 0;
    //     right: 0;
    //     z-index: 100;
    //     &-box {
    //         position: sticky;
    //         width: 500px;
    //         height: 500px;
    //         background: red;
    //         top: 150px;
    //     }
    // }
}
</style>