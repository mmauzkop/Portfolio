//  Make Mobile Navigation Work:
const btnNavEl = document.querySelector(".mobile-nav-icons");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

//////

//  Close Menu After Click:
const listEL = document.querySelector(".nav-list");
listEL.addEventListener("click", function (event) {
  if (event.target.tagName === "A") {
    headerEl.classList.remove("nav-open");
  }
});

//////

//Scrolling Locked
const menuEl = document.querySelector(".mobile-menu-icon");
const closeEl = document.querySelector(".mobile-close-icon");

menuEl.addEventListener("click", function () {
  document.documentElement.style.setProperty("overflow-y", "hidden");
});

closeEl.addEventListener("click", function () {
  document.documentElement.style.removeProperty("overflow-y");
});

//////

//  Text Effect
var textWrapper = document.querySelector(".introduce");
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='animation'>$&</span>"
);

anime.timeline({ loop: false }).add({
  targets: ".animation",
  rotateY: [-90, 0],
  duration: 1300,
  delay: (el, i) => 60 * i,
});

//////
