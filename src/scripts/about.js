const container = document.querySelector(".about-info");

function resizeText() {
  const minFontSize = 1;
  let fontSize = 1.5;
  if (window.innerWidth > 1200) {
    fontSize += ((window.innerWidth - 1200) / 1200) * 0.5;
  }

  container.style.fontSize = `${fontSize}rem`;

  while (
    container.scrollHeight > container.clientHeight &&
    fontSize > minFontSize
  ) {
    fontSize -= 0.1;
    container.style.fontSize = `${fontSize}rem`;
  }
}

// Обработчик события изменения размера окна
window.addEventListener("resize", resizeText);

// Обработчик события загрузки страницы
window.addEventListener("load", resizeText);
