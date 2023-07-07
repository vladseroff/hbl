<template lang="pug">
.gallery
    .gallery__title(
        v-parallax="{transform: 'rotate(-9deg)', speed: 10}"
    ) ХБЛ 
        span В ТЕЛЕГЕ
    .gallery__items
        .gallery__item(
            v-parallax="{transform: 'rotate(-4.2deg) translateX(70px)', speed: -15}"
        )
            img(
                src="/images/img8.png"
            )
        .gallery__item(
            v-parallax="{transform: 'rotate(3.9deg) translateX(0px)', speed: 10}"
        )
            img(
                src="/images/img9.png"
            )
        .gallery__item(
            v-parallax="{transform: 'rotate(-4.3deg)', speed: -8}"
        )
            img(
                src="/images/img10.png"
            )
        .gallery__item(
            v-parallax="{transform: 'rotate(3.9deg) translateX(-70px)', speed: 15}"
        )
            img(
                src="/images/img11.png"
            )
    .gallery__text РЕБЯТА УЖЕ ПРИСЛАЛИ СВОИ ФОТКИ И ЗАБРАЛИ 
        br 
        |СВОЙ РЕСЕПЕКТ И ПРОМОКОД НА НОВЫЕ ПОКУПКИ
    a.gallery__btn(
        href="#"
        v-parallax="{transform: 'rotate(-9deg)', speed: -15}"
    ) ГО ТОЖЕ
</template>

<style lang="scss" scoped>
.gallery {
    text-align: center;
    background: var(--color-yellow);
    display: flex;
    flex-direction: column;
    align-items: center;
    &__title {
        font-weight: 700;
        font-style: italic;
        font-size: 200px;
        transform: rotate(-9deg);
        position: relative;
        top: -110px;
        z-index: 10;
        font-family: 'Druk Cyr';
        color: var(--color-red);
        z-index: 3;
        span {
            color: var(--color-black);
            text-decoration: underline;
        }
    }
    &__text {
        font-size: 18px;
        font-weight: 700;
        font-style: italic;
        margin: 60px 0 20px;
        text-transform: uppercase;
    }
    &__items {
        display: flex;
        justify-content: center;
        margin-top: -50px;
    }
    &__item {
        position: relative;
        &:nth-child(1),
        &:nth-child(3) {
            z-index: 2;
        }
        &:nth-child(1) {
            transform: rotate(-4.2deg) translateY(-60px) translateX(70px);
        }
        &:nth-child(2) {
            transform: rotate(3.9deg) translateY(-80px);
        }
        &:nth-child(3) {
            transform: rotate(-4.3deg);
        }
        &:nth-child(4) {
            transform: rotate(3.9deg) translateY(-120px) translateX(-70px);
        }
    }
    &__btn {
        transform: rotate(-9deg);
        text-decoration: underline;
        color: var(--color-red);
        font-family: 'Druk Cyr';
        font-size: 100px;
        margin-top: 50px;
        font-style: italic;
        font-weight: 700;
        cursor: pointer;
        margin-bottom: -60px;
    }
}
</style>