/* Función de un maestro de internet. =3
function isElementPartiallyVisible(elt) {
  var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
  var viewportHeight = window.innerHeight || document.documentElement.clientHeight;
  //Position of the element box
  var box = elt.getBoundingClientRect();
  var insideBoxH = (box.left >= 0 && box.left <= viewportWidth) ||
                    (box.right >= 0 && box.right <= viewportWidth);
  var insideBoxV = (box.top >= 0 && box.top <= viewportHeight) ||
                    (box.bottom>= 0 && box.bottom <= viewportHeight);
  return (insideBoxH && insideBoxV);
}
*/

const interactiveHand = document.querySelector('.carousel-hand');
const eCarousel = document.querySelector('.carousel');
let counterHand = 0;


const breackPoint = matchMedia('(max-width: 767px)');

const carouselHand = () => {
  if(breackPoint.matches){
    window.addEventListener('scroll', () => {
      let eCarouselTop = eCarousel.getBoundingClientRect().top;
      let eCarouselBttm = eCarousel.getBoundingClientRect().bottom;
      /* Métodos con los que calculé las apariciones.
      console.log("innerWidth:  " + innerWidth + " ; innerHeight: " + innerHeight);
      console.log("outerWidth:  " + outerWidth + " ; outerHeight: " + outerHeight);
      console.log("clientWidth: " + document.documentElement.clientWidth + " ; clientHeight: " + document.documentElement.clientHeight);
      console.log("getBoundingClientRect():");
      console.log(eCarousel.getBoundingClientRect());
      console.log("scrollY: " + scrollY);
      */
      if ((eCarouselTop > 0) && (eCarouselBttm < outerHeight) && (counterHand < 2)) {
        interactiveHand.classList.add('interactive-hand');
      }
      if (((eCarouselTop < (outerHeight * (.3 - 1))) || eCarouselBttm >= (outerHeight * 1.7)) && document.querySelector('.interactive-hand')) {
        counterHand++;
        interactiveHand.classList.remove('interactive-hand');
      }
    });
  }
}
addEventListener('DOMContentLoaded', carouselHand);
addEventListener('resize', carouselHand);
