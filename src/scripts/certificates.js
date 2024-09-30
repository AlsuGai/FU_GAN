import certificate1 from "/assets/images/certificate/certificate_1.jpg";
import certificate2 from "/assets/images/certificate/certificate_2.jpg";
import certificate3 from "/assets/images/certificate/certificate_3.jpg";
import certificate4 from "/assets/images/certificate/certificate_4.jpg";
import certificate5 from "/assets/images/certificate/certificate_5.jpg";
import certificate6 from "/assets/images/certificate/certificate_6.jpg";
import certificate7 from "/assets/images/certificate/certificate_7.jpg";
import certificate8 from "/assets/images/certificate/certificate_8.jpg";
import certificate9 from "/assets/images/certificate/certificate_9.jpg";
import certificate10 from "/assets/images/certificate/certificate_10.jpg";

const certificate = [
  certificate1,
  certificate2,
  certificate3,
  certificate4,
  certificate5,
  certificate6,
  certificate7,
  certificate8,
  certificate9,
  certificate10,
];
let currentIndex = 0;

function updateImage(index) {
  const mainImage = document.getElementById("certificate-image");
  mainImage.style.opacity = 0;
  setTimeout(() => {
    mainImage.src = certificate[index];
    mainImage.onload = () => {
      mainImage.style.opacity = 1;
    };
  }, 300);
}
updateImage(currentIndex);

document.getElementById("prevBtnCertificate").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + certificate.length) % certificate.length;
  updateImage();
});

document.getElementById("nextBtnCertificate").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % certificate.length;
  updateImage(currentIndex);
});
