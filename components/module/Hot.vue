<template lang="pug">
.hot
    .hot__logo(
        v-parallax="{speed: -8}"
    )
        img(
            src="@/assets/icons/logo3.svg"
        )
    .hot__title(
        v-parallax="{transform: 'rotate(-9deg)', speed: 10}"
    ) HELL BROKE LOOSE 
        br 
        span WAY TO HOT
    .hot__wrapper(
        v-parallax="{speed: -15}"
    )
        .hot__view
            .hot__item
                img(
                    src="/images/img6.png"
                )
            .hot__icon
                img(
                    src="@/assets/icons/hot.svg"
                )
        .hot__bottom
            .hot__text ЭТИ ФУТБОЛКИ ХИТ НЕДЕЛИ, НО ТЫ МОЖЕШЬ 
                br 
                |КУПИТЬ ДРУГУЮ, СДЕЛАЕМ ХИТЬМ НЕДЕЛИ ЕЕ, 
                br 
                |КАК СКАЖЕШЬ ТЫ БОСС
            UiButton(
                href="#"
            ) ВМАГАЗИН
</template>

<script>
</script>

<style lang="scss" scoped>
.hot {
    text-align: center;
    margin-bottom: 400px;
    margin-top: 300px;
    &__logo {
        margin-top: -100px;
    }
    &__title {
        font-weight: 700;
        font-style: italic;
        font-size: 300px;
        transform: rotate(-9deg);
        position: relative;
        top: -290px;
        z-index: 10;
        font-family: 'Druk Cyr';
        color: var(--color-yellow);
        z-index: 3;
        span {
            color: var(--color-red);
            margin-top: -200px;
            display: block;
            margin-left: -50px;
        }
    }
    &__view {
        max-width: 869px;
        width: 100%;
        margin: -380px auto 0;
        position: relative;
    }
    &__item {
        img {
            display: block;
        }
    }
    &__icon {
        position: absolute;
        left: 0;
        bottom: 40px;
        img {
            display: block;
        }
    }
    &__bottom {
        margin-top: 105px;
    }
    &__text {
        font-size: 18px;
        font-weight: 700;
        font-style: italic;
        margin-bottom: 45px;
        text-transform: uppercase;
    }
    .button {
        margin: 0 auto;
    }
}
</style>