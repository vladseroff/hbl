<template lang="pug">
.delivery
    .delivery__img
        DecorTapes
        img(
            v-parallax="{speed: 15}"
            src="/images/img7.png"
        )
    .delivery__wrapper(
        v-parallax="{speed: 5}"
    )
        .delivery__title HBL пожалуй лучший бренд 
            br
            |на сегодня и на завтра
        .delivery__subtitle Об этом говорят наши ребята 
            br
            |об этом говорим мы
        .delivery__text вот лишь Несколько очевидных плюсов 
            br 
            |самая горячая доставка на планете 
            br 
            |плюс самая горячая доставка на планете 
            br 
            |плюс самая горячая доставка на планете 
            br 
            |плюс самая горячая доставка на планете 
            br 
            |плюс самая горячая доставка на планете 
            br 
            |плюс самая горячая доставка на планете 
            br 
            |плюс самая горячая доставка на планете
        .delivery__hot
            img(
                src="@/assets/icons/fire.svg"
            )
</template>

<style lang="scss">
.delivery {
    text-align: center;
    margin-bottom: 300px;
    .tapes {

    }
    &__img {
        display: flex;
        justify-content: center;
        position: relative;
        // margin-top: 250px;
        .tapes {
            top: 0px;
            .tape {
                &:nth-child(1) {
                    // transform: rotate(18deg) translateY(calc(calc(var(--scrollTop) / 3) / -4)) !important;
                }
                &:nth-child(2) {
                    // transform: rotate(-13deg) translateY(calc(calc(var(--scrollTop) / 2) / -6)) !important;
                }
            }
        }
        img {
            display: block;
        }
    }
    &__hot {
        width: 67px;
        margin: 0 auto;
        img {
            width: 100%;
            display: block;
        }
    }
    &__title {
        font-weight: 700;
        font-style: italic;
        font-size: 200px;
        margin-top: -160px;
        position: relative;
        z-index: 10;
        text-transform: uppercase;
        font-family: 'Druk Cyr';
        color: var(--color-yellow);
        z-index: 3;
        line-height: .9em;
    }
    &__subtitle {
        font-weight: 700;
        font-style: italic;
        font-size: 100px;
        margin-top: -40px;
        position: relative;
        z-index: 11;
        text-transform: uppercase;
        font-family: 'Druk Cyr';
        color: var(--color-black);
        z-index: 3;
        line-height: .9em;
    }
    &__text {
        font-size: 18px;
        font-weight: 700;
        font-style: italic;
        margin: 35px 0;
        text-transform: uppercase;
    }
}
</style>