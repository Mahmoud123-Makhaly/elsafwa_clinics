// filter.js - Filtering and booking system for home page

// Detect language from HTML tag
const isArabic =
  document.documentElement.lang === "ar" ||
  document.documentElement.dir === "rtl";

// Complete Arabic translations
const translations = {
  selectSpecialty: isArabic ? "اختر التخصص" : "Select Specialty",
  selectDoctor: isArabic ? "اختر الطبيب" : "Select Doctor",
  selectTime: isArabic ? "اختر الوقت" : "Select Time",
  search: isArabic ? "بحث" : "Search",
  fullName: isArabic ? "الاسم بالكامل" : "Full Name",
  phoneNumber: isArabic ? "رقم الهاتف" : "Phone Number",
  enterFullName: isArabic ? "أدخل الاسم بالكامل" : "Enter your full name",
  enterPhoneNumber: isArabic ? "أدخل رقم الهاتف" : "Enter your phone number",
  submit: isArabic ? "إرسال" : "Submit",
  submitting: isArabic ? "جاري الإرسال..." : "Submitting...",

  // Days of week
  days: {
    Saturday: isArabic ? "السبت" : "Saturday",
    Sunday: isArabic ? "الأحد" : "Sunday",
    Monday: isArabic ? "الاثنين" : "Monday",
    Tuesday: isArabic ? "الثلاثاء" : "Tuesday",
    Wednesday: isArabic ? "الأربعاء" : "Wednesday",
    Thursday: isArabic ? "الخميس" : "Thursday",
    Friday: isArabic ? "الجمعة" : "Friday",
  },

  // Time periods
  morning: isArabic ? "صباحاً" : "Morning",
  afternoon: isArabic ? "ظهراً" : "Afternoon",
  evening: isArabic ? "مساءً" : "Evening",
  appointment: isArabic ? "بموعد مسبق" : "By Prior Appointment",

  // Alert messages
  missingSelection: isArabic ? "اختيار مفقود" : "Missing Selection",
  selectSpecialtyFirst: isArabic
    ? "الرجاء اختيار التخصص أولاً"
    : "Please select a specialty first",
  incompleteForm: isArabic ? "نموذج غير مكتمل" : "Incomplete Form",
  fillAllFields: isArabic
    ? "الرجاء ملء جميع الحقول"
    : "Please fill in all fields",
  appointmentBooked: isArabic
    ? "تم حجز الموعد بنجاح!"
    : "Appointment Booked Successfully!",
  appointmentDetails: isArabic ? "تفاصيل الموعد" : "Appointment Details",
  specialty: isArabic ? "التخصص" : "Specialty",
  doctor: isArabic ? "الطبيب" : "Doctor",
  time: isArabic ? "الوقت" : "Time",
  contactShortly: isArabic
    ? "سنتصل بك قريباً لتأكيد الموعد"
    : "We will contact you shortly to confirm your appointment",
  submissionIssue: isArabic ? "مشكلة في الإرسال" : "Submission Issue",
  appointmentReceived: isArabic
    ? "تم استلام طلب الموعد الخاص بك!"
    : "Your appointment request was received!",
  temporaryIssue: isArabic
    ? "كانت هناك مشكلة مؤقتة في الحفظ على نظامنا"
    : "There was a temporary issue saving to our system",
  detailsWeHave: isArabic ? "التفاصيل التي لدينا" : "Details we have",
  willContactConfirm: isArabic
    ? "سنتصل بك قريباً للتأكيد"
    : "We will contact you shortly to confirm",
  name: isArabic ? "الاسم" : "Name",
};

// Complete Doctor schedules database
const doctorSchedules = {
  "Prof. Dr. Hany Eissa": [
    {
      day: isArabic ? "السبت - الخميس" : "Saturday - Thursday",
      time: "8:00 PM – 10:00 PM",
      period: "evening",
    },
  ],
  "Prof. Dr. Taha Abdel Hamid": [
    {
      day: isArabic ? "الأحد – الثلاثاء" : "Sunday – Tuesday",
      time: "5:00 PM – 8:00 PM",
      period: "evening",
    },
  ],
  "Dr. Hisham Mahmoud": [
    {
      day: isArabic
        ? "السبت – الاثنين – الأربعاء"
        : "Saturday – Monday – Wednesday",
      time: "7:00 PM – 10:00 PM",
      period: "evening",
    },
  ],
  "Dr. Essam Shalaby": [
    {
      day: isArabic
        ? "الأحد – الثلاثاء – الخميس"
        : "Sunday – Tuesday – Thursday",
      time: "5:00 PM – 8:00 PM",
      period: "evening",
    },
  ],
  "Dr. Mahmoud Hassan": [
    {
      day: isArabic ? "السبت - الخميس" : "Saturday - Thursday",
      time: "1:00 PM – 6:00 PM",
      period: "afternoon",
    },
  ],
  "Dr. Rafik El-Kady": [
    {
      day: isArabic
        ? "السبت – الاثنين – الأربعاء"
        : "Saturday – Monday – Wednesday",
      time: "7:00 PM – 9:30 PM",
      period: "evening",
    },
  ],
  "Dr. Mohamed Hossam": [
    {
      day: isArabic ? "الأحد" : "Sunday",
      time: "1:00 PM – 3:00 PM",
      period: "afternoon",
    },
    {
      day: isArabic ? "الثلاثاء" : "Tuesday",
      time: "8:00 PM – 10:00 PM",
      period: "evening",
    },
  ],
  "Dr. Rowan": [
    {
      day: isArabic ? "الاثنين" : "Monday",
      time: "12:00 PM – 2:00 PM",
      period: "afternoon",
    },
  ],
  "Dr. Mohamed El-Aggag": [
    {
      day: isArabic ? "الخميس" : "Thursday",
      time: "6:00 PM – 8:00 PM",
      period: "evening",
    },
  ],
  "Dr. Eman Abdel Salam": [
    {
      day: isArabic
        ? "الأحد – الثلاثاء – الخميس"
        : "Sunday – Tuesday – Thursday",
      time: "7:00 PM – 8:00 PM",
      period: "evening",
    },
  ],
  "Dr. Karim Elhamy": [
    {
      day: isArabic
        ? "السبت – الاثنين – الأربعاء"
        : "Saturday – Monday – Wednesday",
      time: "9:00 PM – 10:00 PM",
      period: "evening",
    },
  ],
  "Dr. Alaa Shebeeb": [
    {
      day: isArabic ? "السبت – الخميس" : "Saturday – Thursday",
      time: "5:30 PM – 8:00 PM",
      period: "evening",
    },
  ],
  "Dr. Mohamed Ghazi": [
    {
      day: isArabic ? "السبت – الخميس" : "Saturday – Thursday",
      time: "12:00 PM – 4:00 PM",
      period: "afternoon",
    },
  ],
  "Prof. Dr. Naglaa Ali": [
    {
      day: isArabic ? "السبت – الثلاثاء" : "Saturday – Tuesday",
      time: isArabic ? "بموعد مسبق" : "By Prior Appointment",
      period: "appointment",
    },
  ],
  "Dr. Walid Attia": [
    {
      day: isArabic ? "السبت - الخميس" : "Saturday - Thursday",
      time: "6:00 PM - 9:00 PM",
      period: "evening",
    },
  ],
  "Dr. Hisham Morsi": [
    {
      day: isArabic ? "السبت - الأربعاء" : "Saturday - Wednesday",
      time: "5:00 PM - 8:00 PM",
      period: "evening",
    },
  ],
  "Dr. Afaf Shaheen": [
    {
      day: isArabic ? "الأحد - الخميس" : "Sunday - Thursday",
      time: "6:00 PM - 9:00 PM",
      period: "evening",
    },
  ],
  "Dr. Nahed Mohamed": [
    {
      day: isArabic ? "الاثنين - الجمعة" : "Monday - Friday",
      time: "1:00 PM - 4:00 PM",
      period: "afternoon",
    },
  ],
  "Dr. Hassan Abdel Kader": [
    {
      day: isArabic ? "السبت - الخميس" : "Saturday - Thursday",
      time: "7:00 PM - 10:00 PM",
      period: "evening",
    },
  ],
  "Dr. Ahmed El-Nahhas": [
    {
      day: isArabic ? "الأحد - الخميس" : "Sunday - Thursday",
      time: "5:00 PM - 8:00 PM",
      period: "evening",
    },
  ],
  "Dr. Amira Shaheen": [
    {
      day: isArabic ? "الاثنين - الجمعة" : "Monday - Friday",
      time: "12:00 PM - 3:00 PM",
      period: "afternoon",
    },
  ],
  "Dr. Azza Abdel Wahab": [
    {
      day: isArabic ? "السبت - الأربعاء" : "Saturday - Wednesday",
      time: "9:00 AM - 12:00 PM",
      period: "morning",
    },
  ],
  "Dr. Abdel Rahman Metwally": [
    {
      day: isArabic ? "السبت - الخميس" : "Saturday - Thursday",
      time: "6:00 PM - 9:00 PM",
      period: "evening",
    },
  ],
  "Dr. Mohamed Nabil": [
    {
      day: isArabic ? "الأحد - الخميس" : "Sunday - Thursday",
      time: "1:00 PM - 4:00 PM",
      period: "afternoon",
    },
  ],
  "Dr. Ihab Raafat": [
    {
      day: isArabic ? "السبت - الأربعاء" : "Saturday - Wednesday",
      time: "5:00 PM - 8:00 PM",
      period: "evening",
    },
  ],
  "Dr. Ashraf Othman": [
    {
      day: isArabic ? "الاثنين - الجمعة" : "Monday - Friday",
      time: "12:00 PM - 3:00 PM",
      period: "afternoon",
    },
  ],
  "Dr. Ahmed Abdullah": [
    {
      day: isArabic ? "الأحد - الخميس" : "Sunday - Thursday",
      time: "6:00 PM - 9:00 PM",
      period: "evening",
    },
  ],
};

// Complete Specialty mapping
const specialtyMap = {
  "General Surgery": { value: "GeneralSurgery", ar: "جراحة عامة" },
  "Internal Medicine & Gastroenterology": {
    value: "InternalMedicineGastroenterology",
    ar: "الباطنة والجهاز الهضمي",
  },
  ENT: { value: "ENT", ar: "أنف وأذن وحنجرة" },
  "Chest & Allergy": { value: "ChestAllergy", ar: "صدر وحساسية" },
  "Orthopedics & Joints": { value: "OrthopedicsJoints", ar: "عظام ومفاصل" },
  Rheumatology: { value: "Rheumatology", ar: "روماتيزم" },
  Neurology: { value: "neurology", ar: "أعصاب" },
  "Vascular Surgery": { value: "VascularSurgery", ar: "جراحة الأوعية الدموية" },
  "OB/GYN": { value: "OB-GYN", ar: "نساء وتوليد" },
  Psychology: { value: "Psychology", ar: "طب نفسي" },
  Cardiology: { value: "Cardiology", ar: "قلب وأوعية دموية" },
  Urology: { value: "Urology", ar: "مسالك بولية" },
};

// Helper functions
function getSpecialtyDisplayName(key) {
  if (!specialtyMap[key]) return key;
  return isArabic ? specialtyMap[key].ar : key;
}

function getSpecialtyValue(key) {
  if (!specialtyMap[key]) return key;
  return specialtyMap[key].value;
}

function findSpecialtyByValue(value) {
  return Object.keys(specialtyMap).find(
    (key) => specialtyMap[key].value === value
  );
}

// Initialize when DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  let selectedSpecialty = "";
  let selectedDoctor = "";
  let selectedTime = "";
  let selectedTimeText = "";

  // Initialize UI texts
  initializeUITexts();

  // Initialize dropdowns
  updateDoctorDropdown("");
  updateTimeDropdown("", "");

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

      // Update available doctors and times
      updateDoctorDropdown(selectedSpecialty);
      updateTimeDropdown(selectedSpecialty, "");

      // Reset doctor and time selections
      document.querySelector("#doctorDropdown").textContent =
        translations.selectDoctor;
      document.querySelector("#timeDropdown").textContent =
        translations.selectTime;
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

    // Get all doctors for the selected specialty
    const doctors = getDoctorsBySpecialty(specialty);

    const doctorNames = new Set();
    doctors.forEach((doctor) => {
      if (doctor.name) doctorNames.add(doctor.name);
    });

    if (doctorNames.size === 0) {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.classList.add("dropdown-item", "text-muted");
      a.href = "#";
      a.textContent = isArabic ? "لا يوجد أطباء" : "No doctors available";
      a.style.pointerEvents = "none";
      li.appendChild(a);
      doctorDropdownMenu.appendChild(li);
    } else {
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
          document.querySelector("#timeDropdown").textContent =
            translations.selectTime;
          selectedTime = "";
          selectedTimeText = "";
        });
        li.appendChild(a);
        doctorDropdownMenu.appendChild(li);
      });
    }
  }

  // Get doctors by specialty
  function getDoctorsBySpecialty(specialty) {
    const specialtyDoctors = {
      GeneralSurgery: [
        { name: "Prof. Dr. Hany Eissa", specialty: "GeneralSurgery" },
      ],
      InternalMedicineGastroenterology: [
        {
          name: "Prof. Dr. Taha Abdel Hamid",
          specialty: "InternalMedicineGastroenterology",
        },
        {
          name: "Dr. Hisham Mahmoud",
          specialty: "InternalMedicineGastroenterology",
        },
        {
          name: "Dr. Essam Shalaby",
          specialty: "InternalMedicineGastroenterology",
        },
        {
          name: "Dr. Mahmoud Hassan",
          specialty: "InternalMedicineGastroenterology",
        },
      ],
      ENT: [
        { name: "Dr. Rafik El-Kady", specialty: "ENT" },
        { name: "Dr. Mohamed Hossam", specialty: "ENT" },
        { name: "Dr. Rowan", specialty: "ENT" },
        { name: "Dr. Mohamed El-Aggag", specialty: "ENT" },
      ],
      ChestAllergy: [
        { name: "Dr. Eman Abdel Salam", specialty: "ChestAllergy" },
        { name: "Dr. Karim Elhamy", specialty: "ChestAllergy" },
      ],
      OrthopedicsJoints: [
        { name: "Dr. Alaa Shebeeb", specialty: "OrthopedicsJoints" },
        { name: "Dr. Mohamed Ghazi", specialty: "OrthopedicsJoints" },
      ],
      Rheumatology: [
        { name: "Prof. Dr. Naglaa Ali", specialty: "Rheumatology" },
      ],
      neurology: [{ name: "Dr. Walid Attia", specialty: "neurology" }],
      "OB-GYN": [
        { name: "Dr. Hisham Morsi", specialty: "OB-GYN" },
        { name: "Dr. Afaf Shaheen", specialty: "OB-GYN" },
        { name: "Dr. Nahed Mohamed", specialty: "OB-GYN" },
        { name: "Dr. Hassan Abdel Kader", specialty: "OB-GYN" },
      ],
      Psychology: [
        { name: "Dr. Ahmed El-Nahhas", specialty: "Psychology" },
        { name: "Dr. Amira Shaheen", specialty: "Psychology" },
        { name: "Dr. Azza Abdel Wahab", specialty: "Psychology" },
      ],
      Cardiology: [
        { name: "Dr. Abdel Rahman Metwally", specialty: "Cardiology" },
        { name: "Dr. Mohamed Nabil", specialty: "Cardiology" },
      ],
      Urology: [
        { name: "Dr. Ihab Raafat", specialty: "Urology" },
        { name: "Dr. Ashraf Othman", specialty: "Urology" },
        { name: "Dr. Ahmed Abdullah", specialty: "Urology" },
      ],
    };

    if (!specialty) {
      // Return all doctors if no specialty selected
      return Object.values(specialtyDoctors).flat();
    }

    return specialtyDoctors[specialty] || [];
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
      const doctors = getDoctorsBySpecialty(specialty);
      doctors.forEach((doc) => {
        const schedules = doctorSchedules[doc.name] || [];
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

    if (availableTimes.size === 0) {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.classList.add("dropdown-item", "text-muted");
      a.href = "#";
      a.textContent = isArabic ? "لا يوجد أوقات متاحة" : "No available times";
      a.style.pointerEvents = "none";
      li.appendChild(a);
      timeDropdownMenu.appendChild(li);
    } else {
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
  }

  // Search button functionality - Show appointment form
  document.getElementById("searchBtn").addEventListener("click", function () {
    if (!selectedSpecialty) {
      Swal.fire({
        icon: "warning",
        title: translations.missingSelection,
        text: translations.selectSpecialtyFirst,
        confirmButtonColor: "#3085d6",
      });
      return;
    }

    // Show appointment form
    const userInfoForm = document.getElementById("userInfoForm");
    const summaryDetails = document.getElementById("summaryDetails");

    // Get specialty name
    const specialtyKey = findSpecialtyByValue(selectedSpecialty);
    const specialtyName = getSpecialtyDisplayName(specialtyKey);

    // Build summary
    let summaryHTML = `<h5>${translations.appointmentDetails}</h5>`;
    summaryHTML += `<p><strong>${translations.specialty}:</strong> ${specialtyName}</p>`;
    if (selectedDoctor) {
      summaryHTML += `<p><strong>${translations.doctor}:</strong> ${selectedDoctor}</p>`;
    }
    if (selectedTimeText) {
      summaryHTML += `<p><strong>${translations.time}:</strong> ${selectedTimeText}</p>`;
    }

    summaryDetails.innerHTML = summaryHTML;
    userInfoForm.style.display = "block";

    // Scroll to form
    userInfoForm.scrollIntoView({ behavior: "smooth", block: "center" });
  });

  // Initialize UI texts function
  function initializeUITexts() {
    // Update dropdown buttons
    document.querySelector("#departmentDropdown").textContent =
      translations.selectSpecialty;
    document.querySelector("#doctorDropdown").textContent =
      translations.selectDoctor;
    document.querySelector("#timeDropdown").textContent =
      translations.selectTime;
    document.querySelector("#searchBtn").textContent = translations.search;

    // Update form labels and placeholders
    const nameLabel = document.querySelector('label[for="userName"]');
    const phoneLabel = document.querySelector('label[for="userPhone"]');
    const submitBtn = document.querySelector(".submit-btn");

    if (nameLabel) nameLabel.textContent = translations.fullName;
    if (phoneLabel) phoneLabel.textContent = translations.phoneNumber;
    if (submitBtn) submitBtn.textContent = translations.submit;

    const nameInput = document.getElementById("userName");
    const phoneInput = document.getElementById("userPhone");

    if (nameInput) nameInput.placeholder = translations.enterFullName;
    if (phoneInput) phoneInput.placeholder = translations.enterPhoneNumber;

    // Hide form initially
    document.getElementById("userInfoForm").style.display = "none";
  }

  // Form submission handler
  const appointmentForm = document.getElementById("appointmentForm");
  if (appointmentForm) {
    appointmentForm.addEventListener("submit", async function (e) {
      e.preventDefault();

      const userName = document.getElementById("userName").value.trim();
      const userPhone = document.getElementById("userPhone").value.trim();

      // Validation
      if (!userName || !userPhone) {
        Swal.fire({
          icon: "error",
          title: translations.incompleteForm,
          text: translations.fillAllFields,
          confirmButtonColor: "#d33",
        });
        return;
      }

      // Get specialty name
      const specialtyKey = findSpecialtyByValue(selectedSpecialty);
      const specialtyName = getSpecialtyDisplayName(specialtyKey);

      // Show loading state
      const submitBtn = appointmentForm.querySelector(".submit-btn");
      const originalBtnText = submitBtn.textContent;
      submitBtn.textContent = translations.submitting;
      submitBtn.disabled = true;

      try {
        // Prepare data for Google Sheets
        const formData = {
          name: userName,
          phone: userPhone,
          specialty: specialtyName || "",
          doctor: selectedDoctor || "",
          time: selectedTimeText || "",
          source: "home_page",
        };

        console.log("Sending data:", formData);
        const GOOGLE_SHEETS_WEB_APP_URL = `https://script.google.com/macros/s/AKfycbz0cQEDpNCpuMseCER-Q2aHOAvzi7Fds84AyqejbpDr9ITZiiek2PmriArIUJzX0ZASCQ/exec`;

        // Send to Google Sheets
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
            title: translations.appointmentBooked,
            html: `
            <div style="text-align: ${
              isArabic ? "right" : "left"
            }; padding: 10px;">
              <p><strong>${translations.name}:</strong> ${userName}</p>
              <p><strong>${translations.phoneNumber}:</strong> ${userPhone}</p>
              <p><strong>${
                translations.specialty
              }:</strong> ${specialtyName}</p>
              ${
                selectedDoctor
                  ? `<p><strong>${translations.doctor}:</strong> ${selectedDoctor}</p>`
                  : ""
              }
              ${
                selectedTimeText
                  ? `<p><strong>${translations.time}:</strong> ${selectedTimeText}</p>`
                  : ""
              }
            </div>
            <p style="margin-top: 15px;">${translations.contactShortly}</p>
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
          title: translations.submissionIssue,
          html: `
          <div style="text-align: ${
            isArabic ? "right" : "left"
          }; padding: 10px;">
            <p><strong>${translations.appointmentReceived}</strong></p>
            <p>${translations.temporaryIssue}</p>
            <p><strong>${translations.detailsWeHave}:</strong></p>
            <p>${translations.name}: ${userName}</p>
            <p>${translations.phoneNumber}: ${userPhone}</p>
            <p>${translations.specialty}: ${specialtyName}</p>
            ${
              selectedDoctor
                ? `<p>${translations.doctor}: ${selectedDoctor}</p>`
                : ""
            }
            ${
              selectedTimeText
                ? `<p>${translations.time}: ${selectedTimeText}</p>`
                : ""
            }
          </div>
          <p style="margin-top: 15px;">${translations.willContactConfirm}</p>
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
  }

  function resetForm() {
    if (appointmentForm) {
      appointmentForm.reset();
    }
    document.getElementById("userInfoForm").style.display = "none";

    // Reset selections
    selectedSpecialty = "";
    selectedDoctor = "";
    selectedTime = "";
    selectedTimeText = "";

    // Reset dropdowns
    document.querySelector("#departmentDropdown").textContent =
      translations.selectSpecialty;
    document.querySelector("#doctorDropdown").textContent =
      translations.selectDoctor;
    document.querySelector("#timeDropdown").textContent =
      translations.selectTime;
  }
});
