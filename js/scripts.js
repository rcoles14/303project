const closeModal = () => {
  console.log("DJDJDJD");
  const modal_bg = document.querySelector(".modal_bg");
  console.log(modal_bg);
  const modal = document.querySelector(".modal");

  modal_bg.style.display = "none";
  modal.style.display = "none";
};

// cancel appointment
const cancelModal = () => {
  swal("Hello world!");
  closeModal();
};

// This checks if a user has an appoinment
// if so, show that he/she has an appointment
// otherwise, change the calendar icon's color more lightly & replace the text with "You have no appointment"
// This variable will be assigned a boolean value after checking this user's info in our database
let haveAppointment = true;

// First, we need to get the current user's info from database
let appointment_info = {
  user_name: "Henry Cho",
  BYU_ID: "99-999-9999",
  date: "11/11/2021",
  time: "10:00 A.M.",
  doctor: "Smith",
  department: "Internal Medicine",
  symptom: "coughing",
};

function popModal(e) {
  const modal_bg = document.querySelector(".modal_bg");
  const modal = document.querySelector(".modal");
  const nav = document.querySelector(".navbar");
  const navHeight = nav.getBoundingClientRect().height;
  const body = document.querySelector(".body");
  const bodyHeight = body.getBoundingClientRect().height;
  const restHeight = bodyHeight - navHeight;

  const app_title = document.querySelector(".app_title");
  const app_date = document.querySelector(".app_date");
  const app_time = document.querySelector(".app_time");
  const byu_id = document.querySelector(".byuID");
  const app_doctor = document.querySelector(".app_doctor");
  const app_location = document.querySelector(".app_department");
  const symptom = document.querySelector(".symptom");

  app_title.innerHTML = `${appointment_info.user_name}'s Appointment`;
  app_date.innerHTML = `Appointment Date: <b>${appointment_info.date}</b>`;
  app_time.innerHTML = `Appointment Time: <b>${appointment_info.time}</b>`;
  byu_id.innerHTML = `Your BYU ID: <b>${appointment_info.BYU_ID}</b>`;
  app_doctor.innerHTML = `Name of Doctor: <b>Dr. ${appointment_info.doctor}</b>`;
  app_location.innerHTML = `Department: <b>${appointment_info.department}</b>`;
  symptom.innerHTML = `Symptom you have: <b>${appointment_info.symptom}</b>`;

  modal_bg.style.height = `${restHeight}px`;
  modal_bg.style.display = "block";
  modal.style.display = "block";
}

const updateApp = () => {
  const app_title = document.querySelector(".app_title");
  const app_date = document.querySelector(".app_date");
  const app_time = document.querySelector(".app_time");
  const symptom = document.querySelector(".symptom");

  app_title.innerHTML = `${appointment_info.user_name}'s Update`;
  app_date.innerHTML = `Appointment Date: <input type="date" placeholder=${appointment_info.date}>`;
  app_time.innerHTML = `Appointment Time: <input type="text" placeholder=${appointment_info.time}>`;
  symptom.innerHTML = `Symptom you have: <input type="text" placeholder=${appointment_info.symptom}>`;
};

const showMain = () => {
  const calendarIcon = document.querySelector("#calendar");
  const calendarTitle = document.querySelector(".calendar_title");
  const calendarDescription = document.querySelector("#calendar_description");
  if (haveAppointment === false) {
    calendarIcon.style.color = "gray";
    calendarIcon.style.pointerEvents = "none";
    calendarTitle.innerHTML = "Appointment";
    calendarDescription.innerHTML = "No appointment made";
    return;
  }
};
