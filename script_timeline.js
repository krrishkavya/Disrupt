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
document.querySelectorAll('.card1-timeline').forEach(card => {
  const extra = card.querySelector('.extra');

  card.addEventListener('click', () => {
    const isActive = card.classList.contains('active');

    // Close all cards
    document.querySelectorAll('.card1-timeline').forEach(c => {
      c.classList.remove('active');
      c.querySelector('.extra').style.maxHeight = null;
    });

    // If the clicked one was not active, open it
    if (!isActive) {
      card.classList.add('active');
      extra.style.maxHeight = extra.scrollHeight + "px";
    }
  });
});