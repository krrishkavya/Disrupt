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
