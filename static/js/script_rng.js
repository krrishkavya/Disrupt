document.addEventListener("DOMContentLoaded", () => {
    // --- START: NEW ACCORDION LOGIC ---
    // This part handles the expand/collapse functionality for the mobile view.

    const accordionCards = document.querySelectorAll('.rule-card');

    // Set the "Single Track per Idea" card to be open by default to match the screenshot.
    // This is robust because it checks the text content, not just the order in the HTML.
    accordionCards.forEach(card => {
        const heading = card.querySelector('.rule-card-heading');
        if (heading && heading.textContent.trim() === 'Single Track per Idea') {
            card.classList.add('open');
        }
    });

    accordionCards.forEach(card => {
        card.addEventListener('click', () => {
            // First, check if the clicked card was already open before the click.
            const wasOpen = card.classList.contains('open');

            // Close all other cards to ensure only one is open at a time.
            accordionCards.forEach(c => {
                if (c !== card) {
                    c.classList.remove('open');
                }
            });

            // Then, toggle the 'open' class on the card that was clicked.
            // If it was open, it will now be closed. If it was closed, it will now be open.
            if (!wasOpen) {
                card.classList.add('open');
            } else {
                card.classList.remove('open');
            }
        });
    });

    // --- END: NEW ACCORDION LOGIC ---


    // --- Original Desktop Slider Logic ---
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

    // Add listeners only if the buttons exist (they are hidden on mobile)
    if (prevBtn && nextBtn) {
        prevBtn.addEventListener("click", () => {
            const offset = -getScrollAmount(main_area);
            scrollRowsBy(offset);
        });

        nextBtn.addEventListener("click", () => {
            const offset = getScrollAmount(main_area);
            scrollRowsBy(offset);
        });
    }


    // const circle = document.querySelector('.progress-ring-circle');
    // const radius = circle.r.baseVal.value;
    // const circumference = 2 * Math.PI * radius;

    // circle.style.strokeDasharray = `${circumference}`;
    // circle.style.strokeDashoffset = `${circumference}`;

    function setProgress(percent) {
        const offset = circumference - (percent / 100) * circumference;
        circle.style.strokeDashoffset = offset;
    }

    const isMobile = window.innerWidth <= 956;
    const isTablet = window.innerWidth <= 1330 && window.innerWidth > 956;
    const isPC = window.innerWidth > 1330;

    let scrollCount = 0;
    let maxScrolls = 0;
    let currentProgress = 0;
    let targetProgress = 100;
    let duration = 10000; // 10 seconds
    let startTime = null;
    if (isMobile) {
        maxScrolls += 5;
        duration -= 7000;
    } else if (isTablet) {
        maxScrolls += 2;
        duration -= 5000;
    } else {
        maxScrolls += 1;
    }

    function animateSmoothProgressRing(timestamp) {
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;

        const progress = Math.min((elapsed / duration) * targetProgress, 100);
        setProgress(progress);

        if (progress < targetProgress) {
            requestAnimationFrame(animateSmoothProgressRing);
        } else {
            if (scrollCount < maxScrolls) {
                nextBtn.click();
                scrollCount++;
                startTime = null;
                setProgress(0);
                requestAnimationFrame(animateSmoothProgressRing);
            } else {
                setProgress(0);
            }
        }
    }


    const rulesHeading = document.querySelector('.rules-heading-container');

    const observerOptions = {
        root: null,
        threshold: 0.6,
    };

    // const observer = new IntersectionObserver((entries, observer) => {
    //     entries.forEach(entry => {
    //         if (entry.isIntersecting) {
    //             // Trigger animation only once
    //             requestAnimationFrame(animateSmoothProgressRing);
    //             observer.unobserve(rulesHeading);
    //         }
    //     });
    // }, observerOptions);

    // observer.observe(rulesHeading);


});