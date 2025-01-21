// #region Make Mobile Navigation Work:
const navbtnsEl = document.querySelector(".Mobile-Icons");
const headerEl = document.querySelector(".Header");

navbtnsEl.addEventListener("click", function () {
  headerEl.classList.toggle("Nav-open");
});
// #endregion Make Mobile Navigation Work:

// #region Close Menu After Click:
const navListEL = document.querySelector(".Nav-List");
navListEL.addEventListener("click", function (event) {
  if (event.target.tagName === "A") {
    headerEl.classList.remove("Nav-open");
  }
});
// #endregion Close Menu After Click:

// #region Scrolling Locked
const menuEl = document.querySelector(".Mobile-Menu");
const closeEl = document.querySelector(".Mobile-Close");

menuEl.addEventListener("click", function () {
  document.documentElement.style.setProperty("overflow-y", "hidden");
});

closeEl.addEventListener("click", function () {
  document.documentElement.style.removeProperty("overflow-y");
});
// #endregion Scrolling Locked

// #region Navigations
LogoLink.addEventListener("click", () => {
  HomePage.style.setProperty("display", "flex");
  AboutPage.style.setProperty("display", "none");
  ProjectsPage.style.setProperty("display", "none");
  AboutListBtn.style.setProperty("color", "var(--White)");
  AboutBarBtn.style.setProperty("color", "var(--White)");
  ProjectsListBtn.style.setProperty("color", "var(--White)");
  ProjectsBarBtn.style.setProperty("color", "var(--White)");
});

AboutListBtn.addEventListener("click", () => {
  HomePage.style.setProperty("display", "none");
  AboutPage.style.setProperty("display", "flex");
  ProjectsPage.style.setProperty("display", "none");
  AboutListBtn.style.setProperty("color", "var(--Primary)");
  AboutBarBtn.style.setProperty("color", "var(--Primary)");
  ProjectsListBtn.style.setProperty("color", "var(--White)");
  ProjectsBarBtn.style.setProperty("color", "var(--White)");
});

ProjectsListBtn.addEventListener("click", () => {
  HomePage.style.setProperty("display", "none");
  AboutPage.style.setProperty("display", "none");
  ProjectsPage.style.setProperty("display", "flex");
  AboutListBtn.style.setProperty("color", "var(--White)");
  AboutBarBtn.style.setProperty("color", "var(--White)");
  ProjectsListBtn.style.setProperty("color", "var(--Primary)");
  ProjectsBarBtn.style.setProperty("color", "var(--Primary)");
});

AboutBarBtn.addEventListener("click", () => {
  HomePage.style.setProperty("display", "none");
  AboutPage.style.setProperty("display", "flex");
  ProjectsPage.style.setProperty("display", "none");
  AboutListBtn.style.setProperty("color", "var(--Primary)");
  AboutBarBtn.style.setProperty("color", "var(--Primary)");
  ProjectsListBtn.style.setProperty("color", "var(--White)");
  ProjectsBarBtn.style.setProperty("color", "var(--White)");
});

ProjectsBarBtn.addEventListener("click", () => {
  HomePage.style.setProperty("display", "none");
  AboutPage.style.setProperty("display", "none");
  ProjectsPage.style.setProperty("display", "flex");
  AboutListBtn.style.setProperty("color", "var(--White)");
  AboutBarBtn.style.setProperty("color", "var(--White)");
  ProjectsListBtn.style.setProperty("color", "var(--Primary)");
  ProjectsBarBtn.style.setProperty("color", "var(--Primary)");
});

AboutLinkBtn.addEventListener("click", () => {
  HomePage.style.setProperty("display", "none");
  AboutPage.style.setProperty("display", "flex");
  ProjectsPage.style.setProperty("display", "none");
  AboutListBtn.style.setProperty("color", "var(--Primary)");
  AboutBarBtn.style.setProperty("color", "var(--Primary)");
  ProjectsListBtn.style.setProperty("color", "var(--White)");
  ProjectsBarBtn.style.setProperty("color", "var(--White)");
});

ProjectsLinkBtn.addEventListener("click", () => {
  HomePage.style.setProperty("display", "none");
  AboutPage.style.setProperty("display", "none");
  ProjectsPage.style.setProperty("display", "flex");
  AboutListBtn.style.setProperty("color", "var(--White)");
  AboutBarBtn.style.setProperty("color", "var(--White)");
  ProjectsListBtn.style.setProperty("color", "var(--Primary)");
  ProjectsBarBtn.style.setProperty("color", "var(--Primary)");
});
// #endregion Navigations

// #region Set Current Year
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;
// #endregion Set Current Year

// #region Tools-Page
ToolsBtn.addEventListener("click", () => {
  ToolsPage.style.setProperty("opacity", "1");
  ToolsPage.style.setProperty("visibility", "visible");
  ToolsPage.style.setProperty("pointer-events", "auto");
  ToolsTitle.style.setProperty("display", "inline-block");
  ToolsParagraph.style.setProperty("display", "inline-block");
  ToolsList.style.setProperty("display", "grid");
  CertificatesList.style.setProperty("display", "grid");
});

ToolsBtnTablet.addEventListener("click", () => {
  ToolsPage.style.setProperty("opacity", "1");
  ToolsPage.style.setProperty("visibility", "visible");
  ToolsPage.style.setProperty("pointer-events", "auto");
  ToolsTitle.style.setProperty("display", "inline-block");
  ToolsParagraph.style.setProperty("display", "inline-block");
  ToolsList.style.setProperty("display", "grid");
  CertificatesList.style.setProperty("display", "grid");
});

ToolsCloseBtn.addEventListener("click", () => {
  ToolsPage.style.removeProperty("opacity", "1");
  ToolsPage.style.removeProperty("visibility", "visible");
  ToolsPage.style.removeProperty("pointer-events", "auto");
  ToolsTitle.style.removeProperty("display", "inline-block");
  ToolsParagraph.style.removeProperty("display", "inline-block");
  ToolsList.style.removeProperty("display", "grid");
  CertificatesList.style.removeProperty("display", "grid");
});

ToolsPage.addEventListener("click", () => {
  ToolsPage.style.removeProperty("opacity", "1");
  ToolsPage.style.removeProperty("visibility", "visible");
  ToolsPage.style.removeProperty("pointer-events", "auto");
  ToolsTitle.style.removeProperty("display", "inline-block");
  ToolsParagraph.style.removeProperty("display", "inline-block");
  ToolsList.style.removeProperty("display", "grid");
  CertificatesList.style.removeProperty("display", "grid");
  window.scrollTo(0, 0);
});
// #endregion Tools-Page

// #region Project Mouse Hovered
ProjectLink1.addEventListener("mouseover", () => {
  ProjectImage1.classList.add("ProjectHoveredImage");
  ProjectInfo1.classList.add("ProjectHoveredInfo");
  ProjectIcons1.classList.add("ProjectHoveredIcons");
});

ProjectLink1.addEventListener("mouseleave", () => {
  ProjectImage1.classList.remove("ProjectHoveredImage");
  ProjectInfo1.classList.remove("ProjectHoveredInfo");
  ProjectIcons1.classList.remove("ProjectHoveredIcons");
});

ProjectLink2.addEventListener("mouseover", () => {
  ProjectImage2.classList.add("ProjectHoveredImage");
  ProjectInfo2.classList.add("ProjectHoveredInfo");
  ProjectIcons2.classList.add("ProjectHoveredIcons");
});

ProjectLink2.addEventListener("mouseleave", () => {
  ProjectImage2.classList.remove("ProjectHoveredImage");
  ProjectInfo2.classList.remove("ProjectHoveredInfo");
  ProjectIcons2.classList.remove("ProjectHoveredIcons");
});
// #endregion Project Mouse Hovered
