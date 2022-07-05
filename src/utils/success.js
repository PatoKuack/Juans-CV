const successMessageId = document.getElementById('successMessage');
const bodyId = document.getElementById('body');
function showMessage() {
  successMessageId.style.display = "block";
  bodyId.style.backgroundColor = "#565757";
  bodyId.style.color = "#565757";
}
const messageShow = showMessage();
const intervalShow = setTimeout(messageShow, 3000);
clearTimeout(intervalShow); 