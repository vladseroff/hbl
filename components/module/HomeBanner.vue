<template lang="pug">
.banner
    .banner__tape
        img(
            src="@/assets/icons/tape.svg"
        )
    .banner__carousel
        .banner__tapes
            .banner__tape
                img(
                    src="@/assets/icons/tape.svg"
                )
            .banner__tape
                img(
                    src="@/assets/icons/tape.svg"
                )
        .banner__carousel-wrapper
            .banner__item
                img(
                    src="/images/img1.png"
                )
            .banner__item
                img(
                    src="/images/img2.png"
                )
            .banner__item
                img(
                    src="/images/img3.png"
                )
            .banner__item
                img(
                    src="/images/img1.png"
                )
</template>

<style lang="scss" scoped>
.banner {
    background: var(--color-yellow);
    overflow: hidden;
    $root: &;
    &__tape {
        left: -280px;
        position: relative;
        img {
            display: block;
        }
    }
    &__carousel {
        top: -20px;
        position: relative;
        &-wrapper {
            display: flex;
        }
    }
    &__item {
        position: relative;
        &:nth-child(1) {
            left: -100px;
            z-index: 2;
        }
        &:nth-child(2) {
            left: -300px;
            z-index: 3;
        }
        &:nth-child(3) {
            left: -530px;
            z-index: 4;
            transform: translateY(-60px);
        }
        &:nth-child(4) {
            left: -705px;
            z-index: 1;
            transform: rotate(20deg) translateY(-20px);
        }
        img {
            display: block;
        }
    }
    &__tapes {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 10;
        #{$root} {
            &__tape {
                position: absolute;
                &:nth-child(1) {
                    transform: rotate(15deg);
                    left: -157px;
                    top: 830px;
                    z-index: 2;
                }
                &:nth-child(2) {
                    transform: rotate(-13deg);
                    left: -248px;
                    top: 646px;
                    z-index: 1;
                }
            }
        }
    }
}
</style>