import {
  doctor,
  services,
  treatment,
  certificates,
  feedback,
  contacts,
} from "./scroll.js";

const logo = document.getElementById("logo");
const menu = document.getElementById("header__burger");
const popUp = document.getElementById("pop-up");
const burgerDoctor = document.getElementById("burger__doctor");
const burgerServices = document.getElementById("burger__services");
const burgerTreatment = document.getElementById("burger__treatment");
const burgerSertificate = document.getElementById("burger__sertificate");
const burgerFeedback = document.getElementById("burger__feedback");
const burgerContact = document.getElementById("burger-contact");

menu.addEventListener("click", () => {
  menu.classList.toggle("burger__inactive");
  menu.classList.toggle("burger__active");
  popUp.classList.toggle("pop-up-inactive");
});

logo.addEventListener("click", () => {
  popUp.classList.add("pop-up-inactive");
});

function closeMenu() {
  menu.classList.toggle("burger__inactive");
  menu.classList.toggle("burger__active");
  popUp.classList.toggle("pop-up-inactive");
};

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
})
