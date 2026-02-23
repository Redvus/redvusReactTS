import gsap from 'gsap';

export const fadeInUp = (element: gsap.TweenTarget, duration = 0.8) => {
    return gsap.fromTo(element,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration, ease: 'power3.out' }
    );
};

export const staggerAnimation = (
    elements: gsap.TweenTarget,
    delay = 0.1,
    fromVars: gsap.TweenVars = { opacity: 0, y: 30 },
    toVars: gsap.TweenVars = { opacity: 1, y: 0 }
) => {
    return gsap.fromTo(elements, fromVars, {
        ...toVars,
        stagger: delay,
        duration: 0.6,
        ease: 'power2.out'
    });
};