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

//   MixItUp initialization code  (filteration section)
// In your doctors.js file
document.addEventListener("DOMContentLoaded", function () {
  // Initialize MixItUp
  var mixer = mixitup("#doctors-list", {
    animation: {
      duration: 350,
      effects: "fade scale(0.66)",
      easing: "cubic-bezier(0.645, 0.045, 0.355, 1)",
    },
    classNames: {
      block: "programs",
      elementFilter: "btn",
      elementSort: "btn",
    },
    selectors: {
      target: ".mix",
    },
  });

  // Set "All Specialties" as active by default
  document
    .querySelector('.doctors-filters .item[data-filter]')
    .classList.add("active");

  // Add active class to clicked filter buttons
  const filterButtons = document.querySelectorAll(".doctors-filters .item");

  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Remove active class from all buttons
      filterButtons.forEach((btn) => {
        btn.classList.remove("active");
      });

      // Add active class to clicked button
      this.classList.add("active");
    });
  });
});
