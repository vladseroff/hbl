<template lang="pug">
.first-drop
    .first-drop__logo(
        v-parallax="{speed: -8}"
    )
        img(
            src="@/assets/icons/logo2.svg"
        )
    .first-drop__title(
        v-parallax="{speed: 8}"
    ) 1ST DROP
    .first-drop__text(
        v-parallax="{speed: -30}"
    ) ПЕРВАЯ КОЛЛЕКЦИЯ ВЕЩЕЙ УЖЕ НА САЙТЕ 
        br 
        |ШИП ПО ВСЕЙ ПЛАНЕТЕ, НЕ НАДО СОМНЕВАТЬСЯ, 
        br 
        |НАДО ПЕРЕХОДИТЬ ПО ССЫЛКЕ В ИСТОЧНИКЕ
    UiButton(
        href="#"
    ) ВМАГАЗИН
</template>

<style lang="scss" scoped>
.first-drop {
    background: var(--color-yellow);
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 250px;
    &__logo {
        margin-top: -120px;
        position: relative;
        z-index: 9;
    }
    &__title {
        font-weight: 700;
        font-style: italic;
        font-size: 300px;
        transform: rotate(-9deg);
        position: relative;
        top: -270px;
        z-index: 10;
        font-family: 'Druk Cyr';
    }
    &__text {
        font-size: 18px;
        font-weight: 700;
        font-style: italic;
        position: relative;
        top: -200px;
    }
    .button {
        margin-top: -160px;
    }
}
</style>