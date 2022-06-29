const layerComplement = document.querySelectorAll('.l-complement');
const layCompl = Array.from(document.getElementsByClassName('l-complement'));

const createDiv = namesClass => {
  const decoration = document.createElement('div');
  decoration.classList.add(namesClass);
  return(decoration);
}
layerComplement.forEach( e => {
  // const decorationFront = createDiv(decoration__front);
  e.appendChild(createDiv("decoration__front"));
  e.appendChild(createDiv("decoration__middle"));
  e.appendChild(createDiv("decoration__back"));
  // e.appendChild(createDiv(decoration__middle));
  // e.appendChild(createDiv(decoration__back));
  
  // const decoration = document.createElement('div');
  // decoration.classList.add(`oso`);
//   console.log(e);

});