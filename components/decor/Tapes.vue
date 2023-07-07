<template lang="pug">
.tapes
    DecorTape(
        :color="color"
        v-parallax="{transform: 'rotate(18deg)', speed: 10}"
    )
    DecorTape(
        :color="color"
        v-parallax="{transform: 'rotate(-13deg)', speed: -15}"
    )
</template>

<script setup>
defineProps({
    color: {
        type: String,
        default: 'red',
    }
})
</script>

<style lang="scss" scoped>
.tapes {
    position: absolute;
    top: 0;
    right: -300px;
    bottom: 0;
    left: -300px;
    z-index: 10;
    pointer-events: none;
    .tape {
        &:nth-child(1) {
            transform: rotate(18deg);
            top: 100px;
            z-index: 2;
            opacity: .9;
        }
        &:nth-child(2) {
            transform: rotate(-13deg);
            top: -100px;
            z-index: 1;
        }
    }
}
</style>