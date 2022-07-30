const formInputs = document.querySelectorAll('.form__input');
const cardDecoration = document.querySelector('.form__decoration');
const formButton = document.getElementById('form-button');

formInputs.forEach( e => {
  e.addEventListener('focusin', () => {
    cardDecoration.style.transform = "rotateX(180deg)";
  });
  e.addEventListener('focusout', () => {
    cardDecoration.style.transform = "rotateX(0deg)";
  });
});

// formButton.addEventListener('submit', sendCard);

// document.querySelector('.form-container').preventDefault();
// function sendCard(event) {
// }