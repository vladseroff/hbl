<template lang="pug">
.versus
    .versus__boxes
        .versus__box.grey(
            v-parallax="{speed: 10}"
        )
            .versus__box-figure
                img(
                    src="/images/img4.png"
                )
                UiButton(
                    href="#"
                ) СМОТРЕТЬ
            .versus__text
                .versus__title HBL CLASSIC t-jaket
                .versus__price 6000₽
        .versus__box.blue(
            v-parallax="{speed: -8}"
        )
            .versus__box-figure
                img(
                    src="/images/img5.png"
                )
                UiButton(
                    href="#"
                ) СМОТРЕТЬ
            .versus__text
                .versus__title HBL CLASSIC t-SHIRT
                .versus__price 5000₽
    .versus__icon(
        v-parallax="{transform: 'translateX(-50%)', speed: -30}"
    )
        img(
            src="@/assets/icons/vs.svg"
        )
</template>

<style lang="scss" scoped>
.versus {
    margin-bottom: 100px;
    position: relative;
    padding-bottom: 200px;
    $root: &;
    &__text {
        position: absolute;
        bottom: 0;
        left: 0;
        z-index: 2;
        text-transform: uppercase;
        transition: .3s ease;
        transform: scale(.5);
    }
    &__title {
        font-family: 'Druk Cyr';
        font-style: italic;
        font-size: 120px;
        transition: .3s ease;
    }
    &__price {
        font-family: 'Druk Cyr';
        font-style: italic;
        color: var(--color-red);
        transform: scale(.7) translateX(20px) translateY(-20px);
        opacity: 0;
        font-size: 100px;
        margin-top: -30px;
        margin-left: -14px;
        transition: .3s ease;
    }
    &__icon {
        pointer-events: none;
        position: absolute;
        left: 50%;
        top: 2%;
        transform: translateX(-50%);
        img {
            display: block;
        }
    }
    &__boxes {
        display: flex;
        margin-top: -100px;
    }
    &__box {
        flex: 1 1 50%;
        position: relative;
        cursor: pointer;
        $box: &;
        .button {
            background: var(--color-yellow);
            position: absolute;
            left: 60%;
            bottom: 0;
            transform: scale(.8) rotate(0deg) skew(20deg) translateX(-60%) translateY(-50%);
            color: var(--color-black);
            opacity: 0;
            transition: .3s ease;
        }
        &:hover {
            .button {
                opacity: 1;
                transform: rotate(8deg) skew(20deg) translateX(-50%) translateY(-50%);
            }
        }
        &-figure {
            overflow: hidden;
            height: 1000px;
        }
        &.grey {
            margin-left: -180px;
            #{$box} {
                &-figure {
                    background: #DBDCD6;
                    transform: rotate(-8deg) skew(-20deg);
                }
            }
            #{$root} {
                &__text {
                    transform: rotate(-13deg) scale(.5);
                    bottom: -175px;
                    left: 120px;
                }
            }
            img {
                transform: rotate(8deg) skew(20deg);
                margin-top: -60px;
                position: relative;
                left: 147px;
            }
            &:hover {
                #{$root} {
                    &__text {
                        transform: rotate(-8deg) scale(1);
                        bottom: -220px;
                        left: 250px;
                    }
                    &__title {
                        font-size: 120px;
                    }
                    &__price {
                        font-size: 100px;
                        opacity: 1;
                        transform: none;
                    }
                }
            }
        }
        &.blue {
            margin-right: -100px;
            margin-left: -100px;
            #{$box} {
                &-figure {
                    background: #2C405B;
                    transform: rotate(-8deg) skew(-20deg);
                }
            }
            #{$root} {
                &__text {
                    transform: rotate(-13deg) scale(.5);
                    bottom: -203px;
                    left: -80px;
                }
            }
            img {
                transform: rotate(8deg) skew(20deg);
                margin-top: -40px;
                right: 50px;
                position: relative;
            }
            &:hover {
                #{$root} {
                    &__text {
                        transform: rotate(-8deg) scale(1);
                        bottom: -250px;
                        left: 40px;
                    }
                    &__title {
                        font-size: 120px;
                    }
                    &__price {
                        font-size: 100px;
                        opacity: 1;
                        transform: none;
                    }
                }
            }
        }
    }
}
</style>