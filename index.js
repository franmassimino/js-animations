const entrar = document.getElementById('entrar')
const entrarRight = document.getElementById('entrar-right')


gsap.from('.overlay-title', {
    y: -20,
    duration: 1,
    delay: .5,
    opacity: 0,
})

gsap.from('#entrar', {
    y: -5,
    duration: .75,
    delay: .4,
    opacity: 0
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