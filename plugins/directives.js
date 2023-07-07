export default defineNuxtPlugin(nuxtApp => {
    let hasParallaxDirective = false
    nuxtApp.vueApp.directive('parallax', {
        mounted: (el, binding) => {
            el.parallaxVar = () => {
                document.body.style.cssText = `--scrollTop: ${window.scrollY}px`
            }
            if (!hasParallaxDirective) {
                window.addEventListener('scroll', el.parallaxVar)
            }
            el.animate = () => {
                el.style.cssText = `transform: ${binding.value.transform ? binding.value.transform : ''} translateY(${el.getBoundingClientRect().top / binding.value.speed}px)`
            }
            window.addEventListener('scroll', el.animate)
            hasParallaxDirective = true
        },
        unmounted: (el) => {
            window.removeEventListener('scroll', el.animate)
            window.removeEventListener('scroll', el.parallaxVar)
        },
    })
    nuxtApp.vueApp.directive('animate', {
        mounted: (el, bind) => {
            let observer;
            const options = {
                rootMargin: "0px",
                threshold: 1.0
            }
        
            const callback = (entries, observer) => {
                console.log(entries);
                if(entries[0].isIntersecting) {
                    el.classList.add('animation-active')
                    setTimeout(() => {
                    }, bind.delay || 0)
                }
            }
        
            observer = new IntersectionObserver(callback, options);
            observer.observe(el);
        },
    })
})