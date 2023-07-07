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
.tape {
    position: absolute;
    height: 77px;
    width: 100%;
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