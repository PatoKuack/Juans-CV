const button = document.querySelectorAll(".button__simple");
const buttonContent = document.querySelectorAll(".button__simple > *");

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

// function buttonDown() {
//   button.style.borderColor = "rgb(86, 87, 87) rgb(86, 87, 87) rgb(163, 169, 172) rgb(163, 169, 172)";
//   // buttonContent.style.padding = ".4rem .5rem .2rem .5rem";
// }
// button.addEventListener('mouseup', () => {
//   setTimeout(function() {
//     button.style.borderColor = `${valueStyleBBC}`;
//     // buttonContent.style.padding = `${valueStyleBCP}`;
//   }, 250);
// });


