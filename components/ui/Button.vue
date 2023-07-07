<template lang="pug">
component.button(
    :is="href ? 'a' : 'div'"
    :href="href"
)
    slot
</template>

<script setup>
defineProps({
    href: {
        type: String,
        default: ''
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
}
</style>