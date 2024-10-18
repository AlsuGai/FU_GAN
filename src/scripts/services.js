import ilgotherapy from "/assets/images/services/ilgotherapy.jpg";
import manualTherapy from "/assets/images/services/manual-therapy.jpg";
import auriculotherapy from "/assets/images/services/auriculotherapy.jpg";
import acupressure from "/assets/images/services/acupressure.jpg";
import electropuncture from "/assets/images/services/electropuncture.jpg";
import pir from "/assets/images/services/pir.jpg";

const btnPrev = document.getElementById("prevBtnServices");
const btnNext = document.getElementById("nextBtnServices");
const servicesContainer = document.getElementById("services-container");
let id = 0;
let currentIndex = id;
let info = [];
let isSwiping = false;

btnNext.addEventListener("click", () => {
  if (currentIndex >= 5) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }
  createService();
});

btnPrev.addEventListener("click", () => {
  if (currentIndex <= 0) {
    currentIndex = 5;
    console.log(currentIndex);
  } else {
    currentIndex--;
    console.log(currentIndex);
  }
  createService();
});

document.addEventListener("DOMContentLoaded", (e) => {
  try {
    fetch("FU_GAN/assets/data/services.json")
      .then((res) => res.json())
      .then((data) => {
        info = data;
        createService(info);
      });
  } catch (error) {
    console.log(error.message);
  }
});

function createService() {
  servicesContainer.innerHTML = `<div>
            <div class=${info[currentIndex].image}>
              <h3>${info[currentIndex].title}</h3>
            </div>
            <p>${info[currentIndex].text}</p>
          </div>`;
}

// прокрутка пальцами

let startX;

servicesContainer.addEventListener("touchstart", (event) => {
  startX = event.touches[0].clientX;
});

feedbackDiv.addEventListener("touchmove", (event) => {
  if (isSwiping) return;
  const moveX = event.touches[0].clientX;
  const diffX = startX - moveX;
  if (Math.abs(diffX) > 50) {
    isSwiping = true;
    if (diffX > 0) {
        currentIndex++;
    } else {
        currentIndex++;
    }
    createService();
    event.preventDefault();
  }
});

