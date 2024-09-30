const images = [
  "assets/images/certificates/certificate_1.jpg",
  "assets/images/certificates/certificate_2.jpg",
  "assets/images/certificates/certificate_3.jpg",
  "assets/images/certificates/certificate_4.jpg",
  "assets/images/certificates/certificate_5.jpg",
  "assets/images/certificates/certificate_6.jpg",
  "assets/images/certificates/certificate_7.jpg",
  "assets/images/certificates/certificate_8.jpg",
  "assets/images/certificates/certificate_9.jpg",
  "assets/images/certificates/certificate_10.jpg",
];

let currentIndex = 0;

function updateImage() {
  const mainImage = document.getElementById("certificate-image");
  mainImage.style.opacity = 0;
  setTimeout(() => {
    mainImage.src = images[currentIndex];
    mainImage.onload = () => {
      mainImage.style.opacity = 1;
    };
  }, 300);
}

document.getElementById("prevBtnCertificate").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateImage();
});

document.getElementById("nextBtnCertificate").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  updateImage();
});
