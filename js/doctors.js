// doctors.js - Enhanced filtering and booking system with Arabic support

// Detect language from HTML tag
const isArabic =
  document.documentElement.lang === "ar" ||
  document.documentElement.dir === "rtl";

// Arabic translations
const translations = {
  // UI Text
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
};

// Doctor schedules database with Arabic support

const doctorSchedules = {
  // General Surgery
  "Prof. Dr. Hany Eissa": [
    {
      day: isArabic ? "السبت - الخميس" : "Saturday - Thursday",
      time: "8:00 PM – 10:00 PM",
      period: "evening",
    },
  ],

  // Internal Medicine & Gastroenterology
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
      time: "7:00 PM – 9:00 PM",
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

  // ENT
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

  // Chest & Allergy
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

  // Orthopedics & Joints
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

  // Rheumatology & Immunological Diseases
  "Prof. Dr. Naglaa Ali": [
    {
      day: isArabic ? "السبت – الثلاثاء" : "Saturday – Tuesday",
      time: isArabic ? "بموعد مسبق" : "By Prior Appointment",
      period: "appointment",
    },
  ],

  // Neurology
  "Dr. Walid Attia": [
    {
      day: isArabic ? "السبت - الأربعاء" : "Saturday - Wednesday",
      time: isArabic ? "بموعد مسبق" : "By Prior Appointment",
      period: "appointment",
    },
  ],

  // Vascular Surgery
  "Dr. Ihab Abdel Aziz": [
    {
      day: isArabic ? "السبت - الخميس" : "Saturday - Thursday",
      time: isArabic ? "بموعد مسبق" : "By Prior Appointment",
      period: "appointment",
    },
  ],

  // OB/GYN
  "Dr. Hisham Morsi": [
    {
      day: isArabic ? "الأحد - الأربعاء" : "Sunday - Wednesday",
      time: isArabic ? "بموعد مسبق" : "By Prior Appointment",
      period: "appointment",
    },
  ],
  "Dr. Afaf Shaheen": [
    {
      day: isArabic ? "الخميس - السبت" : "Thursday - Saturday",
      time: isArabic ? "بموعد مسبق" : "By Prior Appointment",
      period: "appointment",
    },
  ],
  "Dr. Nahed Mohamed": [
    {
      day: isArabic ? "الأحد - الأربعاء" : "Sunday - Wednesday",
      time: isArabic ? "بموعد مسبق" : "By Prior Appointment",
      period: "appointment",
    },
  ],
  "Dr. Hassan Abdel Kader": [
    {
      day: isArabic ? "الاثنين - الأربعاء" : "Monday - Wednesday",
      time: isArabic ? "بموعد مسبق" : "By Prior Appointment",
      period: "appointment",
    },
  ],

  // Psychology
  "Dr. Ahmed El-Nahhas": [
    {
      day: isArabic ? "الأحد – الثلاثاء" : "Sunday – Tuesday",
      time: isArabic ? "بموعد مسبق" : "By Prior Appointment",
      period: "appointment",
    },
  ],
  "Dr. Amira Shaheen": [
    {
      day: isArabic ? "السبت – الأربعاء" : "Saturday – Wednesday",
      time: isArabic ? "بموعد مسبق" : "By Prior Appointment",
      period: "appointment",
    },
  ],
  "Dr. Azza Abdel Wahab": [
    {
      day: isArabic
        ? "الأحد – الثلاثاء – الخميس"
        : "Sunday – Tuesday – Thursday",
      time: isArabic ? "بموعد مسبق" : "By Prior Appointment",
      period: "appointment",
    },
  ],

  // Cardiology & Vascular Diseases
  "Dr. Abdel Rahman Metwally": [
    {
      day: isArabic ? "بموعد مسبق" : "By Prior Appointment",
      time: isArabic ? "بموعد مسبق" : "By Prior Appointment",
      period: "appointment",
    },
  ],
  "Dr. Mohamed Nabil": [
    {
      day: isArabic ? "بموعد مسبق" : "By Prior Appointment",
      time: isArabic ? "بموعد مسبق" : "By Prior Appointment",
      period: "appointment",
    },
  ],

  // Urology
  "Dr. Ihab Raafat": [
    {
      day: isArabic
        ? "الاثنين – الخميس – الجمعة"
        : "Monday – Thursday – Friday",
      time: isArabic ? "بموعد مسبق" : "By Prior Appointment",
      period: "appointment",
    },
  ],
  "Dr. Ashraf Othman": [
    {
      day: isArabic ? "الأحد" : "Sunday",
      time: "5:00 PM – 7:00 PM",
      period: "evening",
    },
    {
      day: isArabic ? "الخميس" : "Thursday",
      time: "4:00 PM – 6:00 PM",
      period: "afternoon",
    },
  ],
  "Dr. Ahmed Abdullah": [
    {
      day: isArabic ? "الاثنين – الخميس" : "Monday – Thursday",
      time: "5:00 PM – 7:00 PM",
      period: "evening",
    },
  ],

  // Clinical Nutrition
  "Dr. Shereen Eissa": [
    {
      day: isArabic
        ? "الأحد – الثلاثاء – الخميس"
        : "Sunday – Tuesday – Thursday",
      time: "4:00 PM – 7:00 PM",
      period: "afternoon",
    },
  ],

  // Dermatology & Andrology
  "Dr. Saad Mounir": [
    {
      day: isArabic ? "السبت - الأربعاء" : "Saturday - Wednesday",
      time: "8:00 PM – 10:00 PM",
      period: "evening",
    },
  ],
  "Dr. Haitham Sirag": [
    {
      day: isArabic ? "السبت - الخميس" : "Saturday - Thursday",
      time: "7:00 PM – 9:00 PM",
      period: "evening",
    },
  ],
};

// Updated Specialty to specialty value mapping with Arabic names
const specialtyMap = {
  "General Surgery": {
    value: "GeneralSurgery",
    ar: "جراحة عامة",
  },
  "Internal Medicine & Gastroenterology": {
    value: "InternalMedicineGastroenterology",
    ar: "الباطنة والجهاز الهضمي",
  },
  ENT: {
    value: "ENT",
    ar: "أنف وأذن وحنجرة",
  },
  "Chest & Allergy": {
    value: "ChestAllergy",
    ar: "صدر وحساسية",
  },
  "Orthopedics & Joints": {
    value: "OrthopedicsJoints",
    ar: "عظام ومفاصل",
  },
  "Rheumatology & Immunological Diseases": {
    value: "RheumatologyImmunological",
    ar: "روماتيزم وأمراض المناعة",
  },
  Neurology: {
    value: "Neurology",
    ar: "أعصاب",
  },
  "Vascular Surgery": {
    value: "VascularSurgery",
    ar: "جراحة الأوعية الدموية",
  },
  "OB/GYN": {
    value: "OB-GYN",
    ar: "نساء وتوليد",
  },
  Psychology: {
    value: "Psychology",
    ar: "طب نفسي",
  },
  "Cardiology & Vascular Diseases": {
    value: "CardiologyVascular",
    ar: "قلب وأوعية دموية",
  },
  Urology: {
    value: "Urology",
    ar: "مسالك بولية",
  },
  "Clinical Nutrition": {
    value: "ClinicalNutrition",
    ar: "تغذية علاجية",
  },
  "Dermatology & Andrology": {
    value: "DermatologyAndrology",
    ar: "جلدية وتناسلية",
  },
};

// Helper function to get specialty display name
function getSpecialtyDisplayName(key) {
  if (!specialtyMap[key]) return key;
  return isArabic ? specialtyMap[key].ar : key;
}

// Helper function to get specialty value
function getSpecialtyValue(key) {
  if (!specialtyMap[key]) return key;
  return specialtyMap[key].value;
}

// Helper function to find specialty by value
function findSpecialtyByValue(value) {
  return Object.keys(specialtyMap).find(
    (key) => specialtyMap[key].value === value
  );
}

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

document.addEventListener("DOMContentLoaded", function () {
  let mixer;
  let selectedSpecialty = "";
  let selectedDoctor = "";
  let selectedTime = "";
  let selectedTimeText = "";

  // Initialize UI texts
  initializeUITexts();

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
      const specialtyKey = findSpecialtyByValue(selectedSpecialty);
      const specialtyName = getSpecialtyDisplayName(specialtyKey);
      document.querySelector("#departmentDropdown").textContent =
        specialtyName || translations.selectSpecialty;

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
        document.querySelector("#timeDropdown").textContent =
          translations.selectTime;
        selectedTime = "";
        selectedTimeText = "";
      });
      li.appendChild(a);
      doctorDropdownMenu.appendChild(li);
    });
  }

  // Update time dropdown based on selected specialty and doctor
  // Update time dropdown based on selected specialty and doctor
  function updateTimeDropdown(specialty, doctor) {
    const timeDropdownMenu = document.querySelector(
      "#timeDropdown + .dropdown-menu"
    );
    timeDropdownMenu.innerHTML = "";

    const availableTimes = new Set();

    // Map Arabic doctor names to English for schedule lookup
    const doctorNameMap = {
      "أ.د/ هاني عيسى": "Prof. Dr. Hany Eissa",
      "أ.د/ طه عبد الحميد": "Prof. Dr. Taha Abdel Hamid",
      "د/ هشام محمود": "Dr. Hisham Mahmoud",
      "د/ عصام شلبي": "Dr. Essam Shalaby",
      "د/ محمود حسن": "Dr. Mahmoud Hassan",
      "د/ رفيق القاضي": "Dr. Rafik El-Kady",
      "د/ محمد حسام": "Dr. Mohamed Hossam",
      "د/ روان": "Dr. Rowan",
      "د/ محمد العجاج": "Dr. Mohamed El-Aggag",
      "د/ إيمان عبد السلام": "Dr. Eman Abdel Salam",
      "د/ كريم الهمي": "Dr. Karim Elhamy",
      "د/ علاء شبيب": "Dr. Alaa Shebeeb",
      "د/ محمد غازي": "Dr. Mohamed Ghazi",
      "أ.د/ نجلاء علي": "Prof. Dr. Naglaa Ali",
      "د/ وليد عطية": "Dr. Walid Attia",
      "د/ هشام مرسي": "Dr. Hisham Morsi",
      "د/ عفاف شاهين": "Dr. Afaf Shaheen",
      "د/ ناهد محمد": "Dr. Nahed Mohamed",
      "د/ حسن عبد القادر": "Dr. Hassan Abdel Kader",
      "د/ أحمد النحاس": "Dr. Ahmed El-Nahhas",
      "د/ أميرة شاهين": "Dr. Amira Shaheen",
      "د/ عزة عبد الوهاب": "Dr. Azza Abdel Wahab",
      "د/ عبد الرحمن متولي": "Dr. Abdel Rahman Metwally",
      "د/ محمد نبيل": "Dr. Mohamed Nabil",
      "د/ إيهاب رأفت": "Dr. Ihab Raafat",
      "د/ أشرف عثمان": "Dr. Ashraf Othman",
      "د/ أحمد عبد الله": "Dr. Ahmed Abdullah",
      "د/ شيرين عيسى": "Dr. Shereen Eissa",
      "د/ سعد منير": "Dr. Saad Mounir",
      "د/ هيثم سراج": "Dr. Haitham Sirag",
    };

    if (doctor) {
      // Convert Arabic doctor name to English for schedule lookup
      const englishDoctorName = doctorNameMap[doctor] || doctor;

      // Show times for specific doctor
      const schedules = doctorSchedules[englishDoctorName] || [];
      schedules.forEach((schedule) => {
        // Translate day names to Arabic if needed
        let displayDay = schedule.day;
        if (isArabic) {
          // Convert English day names to Arabic
          const dayMap = {
            Saturday: "السبت",
            Sunday: "الأحد",
            Monday: "الاثنين",
            Tuesday: "الثلاثاء",
            Wednesday: "الأربعاء",
            Thursday: "الخميس",
            Friday: "الجمعة",
            "Saturday - Thursday": "السبت - الخميس",
            "Sunday – Tuesday": "الأحد – الثلاثاء",
            "Saturday – Monday – Wednesday": "السبت – الاثنين – الأربعاء",
            "Sunday – Tuesday – Thursday": "الأحد – الثلاثاء – الخميس",
            "Saturday – Thursday": "السبت – الخميس",
            "Monday – Thursday – Friday": "الاثنين – الخميس – الجمعة",
            "Sunday - Wednesday": "الأحد - الأربعاء",
            "Thursday - Saturday": "الخميس - السبت",
            "Monday - Wednesday": "الاثنين - الأربعاء",
            "Saturday – Wednesday": "السبت – الأربعاء",
          };
          displayDay = dayMap[schedule.day] || schedule.day;
        }

        const displayText = `${displayDay} (${schedule.time})`;
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
        const arabicDoctorName = doc.getAttribute("data-doctor");
        const englishDoctorName =
          doctorNameMap[arabicDoctorName] || arabicDoctorName;
        const schedules = doctorSchedules[englishDoctorName] || [];
        schedules.forEach((schedule) => {
          let displayDay = schedule.day;
          if (isArabic) {
            const dayMap = {
              Saturday: "السبت",
              Sunday: "الأحد",
              Monday: "الاثنين",
              Tuesday: "الثلاثاء",
              Wednesday: "الأربعاء",
              Thursday: "الخميس",
              Friday: "الجمعة",
              "Saturday - Thursday": "السبت - الخميس",
              "Sunday – Tuesday": "الأحد – الثلاثاء",
              "Saturday – Monday – Wednesday": "السبت – الاثنين – الأربعاء",
              "Sunday – Tuesday – Thursday": "الأحد – الثلاثاء – الخميس",
              "Saturday – Thursday": "السبت – الخميس",
              "Monday – Thursday – Friday": "الاثنين – الخميس – الجمعة",
              "Sunday - Wednesday": "الأحد - الأربعاء",
              "Thursday - Saturday": "الخميس - السبت",
              "Monday - Wednesday": "الاثنين - الأربعاء",
              "Saturday – Wednesday": "السبت – الأربعاء",
            };
            displayDay = dayMap[schedule.day] || schedule.day;
          }

          const displayText = `${displayDay} (${schedule.time})`;
          availableTimes.add(
            JSON.stringify({
              text: displayText,
              value: schedule.period,
            })
          );
        });
      });
    } else {
      // Show all times (this case shouldn't happen in normal flow)
      Object.values(doctorSchedules)
        .flat()
        .forEach((schedule) => {
          let displayDay = schedule.day;
          if (isArabic) {
            const dayMap = {
              Saturday: "السبت",
              Sunday: "الأحد",
              Monday: "الاثنين",
              Tuesday: "الثلاثاء",
              Wednesday: "الأربعاء",
              Thursday: "الخميس",
              Friday: "الجمعة",
              "Saturday - Thursday": "السبت - الخميس",
              "Sunday – Tuesday": "الأحد – الثلاثاء",
              "Saturday – Monday – Wednesday": "السبت – الاثنين – الأربعاء",
              "Sunday – Tuesday – Thursday": "الأحد – الثلاثاء – الخميس",
              "Saturday – Thursday": "السبت – الخميس",
              "Monday – Thursday – Friday": "الاثنين – الخميس – الجمعة",
              "Sunday - Wednesday": "الأحد - الأربعاء",
              "Thursday - Saturday": "الخميس - السبت",
              "Monday - Wednesday": "الاثنين - الأربعاء",
              "Saturday – Wednesday": "السبت – الأربعاء",
            };
            displayDay = dayMap[schedule.day] || schedule.day;
          }

          const displayText = `${displayDay} (${schedule.time})`;
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

    // If no times available, show message
    if (availableTimes.size === 0) {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.classList.add("dropdown-item");
      a.href = "#";
      a.textContent = isArabic ? "لا توجد أوقات متاحة" : "No available times";
      a.style.color = "#6c757d";
      a.style.cursor = "not-allowed";
      li.appendChild(a);
      timeDropdownMenu.appendChild(li);
    }
  }

  // Initialize dropdowns
  updateDoctorDropdown("");
  updateTimeDropdown("", "");

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
  }

  // Form submission handler
  const appointmentForm = document.getElementById("appointmentForm");
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
          title: translations.appointmentBooked,
          html: `
          <div style="text-align: ${
            isArabic ? "right" : "left"
          }; padding: 10px;">
            <p><strong>${translations.name}:</strong> ${userName}</p>
            <p><strong>${translations.phoneNumber}:</strong> ${userPhone}</p>
            <p><strong>${translations.specialty}:</strong> ${specialtyName}</p>
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
        <div style="text-align: ${isArabic ? "right" : "left"}; padding: 10px;">
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
      translations.selectSpecialty;
    document.querySelector("#doctorDropdown").textContent =
      translations.selectDoctor;
    document.querySelector("#timeDropdown").textContent =
      translations.selectTime;

    // Remove active filter buttons
    filterButtons.forEach((btn) => btn.classList.remove("active"));

    // Show all doctors
    mixer.filter("all");
  }
});
