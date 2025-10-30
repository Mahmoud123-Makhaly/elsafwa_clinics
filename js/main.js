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
      items: 3,
    },
    1000: {
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

document.addEventListener("DOMContentLoaded", function () {
  // Store selected values
  const selectedValues = {
    department: null,
    doctor: null,
    date: null,
    location: null,
  };

  // Get DOM elements
  const searchBtn = document.getElementById("searchBtn");
  const userInfoForm = document.getElementById("userInfoForm");
  const appointmentForm = document.getElementById("appointmentForm");
  const summaryDetails = document.getElementById("summaryDetails");

  // Set up dropdown functionality
  document.querySelectorAll(".dropdown-item").forEach((item) => {
    item.addEventListener("click", function (e) {
      e.preventDefault();

      // Get the parent dropdown
      const dropdown = this.closest(".dropdown");
      const button = dropdown.querySelector(".dropdown-toggle");

      // Update button text
      button.textContent = this.textContent;

      // Store the selected value
      const dropdownId = button.id;
      const value = this.getAttribute("data-value");
      const displayText = this.textContent;

      if (dropdownId === "departmentDropdown") {
        selectedValues.department = { value, displayText };
      } else if (dropdownId === "doctorDropdown") {
        selectedValues.doctor = { value, displayText };
      } else if (dropdownId === "dateDropdown") {
        selectedValues.date = { value, displayText };
      } else if (dropdownId === "locationDropdown") {
        selectedValues.location = { value, displayText };
      }
    });
  });

  // Search button click handler
  searchBtn.addEventListener("click", function () {
    // Check if all dropdowns have been selected
    const allSelected = Object.values(selectedValues).every(
      (value) => value !== null
    );

    if (allSelected) {
      // Update the summary
      updateSummary();

      // Show the user info form
      userInfoForm.style.display = "block";

      // Scroll to the form
      userInfoForm.scrollIntoView({ behavior: "smooth" });
    } else {
      alert("Please select all options before searching.");
    }
  });

  // Update appointment summary
  function updateSummary() {
    summaryDetails.innerHTML = `
                     
                `;
  }

  // Form submission handler
  appointmentForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Get form values
    const userName = document.getElementById("userName").value;
    const userPhone = document.getElementById("userPhone").value;

    // In a real application, you would send this data to a server
    // For now, we'll just show a success message
    Swal.fire({
      title: "Good job!",
      text: "Submission successfully",
      icon: "success",
    });

    // Reset the form
    appointmentForm.reset();
    userInfoForm.style.display = "none";

    // Reset dropdowns
    document.querySelectorAll(".dropdown-toggle").forEach((button) => {
      if (button.id === "departmentDropdown")
        button.textContent = "Select Department";
      if (button.id === "doctorDropdown") button.textContent = "Select Doctor";
      if (button.id === "dateDropdown") button.textContent = "Select Date";
      if (button.id === "locationDropdown")
        button.textContent = "Select Location";
    });

    // Reset selected values
    Object.keys(selectedValues).forEach((key) => {
      selectedValues[key] = null;
    });
  });
});
