function scrollToBack(button) {
  const currentSection = button.closest("section");
  const prevSection = currentSection.previousElementSibling;
  if (prevSection) {
    prevSection.scrollIntoView({ behavior: "smooth" });
  }
}

function scrollToNext(button) {
  const currentSection = button.closest("section");
  const nextSection = currentSection.nextElementSibling;
  if (nextSection) {
    nextSection.scrollIntoView({ behavior: "smooth" });
  }
}

const backButton = document.getElementById("backButton");
const nextButton = document.getElementById("nextButton");

//backButton.addEventListener("click", () => scrollToBack(backButton));
//nextButton.addEventListener("click", () => scrollToNext(nextButton));

