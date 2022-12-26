const btnOpen = document.querySelector(".btn-open");
const xForm = document.querySelector(".x-form");
btnOpen.addEventListener("click", () => {
  if (xForm.classList.contains("hidden")) {
    xForm.classList.remove("hidden");
    btnOpen.textContent = "Close";
  } else {
    xForm.classList.add("hidden");
    btnOpen.textContent = "Create New X";
  }
});
