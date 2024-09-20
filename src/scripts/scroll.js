const navDoctor = document.getElementById("nav-doctor");
const navServices = document.getElementById("nav-services");
const navTreatment = document.getElementById("nav-treatment");
const navSertificate = document.getElementById("nav-sertificate");
const navFeedback = document.getElementById("nav-feedback");
const navContact = document.getElementById("contact");
const doctor = document.getElementById("about-me");
const services = document.getElementById("services");
const treatment = document.getElementById("treatment");
const certificates = document.getElementById("certificates");
const feedback = document.getElementById("feedback");
const contacts = document.getElementById("contacts");
const arrow = document.getElementById("arrow-top")

navDoctor.addEventListener("click", e => {
    doctor.scrollIntoView({
        block: "start",
        behavior: "smooth",
    });
});

navServices.addEventListener("click", e => {
    services.scrollIntoView({
        block: "start",
        behavior: "smooth",
    });
});

navTreatment.addEventListener("click", e => {
    treatment.scrollIntoView({
        block: "start",
        behavior: "smooth",
    });
});

navSertificate.addEventListener("click", e => {
    certificates.scrollIntoView({
        block: "start",
        behavior: "smooth",
    });
});

navFeedback.addEventListener("click", e => {
    feedback.scrollIntoView({
        block: "start",
        behavior: "smooth",
    });
});

navContact.addEventListener("click", e => {
    contacts.scrollIntoView({
        block: "start",
        behavior: "smooth",
    });
});

arrow.addEventListener("click", e => {
    navDoctor.scrollIntoView({
        block: "center",
        behavior: "smooth",
    })
})