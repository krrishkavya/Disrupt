gsap.fromTo('.landing-union',{rotate:-20},{
    rotate:20,
    duration:0.6,
    repeat:-1,
    yoyo:true,
    ease:'power1.inOut',
})
gsap.fromTo('.landing-purple',{rotate:-120},{
    rotate:-180,
    delay:0.2,
    duration:0.6,
    repeat:-1,
    yoyo:true,
    ease:'power1.inOut',
})
gsap.from('.landing-green',{
    rotate:5,
    delay:0.4,
    duration:0.2,
    repeat:-1,
    yoyo:true,
    ease:'power1.inOut',
})
gsap.to('.landing-star img',{
    rotate:360,
    duration:8,
    repeat:-1,
    ease:'none',
})
gsap.to("#red",{
    rotate:360,
    duration:8,
    repeat:-1,
    ease:'none'
})


document.addEventListener("DOMContentLoaded", () => {

    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray(".count-up").forEach(counter => {
        const endValue = parseInt(counter.dataset.end, 10);
        
  
        let proxy = { value: 0 };

        gsap.to(proxy, {
            value: endValue, 
            duration: 2,
            ease: "power1.inOut",
            scrollTrigger: {
                trigger: ".landing-bar",
               
                start: "top 95%", 
                once: true               
            },

            onUpdate: () => {
                counter.textContent = Math.ceil(proxy.value);
            },

            onComplete: () => {
                counter.textContent = endValue;
            }
        });
    });
});
