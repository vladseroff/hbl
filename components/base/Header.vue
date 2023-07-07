<template lang="pug">
header.header
    .header__top
        .header__icon
            img(
                src="@/assets/icons/fire.svg"
            )
        .header__menu
            .header__menu-link.active Главное
            a(href="#").header__menu-link Магазин
        .header__icon
            img(
                src="@/assets/icons/telegram.svg"
            )
    .header__bottom
        .header__logo
            img(
                src="@/assets/icons/logo.svg"
            )
</template>

<script setup>

</script>

<style lang="scss" scoped>
.header {
    position: relative;
    z-index: 100;
    background: var(--color-red);
    &__top {
        display: flex;
        padding: 40px;
    }
    &__menu {
        flex: 1 1 auto;
        display: flex;
        justify-content: center;
        align-items: center;
        &-link {
            cursor: pointer;
            color: var(--color-black);
            font-size: 24px;
            font-weight: 700;
            font-style: italic;
            text-transform: uppercase;
            padding: 7px 14px;
            text-decoration: underline;
            margin: 0 5px;
            &.active {
                cursor: default;
                text-decoration: none;
                border: 4px dashed var(--color-yellow);
            }
        }
    }
    &__icon {
        flex: none;
        cursor: pointer;
    }
    &__bottom {
        display: flex;
        justify-content: center;
        padding-bottom: 55px;
        img {
            display: block;
        }
    }
}
</style>