<template lang="pug">
.app-text(
    v-html="text"
)
</template>

<script setup>
const props = defineProps({
    text: {
        type: String,
        default: ''
    }
})
</script>

<style lang="scss" scoped>
.app-text {
    font-size: 18px;
    font-weight: 700;
    font-style: italic;
    text-transform: uppercase;
    text-align: center;
}
</style>