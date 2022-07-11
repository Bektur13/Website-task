TweenMax.staggerFrom(".header__link",1,{
    opacity: 0,
    x: -200,
    ease:Expo.easeInOut
},0.09)
TweenMax.staggerFrom(".header__logo",0.8,{
    opacity: 0,
    x: -200,
    ease:Expo.easeInOut
})

const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 2000,
    reset: true
});

sr.reveal(`.hero__content,
            .service__content,
            .category__content,
            .contact__content,
            .contact__content,
            .footer__content,
            .technique__content,
            .amenities__content,
            .question__content`, {
    interval: 200
})