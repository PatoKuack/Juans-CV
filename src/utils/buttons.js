const button = document.querySelectorAll('.button__simple');
const buttonContent = document.querySelectorAll('.button__simple > *');
const buttonCV = document.getElementById('button-cv')

button.forEach( e => {
  const styleButton = window.getComputedStyle(e, null);
  let valueStyleBBC = styleButton.getPropertyValue("border-color");
  let valueStyleBBW = styleButton.getPropertyValue("border-width");
  let valueStyleBPT = styleButton.getPropertyValue("padding-top");
  let valueStyleBPB = styleButton.getPropertyValue("padding-bottom");
  
  e.addEventListener('click', () => {
    e.style.borderColor = "rgb(86, 87, 87) rgb(86, 87, 87) rgb(163, 169, 172) rgb(163, 169, 172)";
    e.style.paddingTop = `calc( ${valueStyleBPT} + ${valueStyleBBW} )`;
    e.style.paddingBottom = `calc( ${valueStyleBPB} - ${valueStyleBBW} )`;
    setTimeout(function() {
      e.style.borderColor = `${valueStyleBBC}`;
      e.style.paddingTop = `${valueStyleBPT}`;
      e.style.paddingBottom = `${valueStyleBPB}`;
    }, 250);
  });
});

// function openCV() { //DO NOT WORK =C
//   setTimeout( function() {
//     window.open("https://drive.google.com/file/d/1fG6BXv5bLBc4jAIhOT_yqRBbU418jaS7/view?usp=sharing", "_blank");
//   }, 250);
// }
buttonCV.addEventListener('click', () => {
  setTimeout( function() {
    window.open("https://drive.google.com/file/d/15VK7H_8fxpyQm7WvAC7CANbrXtP8-6Zi/view?usp=share_link", "_blank");
  }, 250);
});