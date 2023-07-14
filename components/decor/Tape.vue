<template lang="pug">
.tape(
    :class="[color]"
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

<style lang="scss">
@keyframes lineAnim {
    0% {
        // background-position: 0 center;
        transform: translateX(0);
    }
    100% {
        // background-position: 416px center;
        transform: translateX(416px);
    }
    // 100% {
    //     transform: translateX(-416px);
    // }
}
.isSafari .tape {
    animation: none !important;
}
.tape {
    position: absolute;
    height: 77px;
    width: 100%;
    &:before {
        content: '';
        display: block;
        position: absolute;
        left: -416px;
        right: -416px;
        height: 77px;
        background: url('/images/hbl-red.png') repeat-x left center;
        animation: lineAnim 8s linear infinite;
    }
    &.red {
        background: var(--color-yellow);
    }
    &.yellow {
        background: var(--color-red);
        &:before {
            background: url('/images/hbl-yellow.png') repeat-x left center;
        }
    }
    img {
        display: block;
    }
}
</style>