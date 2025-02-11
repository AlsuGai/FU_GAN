import {
  doctor,
  services,
  treatment,
  certificates,
  feedback,
  contacts,
} from "./scroll.js";

const menu = document.getElementById("header__burger");
const popUp = document.getElementById("pop-up");
const burgerDoctor = document.getElementById("burger__doctor");
const burgerServices = document.getElementById("burger__services");
const burgerTreatment = document.getElementById("burger__treatment");
const burgerSertificate = document.getElementById("burger__sertificate");
const burgerFeedback = document.getElementById("burger__feedback");
const burgerContact = document.getElementById("burger-contact");
const body = document.getElementById("body");

function closeMenu() {
  menu.classList.toggle("open");
  popUp.classList.toggle("pop_up-inactive");
  body.classList.toggle("overlay");
}

menu.addEventListener("click", () => {
  closeMenu();
});

burgerDoctor.addEventListener("click", () => {
  closeMenu();
  doctor.scrollIntoView({
    block: "start",
    behavior: "auto",
  });
});

burgerServices.addEventListener("click", () => {
  closeMenu();
  services.scrollIntoView({
    block: "start",
    behavior: "auto",
  });
});

burgerTreatment.addEventListener("click", () => {
  closeMenu();
  treatment.scrollIntoView({
    block: "start",
    behavior: "auto",
  });
});

burgerSertificate.addEventListener("click", () => {
  closeMenu();
  certificates.scrollIntoView({
    block: "start",
    behavior: "auto",
  });
});

burgerFeedback.addEventListener("click", () => {
  closeMenu();
  feedback.scrollIntoView({
    block: "start",
    behavior: "auto",
  });
});

burgerContact.addEventListener("click", () => {
  closeMenu();
  contacts.scrollIntoView({
    block: "start",
    behavior: "auto",
  });
});
