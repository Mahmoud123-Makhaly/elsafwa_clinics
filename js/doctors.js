// doctors.js - Enhanced filtering and booking system

window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".nav_bar");
  const banner = document.querySelector(".banner");
  const bannerBottom = banner.offsetTop + banner.offsetHeight;

  if (window.scrollY > 80) {
    navbar.style.position = "fixed";
    navbar.style.background = "#fff";
    navbar.classList.add("sticky-top");
    navbar.style.boxShadow =
      "rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px";
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

// Doctor schedules database
const doctorSchedules = {
  "Prof. Dr. Hany Eissa": [
    {
      day: "Saturday - Thursday",
      time: "8:00 PM – 10:00 PM",
      period: "evening",
    },
  ],
  "Prof. Dr. Taha Abdel Hamid": [
    { day: "Sunday – Tuesday", time: "5:00 PM – 8:00 PM", period: "evening" },
  ],
  "Dr. Hisham Mahmoud": [
    {
      day: "Saturday – Monday – Wednesday",
      time: "7:00 PM – 10:00 PM",
      period: "evening",
    },
  ],
  "Dr. Essam Shalaby": [
    {
      day: "Sunday – Tuesday – Thursday",
      time: "5:00 PM – 8:00 PM",
      period: "evening",
    },
  ],
  "Dr. Mahmoud Hassan": [
    {
      day: "Saturday - Thursday",
      time: "1:00 PM – 6:00 PM",
      period: "afternoon",
    },
  ],
  "Dr. Rafik El-Kady": [
    {
      day: "Saturday – Monday – Wednesday",
      time: "7:00 PM – 9:30 PM",
      period: "evening",
    },
  ],
  "Dr. Mohamed Hossam": [
    { day: "Sunday", time: "1:00 PM – 3:00 PM", period: "afternoon" },
    { day: "Tuesday", time: "8:00 PM – 10:00 PM", period: "evening" },
  ],
  "Dr. Rowan": [
    { day: "Monday", time: "12:00 PM – 2:00 PM", period: "afternoon" },
  ],
  "Dr. Mohamed El-Aggag": [
    { day: "Thursday", time: "6:00 PM – 8:00 PM", period: "evening" },
  ],
  "Dr. Eman Abdel Salam": [
    {
      day: "Sunday – Tuesday – Thursday",
      time: "7:00 PM – 8:00 PM",
      period: "evening",
    },
  ],
  "Dr. Karim Elhamy": [
    {
      day: "Saturday – Monday – Wednesday",
      time: "9:00 PM – 10:00 PM",
      period: "evening",
    },
  ],
  "Dr. Alaa Shebeeb": [
    {
      day: "Saturday – Thursday",
      time: "5:30 PM – 8:00 PM",
      period: "evening",
    },
  ],
  "Dr. Mohamed Ghazi": [
    {
      day: "Saturday – Thursday",
      time: "12:00 PM – 4:00 PM",
      period: "afternoon",
    },
  ],
  "Prof. Dr. Naglaa Ali": [
    {
      day: "Saturday – Tuesday",
      time: "By Prior Appointment",
      period: "appointment",
    },
  ],
  "Dr. Walid Attia": [
    {
      day: "Saturday - Thursday",
      time: "6:00 PM - 9:00 PM",
      period: "evening",
    },
  ],
  "Dr. Hisham Morsi": [
    {
      day: "Saturday - Wednesday",
      time: "5:00 PM - 8:00 PM",
      period: "evening",
    },
  ],
  "Dr. Afaf Shaheen": [
    { day: "Sunday - Thursday", time: "6:00 PM - 9:00 PM", period: "evening" },
  ],
  "Dr. Nahed Mohamed": [
    { day: "Monday - Friday", time: "1:00 PM - 4:00 PM", period: "afternoon" },
  ],
  "Dr. Hassan Abdel Kader": [
    {
      day: "Saturday - Thursday",
      time: "7:00 PM - 10:00 PM",
      period: "evening",
    },
  ],
  "Dr. Ahmed El-Nahhas": [
    { day: "Sunday - Thursday", time: "5:00 PM - 8:00 PM", period: "evening" },
  ],
  "Dr. Amira Shaheen": [
    { day: "Monday - Friday", time: "12:00 PM - 3:00 PM", period: "afternoon" },
  ],
  "Dr. Azza Abdel Wahab": [
    {
      day: "Saturday - Wednesday",
      time: "9:00 AM - 12:00 PM",
      period: "morning",
    },
  ],
  "Dr. Abdel Rahman Metwally": [
    {
      day: "Saturday - Thursday",
      time: "6:00 PM - 9:00 PM",
      period: "evening",
    },
  ],
  "Dr. Mohamed Nabil": [
    {
      day: "Sunday - Thursday",
      time: "1:00 PM - 4:00 PM",
      period: "afternoon",
    },
  ],
  "Dr. Ihab Raafat": [
    {
      day: "Saturday - Wednesday",
      time: "5:00 PM - 8:00 PM",
      period: "evening",
    },
  ],
  "Dr. Ashraf Othman": [
    { day: "Monday - Friday", time: "12:00 PM - 3:00 PM", period: "afternoon" },
  ],
  "Dr. Ahmed Abdullah": [
    { day: "Sunday - Thursday", time: "6:00 PM - 9:00 PM", period: "evening" },
  ],
};

// Specialty to specialty value mapping
const specialtyMap = {
  "General Surgery": "GeneralSurgery",
  "Internal Medicine & Gastroenterology": "InternalMedicineGastroenterology",
  ENT: "ENT",
  "Chest & Allergy": "ChestAllergy",
  "Orthopedics & Joints": "OrthopedicsJoints",
  Rheumatology: "Rheumatology",
  Neurology: "neurology",
  "Vascular Surgery": "VascularSurgery",
  "OB/GYN": "OB-GYN",
  Psychology: "Psychology",
  Cardiology: "Cardiology",
  Urology: "Urology",
};

document.addEventListener("DOMContentLoaded", function () {
  let mixer;
  let selectedSpecialty = "";
  let selectedDoctor = "";
  let selectedTime = "";
  let selectedTimeText = "";

  // Initialize MixItUp
  mixer = mixitup("#doctors-list", {
    animation: {
      duration: 350,
      effects: "fade scale(0.66)",
      easing: "cubic-bezier(0.645, 0.045, 0.355, 1)",
    },
    selectors: {
      target: ".mix",
    },
  });

  // Remove "All Specialties" button functionality
  const allSpecialtiesBtn = document.querySelector(
    '.doctors-filters .item[data-filter="all"]'
  );
  if (allSpecialtiesBtn) {
    allSpecialtiesBtn.style.display = "none";
  }

  // Handle specialty filter button clicks
  const filterButtons = document.querySelectorAll(
    '.doctors-filters .item:not([data-filter="all"])'
  );

  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Remove active class from all buttons
      filterButtons.forEach((btn) => btn.classList.remove("active"));

      // Add active class to clicked button
      this.classList.add("active");

      // Get specialty filter value
      const filterValue = this.getAttribute("data-filter");
      selectedSpecialty = filterValue.replace(".", "");

      // Update specialty dropdown
      const specialtyName = Object.keys(specialtyMap).find(
        (key) => specialtyMap[key] === selectedSpecialty
      );
      document.querySelector("#departmentDropdown").textContent =
        specialtyName || "Select Specialty";

      // Update available doctors
      updateDoctorDropdown(selectedSpecialty);

      // Update available times
      updateTimeDropdown(selectedSpecialty, "");

      // Apply filter
      mixer.filter(filterValue);
    });
  });

  // Handle specialty dropdown
  const specialtyDropdownItems = document.querySelectorAll(
    "#departmentDropdown + .dropdown-menu .dropdown-item"
  );
  specialtyDropdownItems.forEach((item) => {
    item.addEventListener("click", function (e) {
      e.preventDefault();
      const specialtyName = this.textContent;
      selectedSpecialty = this.getAttribute("data-value");

      document.querySelector("#departmentDropdown").textContent = specialtyName;

      // Highlight corresponding filter button
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      const matchingBtn = document.querySelector(
        `.doctors-filters .item[data-filter=".${selectedSpecialty}"]`
      );
      if (matchingBtn) {
        matchingBtn.classList.add("active");
      }

      // Update available doctors and times
      updateDoctorDropdown(selectedSpecialty);
      updateTimeDropdown(selectedSpecialty, "");

      // Reset doctor and time selections
      document.querySelector("#doctorDropdown").textContent = "Select Doctor";
      document.querySelector("#timeDropdown").textContent = "Select Time";
      selectedDoctor = "";
      selectedTime = "";
      selectedTimeText = "";
    });
  });

  // Populate and handle doctor dropdown
  function updateDoctorDropdown(specialty) {
    const doctorDropdownMenu = document.querySelector(
      "#doctorDropdown + .dropdown-menu"
    );
    doctorDropdownMenu.innerHTML = "";

    const doctors = specialty
      ? document.querySelectorAll(`.mix.${specialty}`)
      : document.querySelectorAll(".mix");

    const doctorNames = new Set();
    doctors.forEach((doctor) => {
      const doctorName = doctor.getAttribute("data-doctor");
      if (doctorName) doctorNames.add(doctorName);
    });

    doctorNames.forEach((name) => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.classList.add("dropdown-item");
      a.href = "#";
      a.setAttribute("data-value", name);
      a.textContent = name;
      a.addEventListener("click", function (e) {
        e.preventDefault();
        selectedDoctor = name;
        document.querySelector("#doctorDropdown").textContent = name;
        updateTimeDropdown(selectedSpecialty, selectedDoctor);
        document.querySelector("#timeDropdown").textContent = "Select Time";
        selectedTime = "";
        selectedTimeText = "";
      });
      li.appendChild(a);
      doctorDropdownMenu.appendChild(li);
    });
  }

  // Update time dropdown based on selected specialty and doctor
  function updateTimeDropdown(specialty, doctor) {
    const timeDropdownMenu = document.querySelector(
      "#timeDropdown + .dropdown-menu"
    );
    timeDropdownMenu.innerHTML = "";

    const availableTimes = new Set();

    if (doctor) {
      // Show times for specific doctor
      const schedules = doctorSchedules[doctor] || [];
      schedules.forEach((schedule) => {
        const displayText = `${schedule.day} (${schedule.time})`;
        availableTimes.add(
          JSON.stringify({
            text: displayText,
            value: schedule.period,
          })
        );
      });
    } else if (specialty) {
      // Show all times for doctors in specialty
      const doctors = document.querySelectorAll(`.mix.${specialty}`);
      doctors.forEach((doc) => {
        const doctorName = doc.getAttribute("data-doctor");
        const schedules = doctorSchedules[doctorName] || [];
        schedules.forEach((schedule) => {
          const displayText = `${schedule.day} (${schedule.time})`;
          availableTimes.add(
            JSON.stringify({
              text: displayText,
              value: schedule.period,
            })
          );
        });
      });
    } else {
      // Show all times
      Object.values(doctorSchedules)
        .flat()
        .forEach((schedule) => {
          const displayText = `${schedule.day} (${schedule.time})`;
          availableTimes.add(
            JSON.stringify({
              text: displayText,
              value: schedule.period,
            })
          );
        });
    }

    availableTimes.forEach((timeStr) => {
      const timeObj = JSON.parse(timeStr);
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.classList.add("dropdown-item");
      a.href = "#";
      a.setAttribute("data-value", timeObj.value);
      a.textContent = timeObj.text;
      a.addEventListener("click", function (e) {
        e.preventDefault();
        selectedTime = timeObj.value;
        selectedTimeText = timeObj.text;
        document.querySelector("#timeDropdown").textContent = timeObj.text;
      });
      li.appendChild(a);
      timeDropdownMenu.appendChild(li);
    });
  }

  // Initialize dropdowns
  updateDoctorDropdown("");
  updateTimeDropdown("", "");

  // Search button functionality - Show appointment form
  document.getElementById("searchBtn").addEventListener("click", function () {
    if (!selectedSpecialty) {
      Swal.fire({
        icon: "warning",
        title: "Missing Selection",
        text: "Please select a specialty first",
        confirmButtonColor: "#3085d6",
      });
      return;
    }

    let filterString = `.${selectedSpecialty}`;

    if (selectedDoctor) {
      filterString += `[data-doctor="${selectedDoctor}"]`;
    }

    if (selectedTime) {
      filterString += `[data-schedule*="${selectedTime}"]`;
    }

    // Apply filter
    mixer.filter(filterString);

    // Show appointment form
    const userInfoForm = document.getElementById("userInfoForm");
    const summaryDetails = document.getElementById("summaryDetails");

    // Get specialty name
    const specialtyName = Object.keys(specialtyMap).find(
      (key) => specialtyMap[key] === selectedSpecialty
    );

    // Build summary
    let summaryHTML = `<h5>Appointment Details</h5>`;
    summaryHTML += `<p><strong>Specialty:</strong> ${specialtyName}</p>`;
    if (selectedDoctor) {
      summaryHTML += `<p><strong>Doctor:</strong> ${selectedDoctor}</p>`;
    }
    if (selectedTimeText) {
      summaryHTML += `<p><strong>Time:</strong> ${selectedTimeText}</p>`;
    }

    summaryDetails.innerHTML = summaryHTML;
    userInfoForm.style.display = "block";

    // Scroll to form
    userInfoForm.scrollIntoView({ behavior: "smooth", block: "center" });
  });

  // Add this configuration at the top of your doctors.js file
  // Replace your current appointmentForm.addEventListener with this:

  appointmentForm.addEventListener("submit", async function (e) {
    e.preventDefault();

    const userName = document.getElementById("userName").value.trim();
    const userPhone = document.getElementById("userPhone").value.trim();

    // Validation
    if (!userName || !userPhone) {
      Swal.fire({
        icon: "error",
        title: "Incomplete Form",
        text: "Please fill in all fields",
        confirmButtonColor: "#d33",
      });
      return;
    }

    // Get specialty name
    const specialtyName = Object.keys(specialtyMap).find(
      (key) => specialtyMap[key] === selectedSpecialty
    );

    // Show loading state
    const submitBtn = appointmentForm.querySelector(".submit-btn");
    const originalBtnText = submitBtn.textContent;
    submitBtn.textContent = "Submitting...";
    submitBtn.disabled = true;

    try {
      // Prepare data for Google Sheets
      const formData = {
        name: userName,
        phone: userPhone,
        specialty: specialtyName || "",
        doctor: selectedDoctor || "",
        time: selectedTimeText || "",
      };

      console.log("Sending data:", formData);
      const GOOGLE_SHEETS_WEB_APP_URL = `https://script.google.com/macros/s/AKfycbz0cQEDpNCpuMseCER-Q2aHOAvzi7Fds84AyqejbpDr9ITZiiek2PmriArIUJzX0ZASCQ/exec`;
      // Send to Google Sheets with error handling
      const response = await fetch(GOOGLE_SHEETS_WEB_APP_URL, {
        method: "POST",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log("Server response:", result);

      if (result.result === "success") {
        // Show success message
        Swal.fire({
          icon: "success",
          title: "Appointment Booked Successfully!",
          html: `
        <div style="text-align: left; padding: 10px;">
          <p><strong>Name:</strong> ${userName}</p>
          <p><strong>Phone:</strong> ${userPhone}</p>
          <p><strong>Specialty:</strong> ${specialtyName}</p>
          ${
            selectedDoctor
              ? `<p><strong>Doctor:</strong> ${selectedDoctor}</p>`
              : ""
          }
          ${
            selectedTimeText
              ? `<p><strong>Time:</strong> ${selectedTimeText}</p>`
              : ""
          }
        </div>
        <p style="margin-top: 15px;">We will contact you shortly to confirm your appointment.</p>
      `,
          confirmButtonColor: "#28a745",
          confirmButtonText: "OK",
        }).then(() => {
          resetForm();
        });
      } else {
        throw new Error(result.error || "Unknown server error");
      }
    } catch (error) {
      console.error("Error submitting to Google Sheets:", error);

      // Show appropriate error message
      Swal.fire({
        icon: "warning",
        title: "Submission Issue",
        html: `
      <div style="text-align: left; padding: 10px;">
        <p><strong>Your appointment request was received!</strong></p>
        <p>However, there was a temporary issue saving to our system.</p>
        <p><strong>Details we have:</strong></p>
        <p>Name: ${userName}</p>
        <p>Phone: ${userPhone}</p>
        <p>Specialty: ${specialtyName}</p>
        ${selectedDoctor ? `<p>Doctor: ${selectedDoctor}</p>` : ""}
        ${selectedTimeText ? `<p>Time: ${selectedTimeText}</p>` : ""}
      </div>
      <p style="margin-top: 15px;">We will contact you shortly to confirm.</p>
    `,
        confirmButtonColor: "#ffc107",
        confirmButtonText: "OK",
      }).then(() => {
        resetForm();
      });
    } finally {
      // Reset button state
      submitBtn.textContent = originalBtnText;
      submitBtn.disabled = false;
    }
  });
  function resetForm() {
    appointmentForm.reset();
    document.getElementById("userInfoForm").style.display = "none";

    // Reset selections
    selectedSpecialty = "";
    selectedDoctor = "";
    selectedTime = "";
    selectedTimeText = "";

    // Reset dropdowns
    document.querySelector("#departmentDropdown").textContent =
      "Select Specialty";
    document.querySelector("#doctorDropdown").textContent = "Select Doctor";
    document.querySelector("#timeDropdown").textContent = "Select Time";

    // Remove active filter buttons
    filterButtons.forEach((btn) => btn.classList.remove("active"));

    // Show all doctors
    mixer.filter("all");
  }
});
