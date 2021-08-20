const entrar = document.getElementById('entrar')
const entrarRight = document.getElementById('entrar-right')


gsap.from('.overlay-title', {
    y: -20,
    duration: 1,
    delay: .5,
    opacity: 0,
})

gsap.from('#entrar', {
    y: -10,
    duration: .5,
    opacity: 0,
    delay: .5,
})

gsap.to('#entrar', {
    duration: .5,
    delay: .5,
    autoAlpha: 1
})

entrar.addEventListener('click', (e) => {
    e.preventDefault()
    gsap.to('.overlay', {
        duration: 1,
        y: '-100%',
        delay: .25,
    }
    )
    gsap.to('.overlay-title', {
        y: -50,
        duration: .25,
        opacity: 0,
    })

    gsap.to('#entrar', {
        y: -50,
        duration: .1,
        opacity: 0
    })

})

entrarRight.addEventListener('click', (e) => {
    e.preventDefault()
    gsap.to('.overlay-right', {
        duration: 1,
        x: 0,
        delay: .25,
    })

    gsap.to('.hero-content', {
        duration: 1,
        x: '-100%',
        delay: .25,
    })

})