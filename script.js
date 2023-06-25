// Make Mobile Navigation Work:
const navbtnsEl = document.querySelector(".mobile-icons");
const headerEl = document.querySelector(".header");

navbtnsEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

//////

// Hovering On Logo
const logoboxEL = document.querySelector(".logo-box");
const logoEl = document.querySelector(".logo");
const logotextEl = document.querySelector(".logo-text");

logoboxEL.addEventListener("mouseover", () => {
  logotextEl.classList.add("logo-hovered");
});

logoboxEL.addEventListener("mouseleave", () => {
  logotextEl.classList.remove("logo-hovered");
});

logotextEl.addEventListener("mouseover", () => {
  logoEl.classList.add("logo-hovered");
});

logotextEl.addEventListener("mouseleave", () => {
  logoEl.classList.remove("logo-hovered");
});

//////

// Close Menu After Click:
const navListEL = document.querySelector(".nav-list");
navListEL.addEventListener("click", function (event) {
  if (event.target.tagName === "A") {
    headerEl.classList.remove("nav-open");
  }
});

//////

// Scrolling Locked
const menuEl = document.querySelector(".mobile-menu");
const closeEl = document.querySelector(".mobile-close");

menuEl.addEventListener("click", function () {
  document.documentElement.style.setProperty("overflow-y", "hidden");
});

closeEl.addEventListener("click", function () {
  document.documentElement.style.removeProperty("overflow-y");
});

//////

// Project Link Jump
function jumpto(projcets) {
  window.location.href = "./index.html#projects";
}

//////

// Project Link Observe
const videoViewEL = document.querySelector(".video-view");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (ent.isIntersecting === false) {
      navprojects.classList.add("current-page");
      navprojects.classList.add("nav-animation");
    }

    if (ent.isIntersecting === true) {
      navprojects.classList.remove("current-page");
      navprojects.classList.remove("nav-animation");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(videoViewEL);

//////

// #region Scores
scoresLink.addEventListener("mouseover", () => {
  scores.classList.add("project-hovered");
});

scoresLink.addEventListener("mouseleave", () => {
  scores.classList.remove("project-hovered");
});

scoresTitle.addEventListener("mouseover", () => {
  scores.classList.add("project-hovered");
});

scoresTitle.addEventListener("mouseleave", () => {
  scores.classList.remove("project-hovered");
});
// #endregion Scores

//////

// #region MyPortfolio
portfolioTitle.addEventListener("mouseover", () => {
  portfolio.classList.add("project-hovered");
});

portfolioTitle.addEventListener("mouseleave", () => {
  portfolio.classList.remove("project-hovered");
});
//#endregion MyPortfolio

//////

// Return-Button Observe
const infoPortfolioEL = document.querySelector(".info-portfolio");

const observer = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (ent.isIntersecting === false) {
      btnreturn.classList.remove("btnreturn-show");
    }

    if (ent.isIntersecting === true) {
      btnreturn.classList.add("btnreturn-show");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-100px",
  }
);
observer.observe(infoPortfolioEL);

//////

// Overlay
const openTools = document.querySelector(".tools-animation");
const altOpenTools = document.querySelector(".alt-tools-animation");

openTools.addEventListener("click", () => {
  overlay.style.setProperty("display", "flex");
  window.scrollTo(0, 0);
});

altOpenTools.addEventListener("click", () => {
  overlay.style.setProperty("display", "flex");
});

toolsclose.addEventListener("click", () => {
  overlay.style.removeProperty("display", "flex");
});

overlay.addEventListener("click", () => {
  overlay.style.removeProperty("display");
});

//////

// Set Current Year
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

//////

// Themes
const root = document.querySelector(":root");

// #region Light Mode - Mobile
lightThemeMode.addEventListener("click", () => {
  lightThemeMode.style.setProperty("display", "none");
  lightThemeModeDesktop.style.setProperty("display", "none");
  lightmodeTooltip.style.setProperty("display", "none");
  darkThemeMode.style.setProperty("display", "flex");
  darkThemeModeDesktop.style.setProperty("display", "flex");
  darkmodeTooltip.style.setProperty("display", "inline-block");
  root.style.setProperty("--clr-primary", "#2841b4");
  root.style.setProperty("--clr-secondary", "#0a0a0acc");
  root.style.setProperty("--clr-accent", "#c8d2dc");
  root.style.setProperty("--clr-black", "#fafafa");
  root.style.setProperty("--clr-grey", "#323232");
  root.style.setProperty("--clr-white", "#0a0a0a");
  root.style.setProperty("--clr-focus", "#2841b466");
  root.style.setProperty("--clr-video-overlay", "#c8d2dccc");
  root.style.setProperty("--clr-video-overlay-desktop", "#c8d2dcd9");
  root.style.setProperty("--clr-video-boxshadow", "0 0 16px 4px #19232d14");
  root.style.setProperty("--clr-boxshadow1", "0 2px 16px 2px #19232d33");
  root.style.setProperty("--clr-boxshadow2", "0 0 16px 4px #19232dff");
  root.style.setProperty("--clr-boxshadow3", "0 0 8px 2px #2841b414");
  root.style.setProperty("--clr-boxshadow4", "4px 4px 8px 4px #14141414");
  root.style.setProperty("--clr-btns-transparency", "#c8d7e666");
  root.style.setProperty("--clr-projects-border", "2px solid #2841b466");
  root.style.setProperty("--clr-return", "#2842b466");
  root.style.setProperty("--clr-contacts", "#0a0a0acc");
  root.style.setProperty("--clr-figmasvg1", "#505050");
  root.style.setProperty("--clr-figmasvg2", "#464646");
  root.style.setProperty("--clr-figmasvg3", "#0a0a0acc");
  root.style.setProperty("--clr-figmasvg4", "#646464");
  root.style.setProperty("--clr-about-overlay", "#2841b466");
  scores.style.setProperty("opacity", "0.1");
  portfolio.style.setProperty("opacity", "0.1");
});
//#endregion Light Mode - Mobile

// #region Dark Mode - Mobile
darkThemeMode.addEventListener("click", () => {
  darkThemeMode.style.setProperty("display", "none");
  darkThemeModeDesktop.style.setProperty("display", "none");
  darkmodeTooltip.style.setProperty("display", "none");
  lightThemeMode.style.setProperty("display", "flex");
  lightThemeModeDesktop.style.setProperty("display", "flex");
  lightmodeTooltip.style.setProperty("display", "inline-block");
  root.style.removeProperty("--clr-primary", "#2841b4");
  root.style.removeProperty("--clr-secondary", "#0a0a0acc");
  root.style.removeProperty("--clr-accent", "#c8d2dc");
  root.style.removeProperty("--clr-black", "#fafafa");
  root.style.removeProperty("--clr-grey", "#323232");
  root.style.removeProperty("--clr-white", "#0a0a0a");
  root.style.removeProperty("--clr-focus", "#2841b466");
  root.style.removeProperty("--clr-video-overlay", "#c8d2dccc");
  root.style.removeProperty("--clr-video-overlay-desktop", "#c8d2dcd9");
  root.style.removeProperty("--clr-video-boxshadow", "0 0 16px 4px #19232d14");
  root.style.removeProperty("--clr-boxshadow1", "0 2px 16px 2px #19232d33");
  root.style.removeProperty("--clr-boxshadow2", "0 0 16px 4px #19232dff");
  root.style.removeProperty("--clr-boxshadow3", "0 0 8px 2px #2841b414");
  root.style.removeProperty("--clr-boxshadow4", "4px 4px 8px 4px #14141414");
  root.style.removeProperty("--clr-btns-transparency", "#c8d7e666");
  root.style.removeProperty("--clr-projects-border", "2px solid #2841b466");
  root.style.removeProperty("--clr-return", "#2842b466");
  root.style.removeProperty("--clr-contacts", "#0a0a0acc");
  root.style.removeProperty("--clr-figmasvg1", "#505050");
  root.style.removeProperty("--clr-figmasvg2", "#464646");
  root.style.removeProperty("--clr-figmasvg3", "#0a0a0acc");
  root.style.removeProperty("--clr-figmasvg4", "#646464");
  root.style.removeProperty("--clr-about-overlay", "#2841b466");
  scores.style.removeProperty("opacity", "0.1");
  portfolio.style.removeProperty("opacity", "0.1");
});
//#endregion Dark Mode - Mobile

// #region Light Mode - Desktop
lightThemeModeDesktop.addEventListener("click", () => {
  lightThemeModeDesktop.style.setProperty("display", "none");
  lightmodeTooltip.style.setProperty("display", "none");
  lightThemeMode.style.setProperty("display", "none");
  darkThemeModeDesktop.style.setProperty("display", "flex");
  darkmodeTooltip.style.setProperty("display", "inline-block");
  darkThemeMode.style.setProperty("display", "flex");
  root.style.setProperty("--clr-primary", "#2841b4");
  root.style.setProperty("--clr-secondary", "#0a0a0acc");
  root.style.setProperty("--clr-accent", "#c8d2dc");
  root.style.setProperty("--clr-black", "#fafafa");
  root.style.setProperty("--clr-grey", "#323232");
  root.style.setProperty("--clr-white", "#0a0a0a");
  root.style.setProperty("--clr-focus", "#2841b466");
  root.style.setProperty("--clr-video-overlay", "#c8d2dccc");
  root.style.setProperty("--clr-video-overlay-desktop", "#c8d2dcd9");
  root.style.setProperty("--clr-video-boxshadow", "0 0 16px 4px #19232d14");
  root.style.setProperty("--clr-boxshadow1", "0 2px 16px 2px #19232d33");
  root.style.setProperty("--clr-boxshadow2", "0 0 16px 4px #19232dff");
  root.style.setProperty("--clr-boxshadow3", "0 0 8px 2px #2841b414");
  root.style.setProperty("--clr-boxshadow4", "4px 4px 8px 4px #14141414");
  root.style.setProperty("--clr-btns-transparency", "#c8d7e666");
  root.style.setProperty("--clr-projects-border", "2px solid #2841b466");
  root.style.setProperty("--clr-return", "#2842b466");
  root.style.setProperty("--clr-contacts", "#0a0a0acc");
  root.style.setProperty("--clr-figmasvg1", "#505050");
  root.style.setProperty("--clr-figmasvg2", "#464646");
  root.style.setProperty("--clr-figmasvg3", "#0a0a0acc");
  root.style.setProperty("--clr-figmasvg4", "#646464");
  root.style.setProperty("--clr-about-overlay", "#2841b466");
  scores.style.setProperty("opacity", "0.1");
  portfolio.style.setProperty("opacity", "0.1");
});
//#endregion Light Mode - Desktop

// #region Dark Mode - Desktop
darkThemeModeDesktop.addEventListener("click", () => {
  darkThemeModeDesktop.style.setProperty("display", "none");
  darkmodeTooltip.style.setProperty("display", "none");
  darkThemeMode.style.setProperty("display", "none");
  lightThemeModeDesktop.style.setProperty("display", "flex");
  lightmodeTooltip.style.setProperty("display", "inline-block");
  lightThemeMode.style.setProperty("display", "flex");
  root.style.removeProperty("--clr-primary", "#2841b4");
  root.style.removeProperty("--clr-secondary", "#0a0a0acc");
  root.style.removeProperty("--clr-accent", "#c8d2dc");
  root.style.removeProperty("--clr-black", "#fafafa");
  root.style.removeProperty("--clr-grey", "#323232");
  root.style.removeProperty("--clr-white", "#0a0a0a");
  root.style.removeProperty("--clr-focus", "#2841b466");
  root.style.removeProperty("--clr-video-overlay", "#c8d2dccc");
  root.style.removeProperty("--clr-video-overlay-desktop", "#c8d2dcd9");
  root.style.removeProperty("--clr-video-boxshadow", "0 0 16px 4px #19232d14");
  root.style.removeProperty("--clr-boxshadow1", "0 2px 16px 2px #19232d33");
  root.style.removeProperty("--clr-boxshadow2", "0 0 16px 4px #19232dff");
  root.style.removeProperty("--clr-boxshadow3", "0 0 8px 2px #2841b414");
  root.style.removeProperty("--clr-boxshadow4", "0 0 8px 4px #14141414");
  root.style.removeProperty("--clr-btns-transparency", "#c8d7e666");
  root.style.removeProperty("--clr-projects-border", "2px solid #2841b466");
  root.style.removeProperty("--clr-return", "#2842b466");
  root.style.removeProperty("--clr-contacts", "#0a0a0acc");
  root.style.removeProperty("--clr-figmasvg1", "#505050");
  root.style.removeProperty("--clr-figmasvg2", "#464646");
  root.style.removeProperty("--clr-figmasvg3", "#0a0a0acc");
  root.style.removeProperty("--clr-figmasvg4", "#646464");
  root.style.removeProperty("--clr-about-overlay", "#2841b466");
  scores.style.removeProperty("opacity", "0.1");
  portfolio.style.removeProperty("opacity", "0.1");
});
//#endregion Dark Mode - Desktop

//////

// Switch Themes By The Keyboard
document.addEventListener("keypress", (event) => {
  if ((event.key = "L")) {
    lightThemeModeDesktop.style.setProperty("display", "none");
    lightmodeTooltip.style.setProperty("display", "none");
    lightThemeMode.style.setProperty("display", "none");
    darkThemeModeDesktop.style.setProperty("display", "flex");
    darkmodeTooltip.style.setProperty("display", "inline-block");
    darkThemeMode.style.setProperty("display", "flex");
    root.style.setProperty("--clr-primary", "#2841b4");
    root.style.setProperty("--clr-secondary", "#0a0a0acc");
    root.style.setProperty("--clr-accent", "#c8d2dc");
    root.style.setProperty("--clr-black", "#fafafa");
    root.style.setProperty("--clr-grey", "#323232");
    root.style.setProperty("--clr-white", "#0a0a0a");
    root.style.setProperty("--clr-focus", "#2841b466");
    root.style.setProperty("--clr-video-overlay", "#c8d2dccc");
    root.style.setProperty("--clr-video-overlay-desktop", "#c8d2dcd9");
    root.style.setProperty("--clr-video-boxshadow", "0 0 16px 4px #19232d14");
    root.style.setProperty("--clr-boxshadow1", "0 2px 16px 2px #19232d33");
    root.style.setProperty("--clr-boxshadow2", "0 0 16px 4px #19232dff");
    root.style.setProperty("--clr-boxshadow3", "0 0 8px 2px #2841b414");
    root.style.setProperty("--clr-boxshadow4", "4px 4px 8px 4px #14141414");
    root.style.setProperty("--clr-btns-transparency", "#c8d7e666");
    root.style.setProperty("--clr-projects-border", "2px solid #2841b466");
    root.style.setProperty("--clr-return", "#2842b466");
    root.style.setProperty("--clr-contacts", "#0a0a0acc");
    root.style.setProperty("--clr-figmasvg1", "#505050");
    root.style.setProperty("--clr-figmasvg2", "#464646");
    root.style.setProperty("--clr-figmasvg3", "#0a0a0acc");
    root.style.setProperty("--clr-figmasvg4", "#646464");
    root.style.setProperty("--clr-about-overlay", "#2841b466");
    scores.style.setProperty("opacity", "0.1");
    portfolio.style.setProperty("opacity", "0.1");
  }
});

//////

// Themes Tooltips
lightThemeModeDesktop.addEventListener("mouseover", () => {
  lightmodeTooltip.style.setProperty("color", "var(--clr-primary)");
  lightmodeTooltip.style.setProperty("opacity", "1");
});

lightThemeModeDesktop.addEventListener("mouseleave", () => {
  lightmodeTooltip.style.removeProperty("color", "var(--clr-primary)");
  lightmodeTooltip.style.removeProperty("opacity", "0");
});

darkThemeModeDesktop.addEventListener("mouseover", () => {
  darkmodeTooltip.style.setProperty("color", "var(--clr-primary)");
  darkmodeTooltip.style.setProperty("opacity", "1");
});

darkThemeModeDesktop.addEventListener("mouseleave", () => {
  darkmodeTooltip.style.setProperty("color", "var(--clr-primary)");
  darkmodeTooltip.style.removeProperty("opacity", "0");
});

//////
