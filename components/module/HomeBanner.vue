<template lang="pug">
.banner
    .banner__tape
        DecorTape
    .banner__carousel
        DecorTapes
        .banner__carousel-wrapper
            Swiper(
                :modules="[Autoplay]"
                slides-per-view="4"
                loop
                :pause-on-mouse-enter="true"
                :autoplay="autoplayOptions"
                :speed="3000"
                @swiper="onSwiper"
                @mouseenter="stop"
                @mouseleave="start"
            )
                SwiperSlide
                    .banner__item
                        img(
                            src="/images/img1.png"
                        )
                SwiperSlide
                    .banner__item
                        img(
                            src="/images/img2.png"
                        )
                SwiperSlide
                    .banner__item
                        img(
                            src="/images/img3.png"
                        )
                SwiperSlide
                    .banner__item
                        img(
                            src="/images/img1.png"
                        )
                SwiperSlide
                    .banner__item
                        img(
                            src="/images/img1.png"
                        )
                SwiperSlide
                    .banner__item
                        img(
                            src="/images/img2.png"
                        )
                SwiperSlide
                    .banner__item
                        img(
                            src="/images/img3.png"
                        )
                SwiperSlide
                    .banner__item
                        img(
                            src="/images/img1.png"
                        )
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, FreeMode } from 'swiper/modules'
import 'swiper/css'

const slider = ref(null)

const autoplayOptions = ref({
    delay: 1,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
})

const stop = (e) => {
    slider.value.autoplay.pause()
}

const start = (e) => {
    slider.value.autoplay.resume()
}

const onSwiper = (el) => {
    slider.value = el
}


</script>

<style lang="scss">
.banner {
    background: var(--color-yellow);
    $root: &;
    &__tape {
        position: relative;
    }
    &__carousel {
        top: 60px;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        .tape {
            position: absolute;
            &:nth-child(1) {
                top: 810px !important;
                // transform: rotate(18deg) translateY(calc(var(--scrollTop) / -5)) !important;
            }
            &:nth-child(2) {
                // transform: rotate(-13deg) translateY(calc(var(--scrollTop) / -10)) !important;
                top: 630px !important;
            }
        }
        &-wrapper {
            // display: flex;
            // width: 1920px;
            .swiper {
                width: 100vw;
            }
            .swiper-wrapper{
                transition-timing-function : linear;
            }
            .swiper-slide {
                width: 500px;
            }
        }
    }
    &__item {
        position: relative;
        // &:nth-child(1) {
        //     margin-right: -190px;
        //     z-index: 2;
        // }
        // &:nth-child(2) {
        //     margin-right: -220px;
        //     z-index: 3;
        // }
        // &:nth-child(3) {
        //     margin-right: -165px;
        //     z-index: 4;
        //     transform: translateY(-60px);
        // }
        // &:nth-child(4) {
        //     z-index: 1;
        //     transform: rotate(20deg) translateY(-20px);
        // }
        img {
            display: block;
        }
    }
}
</style>