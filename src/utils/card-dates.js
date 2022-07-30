const cardInformation = document.querySelector('.information');
const cardFront = document.querySelector('.information__front');
const cardInformationDates = document.querySelectorAll('.information__description');

cardFront.addEventListener('click', () => {
  const headerStyle = document.getElementsByClassName('main-header__container');
  const getHeaderStyle = window.getComputedStyle(headerStyle[0], null);
  let headerBGColor = getHeaderStyle.getPropertyValue("background-color");
  cardInformation.style.backgroundColor = `${headerBGColor}`;
  cardFront.classList.add('active');
  cardInformationDates.forEach( e => {
    e.removeAttribute("aria-hidden");
  });
});
cardFront.addEventListener('transitionend', e => {
  cardFront.style.display = "none";
});