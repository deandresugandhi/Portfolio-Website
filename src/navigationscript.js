const hamburger = document.querySelector(".hamburger");
const mobilemenu = document.querySelector(".mobilemenu");

hamburger.addEventListener("click", menuClicked);

function menuClicked() {
    hamburger.classList.toggle("active");
    mobilemenu.classList.toggle("active");
}