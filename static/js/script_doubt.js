const icons = document.querySelectorAll(".dbtoggle");

icons.forEach(icon => {
  icon.addEventListener("click", () => {
    const question = icon.closest(".doubt-question");
    const answer = question.nextElementSibling;

    answer.classList.toggle("show");

    icon.classList.toggle("dbrotate");
  });
});
