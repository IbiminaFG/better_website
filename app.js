const hamburger = document.querySelector(".hamburger");
const navBar = document.querySelector(".nav-bar");

hamburger.addEventListener("click", () => {
  const visibility = navBar.getAttribute("data-visible");

  if (visibility === "false") {
    navBar.setAttribute("data-visible", true);
  } else if (visibility === "true") {
    navBar.setAttribute("data-visible", false);
  }
});
