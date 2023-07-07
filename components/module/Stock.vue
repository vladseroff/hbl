<template lang="pug">
.stock
    DecorTapes(
        color="yellow"
    )
    .stock__text(
        v-parallax="{speed: 8}"
    ) Полный ассортимент уже в магазине 
        br 
        |пополняем каждый месяц
    UiButton(
        href="#"
        v-parallax="{speed: 20}"
    ) ВЫБРАТЬ
    
</template>

<style lang="scss" scoped>
.stock {
    position: relative;
    background: var(--color-yellow);
    padding-top: 320px;
    padding-bottom: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    &__text {
        font-weight: 700;
        font-style: italic;
        font-size: 100px;
        position: relative;
        top: -100px;
        z-index: 12;
        font-family: 'Druk Cyr';
        color: var(--color-black);
        margin-bottom: 50px;
        line-height: .9em;
        text-transform: uppercase;
    }
}
</style>