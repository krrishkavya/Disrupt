document.addEventListener("DOMContentLoaded", () => {
    const main_area = document.getElementById("rule-table");
    const prevBtn = document.getElementById("prev-btn");
    const nextBtn = document.getElementById("next-btn");

    function getScrollAmount(container) {
        const width = parseFloat(container.offsetWidth);
        return width;
    }

    function scrollRowsBy(offset) {
        main_area.scrollBy({ left: offset, behavior: "smooth" });
    }

    prevBtn.addEventListener("click", () => {
        const offset = -getScrollAmount(main_area);
        scrollRowsBy(offset);
    });

    nextBtn.addEventListener("click", () => {
        const offset = getScrollAmount(main_area);
        scrollRowsBy(offset);
    });
});

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
