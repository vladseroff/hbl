<template lang="pug">
.versus(
    v-intersect="{true: ['animate'], false: false}"
)
    .versus__boxes
        .versus__box.grey
            .versus__box-figure
                img(
                    src="/images/img4.png"
                )
                UiButton(
                    href="#"
                    color="yellow"
                ) СМОТРЕТЬ
            .versus__text
                .versus__title HBL CLASSIC t-jaket
                .versus__price 6000₽
        .versus__box.blue
            .versus__box-figure
                img(
                    src="/images/img5.png"
                )
                UiButton(
                    href="#"
                    color="yellow"
                ) СМОТРЕТЬ
            .versus__text
                .versus__title HBL CLASSIC t-SHIRT
                .versus__price 5000₽
    .versus__icon
        img(
            src="@/assets/icons/vs.svg"
        )
</template>

<style lang="scss" scoped>
.versus {
    margin-bottom: 100px;
    position: relative;
    padding-bottom: 200px;
    background: linear-gradient(to bottom, var(--color-yellow) 0%, #fff 60%);
    $root: &;
    &.white {
        background: #fff;
    }
    &.animate {
        #{$root} {
            &__box {
                transform: none;
                // &.grey {
                // }
            }
            &__icon {
                transition-delay: 1s;
                opacity: 1;
                transform: translateX(-50%);
            }
        }
    }
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
        transform: scale(.7) translate3d(20px, -20px);
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
        transform: translate3d(-50%, 0, 0) scale(2);
        opacity: 0;
        transition: .2s ease;
        img {
            display: block;
        }
    }
    &__boxes {
        display: flex;
        margin-top: -100px;
        // margin-bottom: -300px;
    }
    &__box {
        flex: 1 1 50%;
        position: relative;
        cursor: pointer;
        transition: .8s ease;
        $box: &;
        .button {
            position: absolute;
            left: 60%;
            bottom: 0;
            transform: scale(.8) rotate(8deg) skew(20deg) translate3d(-60%, -50%, 0);
            opacity: 0;
            transition: .3s ease;
        }
        &:hover {
            .button {
                opacity: 1;
                transform: rotate(8deg) skew(20deg) translate3d(-50%, -50%, 0);
            }
        }
        &-figure {
            overflow: hidden;
            height: 1000px;
        }
        &.grey {
            margin-left: -180px;
            transform: translate3d(-100%, 0, 0);
            #{$box} {
                &-figure {
                    background: #DBDCD6;
                    transform: rotate(-8deg) skew(-20deg);
                }
            }
            #{$root} {
                &__text {
                    transform: rotate(-8deg) scale(.5);
                    bottom: -210px;
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
                        bottom: -240px;
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
            transform: translateX(100%);
            #{$box} {
                &-figure {
                    background: #2C405B;
                    transform: rotate(-8deg) skew(-20deg);
                }
            }
            #{$root} {
                &__text {
                    transform: rotate(-8deg) scale(.5);
                    bottom: -238px;
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
                        bottom: -268px;
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