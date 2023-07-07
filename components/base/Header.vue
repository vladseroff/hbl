<template lang="pug">
header.header(
    :class="{small: small}"
)
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
const small = ref(false)
onMounted(() => {
    window.addEventListener('scroll', (event) => {
        if (window.scrollY >= 600) {
            small.value = true
            document.querySelector('.app').style.cssText = 'padding-top: 446px'
            document.body.style.cssText = `--scrollTop: ${window.scrollY}px`
        } else {
            small.value = false
            document.querySelector('.app').style.cssText = 'padding-top: 0'
        }
    })
})

</script>

<style lang="scss" scoped>
@keyframes anim {
    0% {
        transform: translateY(-100%)
    }
    100% {
        transform: none;
    }
}
.header {
    position: relative;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    height: 446px;
    background: var(--color-red);
    transition: .4s ease;
    $root: &;
    &.small {
        animation: anim 1s ease forwards;
        position: fixed;
        height: auto;
        #{$root} {
            &__top {
                padding: 20px 40px;
            }
            &__bottom {
                max-height: 0;
            }
            &__logo {
                width: 240px;
                transform: translate3d(-700px, -73px, 0);
                img {
                    width: 100%;
                }
            }
        }
    }
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
        max-height: 1000px;
        // transition: .4s ease;
        img {
            display: block;
        }
    }
    &__logo {
        width: 1588px;
        padding-bottom: 55px;
        margin: 0 auto;
        // transition: .6s ease;
        img {
            width: 100%;
        }
    }
}
</style>