<template lang="pug">
component.button(
    :is="href ? 'a' : 'div'"
    :href="href"
    :class="[color, `hover-${hoverColor}`]"
)
    slot
</template>

<script setup>
defineProps({
    href: {
        type: String,
        default: ''
    },
    color: {
        type: String,
        default: 'black'
    },
    hoverColor: {
        type: String,
        default: 'default'
    }
})
</script>

<style lang="scss" scoped>
.button {
    width: 357px;
    height: 109px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--color-yellow);
    font-weight: 700;
    font-style: italic;
    font-size: 36px;
    background: var(--color-black);
    cursor: pointer;
    text-decoration: none;
    // border: 2px dashed var(--color-black);
    transition: box-shadow .3s ease, color .3s ease;
    &:hover {
        box-shadow: 0px 0px 0px 10px var(--color-yellow);
    }
    &.yellow {
        background: var(--color-yellow);
        color: var(--color-black);
        &:hover {
            box-shadow: 0px 0px 0px 10px var(--color-black);
        }
    }
    &.hover-white {
        &:hover {
            box-shadow: 0px 0px 0px 10px #fff;
        }
    }
    &.hover-red {
        &:hover {
            box-shadow: 0px 0px 0px 10px var(--color-red);
            color: var(--color-red);
        }
    }
}
</style>