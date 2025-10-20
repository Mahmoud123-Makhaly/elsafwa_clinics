window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".nav_bar");
  const banner = document.querySelector(".banner");
  const bannerBottom = banner.offsetTop + banner.offsetHeight;

  if (window.scrollY > 80) {
    navbar.style.position = "fixed";
    navbar.style.background = "#fff";
    navbar.classList.add("sticky-top");
    navbar.style.boxShadow =
      "  rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;";
    navbar.style.top = "0";
    navbar.style.width = "100%";
    navbar.style.zIndex = "1030";
  } else {
    navbar.style.position = "absolute";
    navbar.style.top = "auto";
    navbar.style.background = "transparent";
    navbar.style.color = "#000";
    navbar.classList.remove("sticky-top");
  }
});
 