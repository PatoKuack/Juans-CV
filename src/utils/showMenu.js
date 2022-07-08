window.addEventListener('load', () => {
  const toggleId = document.getElementById('main-menu-toggle');
  const navId = document.getElementById('main-nav');
  const brandID = document.getElementById('main-brand');
  const mainId = document.getElementById('main-content');
  const footerId = document.getElementById('main-footer');
  
  if( toggleId && navId && brandID && mainId && footerId ) {
    // Si se da clic en el botón hamburguesa se le colocará al menú la clase 'show'.
    toggleId.addEventListener('touchend', () => {
      navId.classList.toggle('show');
      // toggleId.classList.toggle('active');
    });
    // Si se da clic fuera del menú, se eliminará la clase 'show'.
    brandID.addEventListener('touchstart', () => {
      removeShowActive(navId);
    });
    mainId.addEventListener('touchstart', () => {
      removeShowActive(navId);
    });
    footerId.addEventListener('touchstart', () => {
      removeShowActive(navId);
    });
  }
});

  
const removeShowActive = (navigator) => {
  let className1 = navigator.classList[1];
  let classNumber1 = navigator.classList.length;
  if(classNumber1==2 && className1=="show"){
      navigator.classList.remove('show');
      // toggle.classList.remove('active');
  }
}


// export default showMenu;
// showMenu();
