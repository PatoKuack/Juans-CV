window.addEventListener('load', () => {
  document.getElementById('arrow-left').addEventListener('click', clickLeft);
  document.getElementById('arrow-right').addEventListener('click', clickRight);
  
  document.querySelector('.c-skills').addEventListener('keydown', e => {
    switch(e.key) {
      case 'ArrowLeft':
        clickLeft();
        break;
      case 'ArrowRight':
        clickRight();
        break;
      default:
        break;
    }
  });
  
  // const getSelector = document.querySelector(selectorName);
  document.querySelector(selectorName).addEventListener('touchstart', e => {
    Xstart = e.changedTouches[0].screenX;
    Ystart = e.changedTouches[0].screenY;
    // console.log("Xstart = %d", Xstart);
    // console.log("Ystart = %d", Ystart);
  });
  document.querySelector(selectorName).addEventListener('touchend', e => {      
    Xend = e.changedTouches[0].screenX;
    Yend = e.changedTouches[0].screenY;
    // console.log("Xend = %d", Xend);
    // console.log("Yend = %d", Yend);
    touchMove();
  });
  // e.forEach(touch => {
  // console.log(e);
  // console.log(e.changedTouches);
  // console.log(e.changedTouches[0]);
  // console.log(e.changedTouches[0].target.className);
  // Donde se posiciona el touch en la pantalla
  // console.log(e.changedTouches[0].clientX);
  // console.log(e.changedTouches[0].pageX);
  // console.log(e.changedTouches[0].screenX);
  // Ni idea
  // console.log(e.changedTouches[0].radiusX);
  // });

});

const pageSkills = document.getElementById('page-number');
const allPages = document.querySelectorAll('.carousel-item');
let totalPages = allPages.length;
var pageN = 1;
pageSkills.textContent = `${pageN} de ${totalPages}`;

const selectorName = ".carousel";
let Xstart = 0;
let Ystart = 0;
let Xend = 0;
let Yend = 0;
let difYtouch = 0;
let displacement = "";
function touchMove() {
  difYtouch = Math.sqrt((Ystart - Yend)**2);
  // console.log(difYtouch);
  if(((Xstart - Xend) >= 30) && (difYtouch < 50)) {
    displacement = "right";
    clickRight();
  }else if(((Xstart - Xend) <= -30) && (difYtouch < 50)) {
    displacement = "left";
    clickLeft();
  }else { displacement = "central" }
  // console.log(displacement);
}


/** Esta funcion se llama cuando la persona hace click en la fecha izquierda del carousel para navegar a la izquierda */
function clickLeft() {
  let widthWindow = parseInt(getComputedStyle(document.getElementById('carousel-window')).width, 10); // Obtiene el valor numerico del width del elemento con el id carousel-window.
  /* Se obtiene el valor de left y se convierte a base decimal (10), o sea se obtiene "0" y se entrega 0 */
  let currentLeft = parseInt(
    getComputedStyle(document.querySelector(".carousel-container")).left,
    10
  );
  if (currentLeft === 0) { // Si el valor de izquiera es 0, retornar para no seguir movierno el contenido
    return;
  } else {
    let newValue = currentLeft + widthWindow;
    document.querySelector(".carousel-container").style.left = `${newValue}px`;
    switch (newValue) {
      case -widthWindow:
        document.getElementById('skills-3__button').setAttribute("tabindex", "-1");
        document.getElementById('skills-2__button').removeAttribute("tabindex");
        document.getElementById('skills-3').setAttribute("aria-hidden", "true");
        document.getElementById('skills-2').removeAttribute("aria-hidden");
        pageN = 2;
        pageSkills.textContent = `${pageN} de ${totalPages}`;
        break;
      case 0:
        document.getElementById('skills-2__button').setAttribute("tabindex", "-1");
        document.getElementById('skills-1__button').removeAttribute("tabindex");
        document.getElementById('skills-2').setAttribute("aria-hidden", "true");
        document.getElementById('skills-1').removeAttribute("aria-hidden");
        pageN = 1;
        pageSkills.textContent = `${pageN} de ${totalPages}`;
        break;
      default:
        break;
    }
    const interPaper = document.getElementById('interactivePaper');
    // interPaper.style.animationName = "movingPaper";
    interPaper.style.display = "block";
    interPaper.style.animationDirection = "reverse";
    interPaper.addEventListener('animationend', () => {
      // interPaper.style.animationName = "";
      interPaper.style.display = "none";
    });
  }
}


/* Esta funcion se llama cuando la persona hace click en la fecha derecha del carousel para navegar a la derecha */
function clickRight() {
  let widthWindow = parseInt(getComputedStyle(document.getElementById('carousel-window')).width, 10); // Obtiene el valor numerico del width del elemento con el id carousel-window.
  /* Se obtiene el valor de left y se convierte a base decimal (10), o sea se obtiene "0" y se entrega 0 */
  let currentRight = parseInt(
    getComputedStyle(document.querySelector(".carousel-container")).left,
    10
  );
  if (currentRight < -widthWindow) { // Si el valor de izquierda es menor a -540, retorna para dejar de mover el contenido.
    return;
  } else {
    let newValue = currentRight - widthWindow;
    document.querySelector(".carousel-container").style.left = `${newValue}px`;
    switch (newValue) {
      case -widthWindow:
        document.getElementById('skills-1__button').setAttribute("tabindex", "-1");
        document.getElementById('skills-2__button').removeAttribute("tabindex");
        document.getElementById('skills-1').setAttribute("aria-hidden", "true");
        document.getElementById('skills-2').removeAttribute("aria-hidden");
        pageN = 2;
        pageSkills.textContent = `${pageN} de ${totalPages}`;
        break;
      case -(widthWindow * 2):
        document.getElementById('skills-2__button').setAttribute("tabindex", "-1");
        document.getElementById('skills-3__button').removeAttribute("tabindex");
        document.getElementById('skills-2').setAttribute("aria-hidden", "true");
        document.getElementById('skills-3').removeAttribute("aria-hidden");
        pageN = 3;
        pageSkills.textContent = `${pageN} de ${totalPages}`;
        break;
      default:
        break;
    }
    const interPaper = document.getElementById('interactivePaper');
    // interPaper.style.animationName = "movingPaper";
    interPaper.style.display = "block";
    interPaper.style.animationDirection = "normal";
    interPaper.addEventListener('animationend', () => {
      // interPaper.style.animationName = "";
      interPaper.style.display = "none";
    });
  }
}



