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

//Projects: Links Hovered

//#region Omnifood
omniLink.addEventListener("mouseover", () => {
  omnifood.classList.add("project--link-hovered");
});

omniLink.addEventListener("mouseleave", () => {
  omnifood.classList.remove("project--link-hovered");
});

//#endregion Omnifood

//#region Scores
scoresLink.addEventListener("mouseover", () => {
  scores.classList.add("project--link-hovered");
});

scoresLink.addEventListener("mouseleave", () => {
  scores.classList.remove("project--link-hovered");
});

//////
