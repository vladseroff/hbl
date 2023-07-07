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
        background-position: 0 center;
    }
    100% {
        background-position: 416px center;
    }
}
.tape {
    position: absolute;
    height: 77px;
    width: 100%;
    animation: lineAnim 8s linear infinite;
    &.red {
        background: var(--color-yellow) url('/images/hbl-red.png') repeat-x left center;
    }
    &.yellow {
        background:  var(--color-red)url('/images/hbl-yellow.png') repeat-x left center;
    }
    img {
        display: block;
    }
}
</style>