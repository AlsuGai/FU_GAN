import ilgotherapy from "/assets/images/services/ilgotherapy.jpg";
import manualTherapy from "/assets/images/services/manual-therapy.jpg";
import auriculotherapy from "/assets/images/services/auriculotherapy.jpg";
import acupressure from "/assets/images/services/acupressure.jpg";
import electropuncture from "/assets/images/services/electropuncture.jpg";
import pir from "/assets/images/services/pir.jpg";
import dataJSON from "/assets/data/services.json";

const btnPrev = document.getElementById("prevBtnServices");
const btnNext = document.getElementById("nextBtnServices");
const servicesContainer = document.getElementById("services-container");
const data = JSON.stringify(dataJSON);
const servicesData = JSON.parse(data);
let id = 0;
let currentIndex = id;
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
  } else {
    currentIndex--;
  }
  createService();
});

document.addEventListener("DOMContentLoaded", (e) => {
    if(servicesData) {
        createService(servicesData);
    } else {
        console.log(error.message);
    }
});

function createService() {
  servicesContainer.innerHTML = `<div>
            <div class=${servicesData[currentIndex].image}>
              <h3>${servicesData[currentIndex].title}</h3>
            </div>
            <p>${servicesData[currentIndex].text}</p>
          </div>`;
}

// прокрутка пальцами

let startX;

servicesContainer.addEventListener("touchstart", (event) => {
  startX = event.touches[0].clientX;
});

servicesContainer.addEventListener("touchmove", (event) => {
  if (isSwiping) return;

  const moveX = event.touches[0].clientX;
  const diffX = startX - moveX;

  if (Math.abs(diffX) > 50) {
    isSwiping = true;
    if (diffX > 0) {
        currentIndex++;
    } else {
        currentIndex--;
    }
    createService();
  
  }
});

createService();
