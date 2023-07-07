<template lang="pug">
footer.footer
    .footer__menu
        a(href="#") Магазин
        a(href="#") Контакты
        a(href="#") Политика конфиденциальности
    .footer__logo
        img(
            src="@/assets/icons/logo.svg"
        )
    .footer__copyright HBL 2023
</template>

<style lang="scss" scoped>
.footer {
    padding: 65px 0 55px;
    background: var(--color-red);
    &__menu {
        display: flex;
        justify-content: center;
        align-items: center;
        a {
            color: var(--color-black);
            font-weight: 700;
            font-size: 12px;
            text-transform: uppercase;
            cursor: pointer;
            text-decoration: none;
            margin: 0 15px;
            &:hover {
                text-decoration: underline;
            }
        }
    }
    &__logo {
        display: flex;
        justify-content: center;
        margin: 20px 0;
        img {
            display: block;
            width: 222px;
        }
    }
    &__copyright {
        text-align: center;
        font-size: 12px;
        font-weight: 700;
        font-style: italic;
    }
}
</style>