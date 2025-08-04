gsap.to("#red",{
    rotate:360,
    duration:8,
    repeat:-1,
    ease:'none'
})
gsap.from("#green",{
    rotate:360,
    duration:8,
    repeat:-1,
    ease:'none'
})
gsap.to(".purple",{
    rotate:360,
    duration:5,
    repeat:-1,
    ease:'none'
})


// document.querySelectorAll('.card1').forEach(card => {
//     card.addEventListener('click', () => {
//         document.querySelectorAll('.card1').forEach(c => {
//             if (c !== card) c.classList.remove('active');
//         });
//         card.classList.toggle('active');
//     });
// });