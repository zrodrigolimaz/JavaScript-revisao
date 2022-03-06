function seguirMouse (event) {
  const circulo = document.querySelector(".circulo")
  circulo.style.top = event.y + "px";
  circulo.style.left = event.x + "px";
  
}

window.addEventListener('mousemove', seguirMouse)