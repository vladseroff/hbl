<template lang="pug">
.first-drop
    .first-drop__logo
        img(
            src="@/assets/icons/logo2.svg"
        )
    .first-drop__title 1ST DROP
    .first-drop__text ПЕРВАЯ КОЛЛЕКЦИЯ ВЕЩЕЙ УЖЕ НА САЙТЕ 
        br 
        |ШИП ПО ВСЕЙ ПЛАНЕТЕ, НЕ НАДО СОМНЕВАТЬСЯ, 
        br 
        |НАДО ПЕРЕХОДИТЬ ПО ССЫЛКЕ В ИСТОЧНИКЕ
    UiButton ВМАГАЗИН
</template>

<style lang="scss" scoped>
.first-drop {
    background: var(--color-yellow);
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 300px;
    &__logo {
        margin-top: -220px;
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