<template>
<div class="video" :class="{visible: visible}">
    <div class="video__preview" v-if="!playing" @click="play">
        <div class="video__preview-play">
            <img src="@/assets/icons/play.svg" alt="">
        </div>
        <div class="video__preview-img">
            <img src="/images/video.png" alt="">
        </div>
    </div>
    <div class="video__content">
        <iframe ref="video" width="447" height="449" src="" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <!-- <img src="@/assets/icons/star.svg" /> -->
        <svg width="447" height="449" viewBox="0 0 447 449" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <clipPath id="svg">
                <path d="M223.5 0L247.043 30.6091L277.226 6.52356L292.76 41.8773L327.83 25.7151L334.452 63.7589L372.371 56.4593L369.695 94.9822L408.26 96.9695L396.443 133.733L433.411 144.891L413.139 177.758L446.363 197.44L418.815 224.5L446.363 251.56L413.139 271.242L433.411 304.109L396.443 315.267L408.26 352.031L369.695 354.018L372.371 392.541L334.452 385.241L327.83 423.285L292.76 407.123L277.226 442.476L247.043 418.391L223.5 449L199.957 418.391L169.774 442.476L154.24 407.123L119.17 423.285L112.548 385.241L74.629 392.541L77.3046 354.018L38.7401 352.031L50.5572 315.267L13.5889 304.109L33.8605 271.242L0.636856 251.56L28.185 224.5L0.636856 197.44L33.8605 177.758L13.5889 144.891L50.5572 133.733L38.7401 96.9695L77.3046 94.9822L74.629 56.4593L112.548 63.7589L119.17 25.7151L154.24 41.8773L169.774 6.52356L199.957 30.6091L223.5 0Z" fill="#000"/>
            </clipPath>
        </svg>
    </div>
</div>
</template>

<script setup>
const video = ref(null)
const playing = ref(false)
const visible = ref(false)

const play = () => {
    playing.value = true
    video.value.src = 'https://www.youtube.com/embed/oY9qKzEvIaM?enablejsapi=1&autoplay=1'
}

onMounted(() => {
    window.addEventListener('scroll', () => {
        if (window.scrollY >= 1500) {
            visible.value = true
        }
    })
})
</script>

<style lang="scss" scoped>
@keyframes small {
    0% {
        transform: none;
    }
    100% {
        transform: scale(.7) translate3d(-30%, 30%, 0);
    }
}
// @keyframes big {
//     0% {
//         transform: scale(.5) translate3d(-60%, 60%, 0);
//     }
//     100% {
//         transform: scale(1) translate3d(0, 0, 0);
//     }
// }
.video {
    position: fixed;
    left: 55px;
    bottom: 55px;
    z-index: 500;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 447px;
    height: 449px;
    overflow: hidden;
    opacity: .9;
    pointer-events: none;
    transform: scale(0) translate3d(-800px, 900px, 0);
    transition: .5s ease-in-out;
    $root: &;
    &.visible {
        opacity: .9;
        pointer-events: all;
        transform: none;
        animation: small 1s ease 3s forwards;
    }
    &:hover {
        opacity: 1;
        #{$root} {
            &__preview-play {
                transform: translate3d(-50%, -50%, 0) scale(1.2)
            }
        }
    }
    iframe {
        position: absolute;
        left: 0;
        top: 0;
        -webkit-clip-path: url(#svg);
        clip-path: url(#svg);
    }
    &__preview {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        -webkit-clip-path: url(#svg);
        clip-path: url(#svg);
        z-index: 2;
        cursor: pointer;
        &-play {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate3d(-50%, -50%, 0) scale(.8);
            transition: .3s ease;
        }
    }
}
</style>