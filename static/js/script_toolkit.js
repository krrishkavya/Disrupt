document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".cards");
    let current = 1;

    function updateCarousel() {
    cards.forEach(card => card.className = "cards"); // Reset all

    const total = cards.length;

    // Calculate the 3 visible cards using modulo arithmetic
    const left = (current - 1 + total) % total;
    const middle = current % total;
    const right = (current + 1) % total;

    cards[left].classList.add("left");
    cards[middle].classList.add("middle");
    cards[right].classList.add("right");
    }

    document.getElementById("toolkit-left-arrow").addEventListener("click", () => {
    current = (current - 1 + cards.length) % cards.length;
    updateCarousel();
    });

    document.getElementById("toolkit-right-arrow").addEventListener("click", () => {
    current = (current + 1) % cards.length;
    updateCarousel();
    });
    updateCarousel();
});
