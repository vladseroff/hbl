<template lang="pug">
.button
    slot
</template>

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
}
</style>