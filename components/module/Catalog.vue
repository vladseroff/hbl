<template lang="pug">
.catalog(
    :class="{yellow: minimal}"
)
    .catalog__title(
        v-if="!minimal"
    ) HELL BROKE LOOSE 
        br 
        span(
            v-parallax="{speed: 8}"
        ) WAY TO HOT
    DecorTapes(
        v-if="!minimal"
    )
    DecorTape(
        v-if="minimal"
    )
    .catalog__items
        .catalog__item
            .catalog__item-img
                img(
                    src="/images/img12.png"
                )
            UiButton(
                href="#"
            ) СМОТРЕТЬ
            .catalog__item-text
                .catalog__item-text-wrapper
                    .catalog__item-title HBL CLASSIC T-SHIRT
                    .catalog__item-price 5000₽
        .catalog__item
            .catalog__hot(
                v-parallax="{speed: 10}"
            )
                img(
                    src="@/assets/icons/hot.svg"
                )
            .catalog__item-img
                img(
                    src="/images/img13.png"
                )
            UiButton(
                href="#"
            ) СМОТРЕТЬ
            .catalog__item-text
                .catalog__item-text-wrapper
                    .catalog__item-title HBL CLASSIC T-SHIRT
                    .catalog__item-price 5000₽
        .catalog__item
            .catalog__item-img
                img(
                    src="/images/img14.png"
                )
            UiButton(
                href="#"
            ) СМОТРЕТЬ
            .catalog__item-text
                .catalog__item-text-wrapper
                    .catalog__item-title HBL CLASSIC T-SHIRT
                    .catalog__item-price 5000₽
</template>

<script setup>
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
    padding-bottom: 400px;
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
        z-index: 10;
        font-family: 'Druk Cyr';
        color: var(--color-yellow);
        z-index: 3;
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
        display: flex;
        justify-content: center;
        position: relative;
        z-index: 11;
        margin-top: 30px;
    }
    &__item {
        min-width: 684px;
        flex: none;
        margin: 0 35px;
        cursor: pointer;
        position: relative;
        $root: &;
        &:nth-child(2) {
            #{$root} {
                &-text {
                    bottom: -140px;
                }
                &-title {
                    font-size: 120px;
                }
                &-price {
                    font-size: 100px;
                    margin-left: -14px;
                    margin-top: -35px;
                }
            }
        }
        // &:nth-child(1) {
        //     &:hover {
        //         #{$root} {
        //             &-text {
        //                 &-wrapper {
        //                     left: 50px;
        //                 }
        //             }
        //         }
        //     }
        // }
        &:hover {
            .button {
                opacity: 1;
                transform: translateX(-50%);
            }
            #{$root} {
                &-text {
                    &-wrapper {
                        transform: rotate(-9deg) translateY(40px) scale(1);
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
            background: var(--color-yellow);
            color: var(--color-black);
            position: absolute;
            left: 50%;
            bottom: 180px;
            opacity: 0;
            transform: translateX(-50%) translateY(-20px) scale(.8);
            transition: .3s ease;
        }
        &-img {
            overflow: hidden;
            img {
                display: block;
            }
        }
        &-text {
            display: flex;
            justify-content: center;
            text-align: left;
            position: absolute;
            bottom: -80px;
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
            font-size: 70px;
            transition: .3s ease;
        }
        &-price {
            font-family: 'Druk Cyr';
            font-style: italic;
            color: var(--color-red);
            transform: scale(.7) translateX(20px) translateY(-20px);
            opacity: 0;
            font-size: 50px;
            margin-top: -20px;
            margin-left: -8px;
            transition: .3s ease;
        }
    }
    &__hot {
        position: absolute;
        left: -110px;
        top: 0;
        img {
            display: block;
        }
    }
}
</style>