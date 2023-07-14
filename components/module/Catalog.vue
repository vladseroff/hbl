<template lang="pug">
.catalog(
    :class="{yellow: minimal}"
)
    .catalog__title(
        v-if="!minimal"
        v-parallax="{transform: 'rotate(-9deg)', speed: 10}"
    ) HELL BROKE LOOSE 
        br 
        span WAY TO HOT
    DecorTapes(
        v-if="!minimal"
    )
    DecorTape(
        v-if="minimal"
    )
    .catalog__items
        client-only
            Swiper(
                :modules="[Autoplay]"
                :width="1920"
                slides-per-view="auto"
                :loopedSlides="2"
                centeredSlides
                :space-between="72"
                :autoplay="{delay: 1000, disableOnInteraction: false, pauseOnMouseEnter: true}"
                :speed="2000"
                loop
            )
                SwiperSlide
                    .catalog__item
                        .catalog__hot
                            img(
                                src="@/assets/icons/hot.svg"
                            )
                        .catalog__item-img
                            img(
                                src="/images/img13.png"
                            )
                        UiButton(
                            href="#"
                            color="yellow"
                        ) СМОТРЕТЬ
                        .catalog__item-text
                            .catalog__item-text-wrapper
                                .catalog__item-title HBL CLASSIC T-SHIRT
                                .catalog__item-price 5000₽
                SwiperSlide
                    .catalog__item
                        .catalog__item-img
                            img(
                                src="/images/img12.png"
                            )
                        UiButton(
                            href="#"
                            color="yellow"
                        ) СМОТРЕТЬ
                        .catalog__item-text
                            .catalog__item-text-wrapper
                                .catalog__item-title HBL CLASSIC T-SHIRT
                                .catalog__item-price 5000₽
                SwiperSlide
                    .catalog__item
                        .catalog__item-img
                            img(
                                src="/images/img14.png"
                            )
                        UiButton(
                            href="#"
                            color="yellow"
                        ) СМОТРЕТЬ
                        .catalog__item-text
                            .catalog__item-text-wrapper
                                .catalog__item-title HBL CLASSIC T-SHIRT
                                .catalog__item-price 5000₽
                SwiperSlide
                    .catalog__item
                        .catalog__item-img
                            img(
                                src="/images/img12.png"
                            )
                        UiButton(
                            href="#"
                            color="yellow"
                        ) СМОТРЕТЬ
                        .catalog__item-text
                            .catalog__item-text-wrapper
                                .catalog__item-title HBL CLASSIC T-SHIRT
                                .catalog__item-price 5000₽
                SwiperSlide
                    .catalog__item
                        .catalog__hot
                            img(
                                src="@/assets/icons/hot.svg"
                            )
                        .catalog__item-img
                            img(
                                src="/images/img13.png"
                            )
                        UiButton(
                            href="#"
                            color="yellow"
                        ) СМОТРЕТЬ
                        .catalog__item-text
                            .catalog__item-text-wrapper
                                .catalog__item-title HBL CLASSIC T-SHIRT
                                .catalog__item-price 5000₽
                SwiperSlide
                    .catalog__item
                        .catalog__item-img
                            img(
                                src="/images/img14.png"
                            )
                        UiButton(
                            href="#"
                            color="yellow"
                        ) СМОТРЕТЬ
                        .catalog__item-text
                            .catalog__item-text-wrapper
                                .catalog__item-title HBL CLASSIC T-SHIRT
                                .catalog__item-price 5000₽
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

defineProps({
    minimal: {
        type: Boolean,
        default: false,
    }
})

</script>

<style lang="scss">
.catalog {
    padding-top: 100px;
    padding-bottom: 500px;
    text-align: center;
    position: relative;
    &.yellow {
        background: var(--color-yellow);
        .tape {
            top: 0;
        }
    }
    &__title {
        font-weight: 700;
        font-style: italic;
        font-size: 300px;
        transform: rotate(-9deg);
        position: relative;
        font-family: 'Druk Cyr';
        color: var(--color-yellow);
        z-index: 3;
        top: -60px;
        span {
            color: var(--color-red);
            margin-top: -200px;
            display: block;
            margin-left: -50px;
            // transform: translateY(calc(var(--scrollTop) / -10)) !important;
        }
    }
    .tapes {
        top: 700px;
        .tape {
            &:nth-child(1) {
                // transform: rotate(18deg) translateY(calc(calc(var(--scrollTop) / 3) / -4)) !important;
            }
            &:nth-child(2) {
                // transform: rotate(-13deg) translateY(calc(calc(var(--scrollTop) / 2) / -6)) !important;
            }
        }
    }
    &__items {
        // display: flex;
        // justify-content: center;
        position: relative;
        z-index: 11;
        margin-top: 30px;
        .swiper {
            overflow: visible;
        }
        .swiper-slide {
            // width: 35%;
            width: 684px !important;
        }
    }
    &__item {
        // min-width: 684px;
        flex: none;
        // margin: 0 35px;
        cursor: pointer;
        position: relative;
        $root: &;
        &:hover {
            .button {
                opacity: 1;
                transform: translateX(-50%);
            }
            #{$root} {
                &-text {
                    &-wrapper {
                        transform: rotate(-9deg) translate3d(0, 40px, 0) scale(1);
                    }
                }
                &-title {
                }
                &-price {
                    opacity: 1;
                    transform: none;
                }
            }
        }
        .button {
            position: absolute;
            left: 50%;
            bottom: 180px;
            opacity: 0;
            transform: translateX(-50%) translate3d(0, -20px, 0) scale(.8);
            transition: .3s ease;
        }
        &-img {
            overflow: hidden;
            position: relative;
            &:before {
                content: '';
                display: block;
                position: absolute;
                left: 0;
                right: 0;
                bottom: 0;
                top: 0;
                background: linear-gradient(to bottom, transparent, rgba(#fff, .1));
            }
            img {
                display: block;
            }
        }
        &-text {
            display: flex;
            justify-content: center;
            text-align: left;
            position: absolute;
            bottom: -140px;
            z-index: 2;
            text-transform: uppercase;
            white-space: nowrap;
            width: 100%;
            left: 0;
            &-wrapper {
                position: relative;
                transition: .3s ease;
                transform: rotate(-9deg) scale(.5);
            }
        }
        &-title {
            font-family: 'Druk Cyr';
            font-style: italic;
            font-size: 120px;
            transition: .3s ease;
        }
        &-price {
            font-family: 'Druk Cyr';
            font-style: italic;
            color: var(--color-red);
            transform: scale(.7) translate3d(20px, -20px, 0);
            opacity: 0;
            font-size: 100px;
            margin-left: -14px;
            margin-top: -35px;
            transition: .3s ease;
        }
    }
    &__hot {
        position: absolute;
        left: -110px;
        top: 0;
        z-index: 3;
        img {
            display: block;
        }
    }
}
</style>