<template lang="pug">
.best
    .best__logo(
        v-parallax="{speed: -15}"
    )
        img(
            src="@/assets/icons/logo2.svg"
        )
    .best__title(
        v-parallax="{speed: 12}"
    ) BEST ITEM
    .best__img(
        v-parallax="{speed: 10}"
    )
        img(
            src="/images/img15.png"
        )
    .best__text(
        v-parallax="{speed: 10}"
    ) ЛУЧШИЙ ВЫБОР НА ЛЕТО, БУДЕТ ЖАРКО, 
        br 
        |А В ПАНАМЕ НЕ БУДЕТ ЖАРКО
    UiButton(
        href="#"
        v-parallax="{speed: 10}"
    ) ВЫБРАТЬ
</template>

<style lang="scss" scoped>
.best {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 210px;
    &__logo {
        position: relative;
        z-index: 2;
        img {
            width: 1435px;
        }
    }
    &__text {
        font-size: 18px;
        font-weight: 700;
        font-style: italic;
        margin-bottom: 45px;
        text-transform: uppercase;
        text-align: center;
        margin-top: 20px;
    }
    &__title {
        font-weight: 700;
        font-style: italic;
        font-size: 300px;
        transform: rotate(-9deg);
        position: relative;
        margin-top: -570px;
        z-index: 10;
        font-family: 'Druk Cyr';
        color: var(--color-black);
        z-index: 3;
        margin-bottom: 50px;
    }
}
</style>