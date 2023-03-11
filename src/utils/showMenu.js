window.addEventListener('load', () => {
  const toggleId = document.getElementById('main-menu-toggle');
  const navId = document.getElementById('main-nav');
  const navLink = Array.from(document.querySelectorAll('.main-menu__link'));
  const brandID = document.getElementById('main-brand');
  const mainId = document.getElementById('main-content');
  const footerId = document.getElementById('main-footer');
  
  const mediaBp = matchMedia('(min-width: 768px)');
  //*retorna un objeto del tipo MediaQueryList.*
  /* console.log(mediaBp.matches); */
  //matches es una propiedad que retorna un booleano.

  //evento que se activa al cargar el documento:
  // document.addEventListener('DOMContentLoaded', () => {
    //si la página tiene minimo un ancho de 768px, entonce...
    if(mediaBp.matches && navLink){
      //remover los tabindex de los links de navegación.
      console.log(navLink);
      navLink.map(e => {
        e.removeAttribute("tabindex");
      });
    }
  // });
  window.addEventListener('resize', () => {
    //si la página tiene minimo un ancho de 768px, entonce...
    if(mediaBp.matches && navLink) {
      //remover los tabindex de los links de navegación.
      navLink.map(e => {
        e.removeAttribute("tabindex");
      });
    } else {
      navLink.map(e => {
        e.setAttribute("tabindex", "-1");
      });
    }
  });

  if( toggleId && navId && brandID && mainId && footerId ) {
    // Si se da clic en el botón hamburguesa se le colocará al menú la clase 'show'.
    toggleId.addEventListener('click', () => {
      const objClases = navId.classList;
      const arrayClasses = Object.values(objClases);
      let confirmation = arrayClasses.includes("show");
      if(!confirmation) {
        navId.classList.add('show');
        toggleId.classList.add('active');
        //remover los tabindex de los links de navegación.
        navLink.map(e => {
          e.removeAttribute("tabindex");
        });
      } else {
        navId.classList.remove('show');
        toggleId.classList.remove('active');
        navLink.map(e => {
          e.setAttribute("tabindex", "-1");
        });
      }
    });

    navLink.map(e => {
      e.addEventListener('click', () => {
        navId.classList.remove('show');
        toggleId.classList.remove('active');
        navLink.map(e => {
          e.setAttribute("tabindex", "-1");
        });
      });
    });

    // Si se da clic fuera del menú, se eliminará la clase 'show'.
    brandID.addEventListener('touchstart', () => {
      removeShowActive(navId, toggleId);
    });
    mainId.addEventListener('touchstart', () => {
      removeShowActive(navId, toggleId);
    });
    footerId.addEventListener('touchstart', () => {
      removeShowActive(navId, toggleId);
    });
  }
});

  
const removeShowActive = (navigator, toggle) => {
  const objClases = navigator.classList;
  const arrayClasses = Object.values(objClases);
  let confirmation = arrayClasses.includes("show");
  if(confirmation){
    navigator.classList.remove('show');
    toggle.classList.remove('active');
    navLink.map(e => {
      e.setAttribute("tabindex", "-1");
    });
  }
}


// export default showMenu;
// showMenu();
