const navDoctor = document.getElementById("nav-doctor");
const navServices = document.getElementById("nav-services");
const navTreatment = document.getElementById("nav-treatment");
const navSertificate = document.getElementById("nav-sertificate");
const navFeedback = document.getElementById("nav-feedback");
const navContact = document.getElementById("contact");
export const doctor = document.getElementById("about-container");
export const services = document.getElementById("services");
export const treatment = document.getElementById("treatment");
export const certificates = document.getElementById("certificates");
export const feedback = document.getElementById("feedback");
export const contacts = document.getElementById("contacts");
const arrow = document.getElementById("arrow-top");
const logo = document.getElementById("logo");

navDoctor.addEventListener("click", (e) => {
  doctor.scrollIntoView({
    block: "start",
    behavior: "smooth",
  });
});

navServices.addEventListener("click", (e) => {
  services.scrollIntoView({
    block: "start",
    behavior: "smooth",
  });
});

navTreatment.addEventListener("click", (e) => {
  treatment.scrollIntoView({
    block: "start",
    behavior: "smooth",
  });
});

navSertificate.addEventListener("click", (e) => {
  certificates.scrollIntoView({
    block: "start",
    behavior: "smooth",
  });
});

navFeedback.addEventListener("click", (e) => {
  feedback.scrollIntoView({
    block: "start",
    behavior: "smooth",
  });
});

navContact.addEventListener("click", (e) => {
  contacts.scrollIntoView({
    block: "start",
    behavior: "smooth",
  });
});

arrow.addEventListener("click", (e) => {
  doctor.scrollIntoView({
    block: "start",
    behavior: "smooth",
  });
});

logo.addEventListener("click", (e) => {
  doctor.scrollIntoView({
    block: "start",
    behavior: "smooth",
  });
});
