
// home logic
$(".specialties-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  dots: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
    1400: {
      items: 4,
    },

    1700: {
      items: 5,
    },
  },
  navText: [
    // Use this array to set custom icons
    '<i class="fa-solid fa-chevron-left"></i>', // This will be the "next" button in RTL
    '<i class="fa-solid fa-chevron-right"></i>', // This will be the "previous" button in RTL
  ],
});
// home logic
$(".departments-carousel").owlCarousel({
  loop: true,
  dots: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});
$(".doctors-carousel").owlCarousel({
  loop: true,
  margin: 20,
  nav: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 4,
    },
  },
  nav: false,
});
$(".testimonials-carousel").owlCarousel({
  loop: true,
  margin: 50,

  responsive: {
    0: {
      items: 1,
    },
  },
  nav: false,
});

window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".nav_bar");
  const banner = document.querySelector(".banner");
  const bannerBottom = banner.offsetTop + banner.offsetHeight;

  if (window.scrollY > 80) {
    navbar.style.position = "fixed";
    navbar.style.background = "#fff";
    navbar.style.boxShadow =
      "  rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;";
    navbar.style.top = "0";
    navbar.style.width = "100%";
    navbar.style.zIndex = "1030";
  } else {
    navbar.style.position = "absolute";
    navbar.style.top = "auto";
    navbar.style.background = "transparent";
  }
});
