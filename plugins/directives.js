export default defineNuxtPlugin(nuxtApp => {
    let hasParallaxDirective = false
    nuxtApp.vueApp.directive('parallax', {
        mounted: (el, binding) => {
            // let isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
            // if (!isSafari) {
                let intersect = false
                const options = {
                    rootMargin: "1000px",
                    threshold: 0.20
                }
            
                const callback = (entries, observer) => {
                    const isIntersecting = entries[0].isIntersecting
                    if  (isIntersecting) {
                        intersect = true
                    } else {
                        intersect = false
                    }
                }
                let observer = new IntersectionObserver(callback, options);
                observer.observe(el);
    
                el.parallaxVar = () => {
                    document.body.style.cssText = `--scrollTop: ${window.scrollY}px`
                }
                if (!hasParallaxDirective) {
                    window.addEventListener('scroll', el.parallaxVar)
                    setTimeout(() => {
                        el.parallaxVar()
                    }, 1)
                }
                el.animate = () => {
                    if (intersect) {
                        el.style.cssText = `transform: ${binding.value.transform ? binding.value.transform : ''} translateY(${el.getBoundingClientRect().top / binding.value.speed}px)`
                    }
                }
                window.addEventListener('scroll', el.animate)
                setTimeout(() => {
                    el.animate()
                }, 1)
                hasParallaxDirective = true
            // }
        },
        unmounted: (el) => {
            window.removeEventListener('scroll', el.animate)
            window.removeEventListener('scroll', el.parallaxVar)
        },
    })
    nuxtApp.vueApp.directive('intersect', {
        mounted: (el, bind) => {
            const options = {
                rootMargin: "0px",
                threshold: 0.20
            }
        
            const callback = (entries, observer) => {
                const isIntersecting = entries[0].isIntersecting
                if  (isIntersecting) {
                    el.classList.add(...bind.value.true)
                } else {
                    if (bind.value.false !== false) {
                        el.classList.remove(...bind.value.true)
                    }
                }
            }
            let observer = new IntersectionObserver(callback, options);
            observer.observe(el);
        },
    })
})