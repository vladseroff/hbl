<template lang="pug">
.gallery
    .gallery__title ХБЛ 
        span В ТЕЛЕГЕ
    .gallery__items
        .gallery__item
            img(
                src="/images/img8.png"
            )
        .gallery__item
            img(
                src="/images/img9.png"
            )
        .gallery__item
            img(
                src="/images/img10.png"
            )
        .gallery__item
            img(
                src="/images/img11.png"
            )
    .gallery__text РЕБЯТА УЖЕ ПРИСЛАЛИ СВОИ ФОТКИ И ЗАБРАЛИ 
        br 
        |СВОЙ РЕСЕПЕКТ И ПРОМОКОД НА НОВЫЕ ПОКУПКИ
    a.gallery__btn(
        href="#"
    ) 
        span ГО ТОЖЕ
        em
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
        margin-top: -30px;
    }
    &__item {
        position: relative;
        &:nth-child(1),
        &:nth-child(3) {
            z-index: 2;
        }
        &:nth-child(1) {
            transform: rotate(-4.2deg) translate3d(70px, -60px, 0);
        }
        &:nth-child(2) {
            transform: rotate(3.9deg) translate3d(0, -80px, 0);
        }
        &:nth-child(3) {
            transform: rotate(-4.3deg);
        }
        &:nth-child(4) {
            transform: rotate(3.9deg) translate3d(-70px, -120px, 0);
        }
    }
    &__btn {
        transform: rotate(-9deg);
        text-decoration: none;
        color: var(--color-red);
        font-family: 'Druk Cyr';
        font-size: 100px;
        margin-top: 50px;
        font-style: italic;
        font-weight: 700;
        cursor: pointer;
        position: relative;
        z-index: 5;
        margin-bottom: -60px;
        transition: .3s ease;
        &:hover {
            color: #fff;
            em {
                height: 100%;
                transform: skew(-9deg) translate3d(3px, 0, 0);
            }
        }
        span {
            position: relative;
            z-index: 2;
        }
        em {
            position: absolute;
            left: 0;
            bottom: 0;
            height: 8px;
            width: 100%;
            transform: skew(-9deg) translate3d(-4px, 0, 0);
            background: var(--color-red);
            transition: .3s ease;
        }
    }
}
</style>