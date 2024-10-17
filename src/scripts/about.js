const container = document.querySelector(".about-info");

function resizeText() {
  const originalFontSize = 1.5;
  let fontSize = originalFontSize;
  container.style.fontSize = `${fontSize}rem`;
  while (container.scrollHeight > container.clientHeight && fontSize > 0.8) {
    fontSize -= 0.1;
    container.style.fontSize = `${fontSize}rem`;
  }
}

function shouldResizeText() {
  return window.matchMedia("(min-width: 769px)").matches;
}

const resizeObserver = new ResizeObserver(() => {
  if (shouldResizeText()) {
    resizeText();
  }
});
resizeObserver.observe(container);

window.addEventListener("load", () => {
  if (shouldResizeText()) {
    resizeText();
  }
});
