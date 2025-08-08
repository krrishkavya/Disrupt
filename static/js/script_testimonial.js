//background-grid

// const container = document.getElementById("container");

// for (let i = 0; i < 10; i++) {
//     const div = document.createElement("div");
//     div.className = "hline";
//     div.style.top=`${13 * i - 8}%`;
//     container.appendChild(div);
// }

// const hlines = document.querySelectorAll('.hline');
// const rect1 = hlines[0].getBoundingClientRect();
// const rect2 = hlines[1].getBoundingClientRect();
// const gap = Math.abs(rect1.top - rect2.top);

// for (let i = 0; i < 29; i++) {
//     const div = document.createElement("div");
//     div.className = "vline";
//     div.style.left=`${gap*i - 10}px`;
//     container.appendChild(div);
// }

//slideshow

const slides = document.querySelectorAll(".slide");
let current = 0;

slides.forEach((slide, i) => {
    gsap.set(slide, { x: i === 0 ? 0 : "100%" });
});

function goToSlide(index, direction) {
    const total = slides.length;
    const prev = current;
    current = (index + total) % total;

    const dir = direction === "next" ? -100 : 100;

    gsap.to(slides[prev], {
        x: `${dir}%`,
        scale: 0.6,
        duration: 0.6,
        ease: "power2.inOut"
    });

    gsap.set(slides[current], { x: `${-dir}%`, scale: 0.6 });

    gsap.to(slides[current], {
        x: "0%",
        scale: 1,
        duration: 0.6,
        ease: "power2.inOut"
    });
}

// Update dots
function updateDots() {
    const dots = document.querySelectorAll(".dot");
    dots.forEach((dot, i) => {
        dot.classList.toggle("active", i === current);
    });
}

updateDots();

document.getElementById("next").onclick = () => { goToSlide(current + 1, "next"); updateDots(); };
document.getElementById("prev").onclick = () => { goToSlide(current - 1, "prev"); updateDots(); };

// autoplay

setInterval(() => {
    goToSlide(current + 1, "next");
    updateDots();
}, 5000);


//decor

const decorImages = document.querySelectorAll(".decor");
decorImages.forEach((img, index) => {

    let X, Y;
    X = (Math.random() < 0.5 ? 1 : -1) * (Math.random() * 8);
    Y = (Math.random() < 0.5 ? 1 : -1) * (Math.random() * 8);

    let animationProps = {}

    if (index === 2) {
        animationProps = {
            rotation: 360,
            duration: 12,
            ease: "linear",
            repeat: -1
        }

    }
    else {
        animationProps = {
            x: X,
            y: Y,
            duration: 2,
            ease: "power1.inOut",
            yoyo: true,
            repeat: -1
        };
    }

    gsap.to(img, animationProps);
});