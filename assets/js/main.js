/*=============== CHANGE BACKGROUND HEADER ===============*/


/*=============== SWIPER POPULAR ===============*/


/*=============== VALUE ACCORDION ===============*/


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SHOW SCROLL UP ===============*/ 


/*=============== DARK LIGHT THEME ===============*/ 


/*=============== SCROLL REVEAL ANIMATION ===============*/

//  SHOW MENU //
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

      /* Menu show */

      if(navToggle){

        navToggle.addEventListener('click' ,() =>{
            navMenu.classList.add('show-menu')
        })
      }
      if(navClose){

        navToggle.addEventListener('click' ,() =>{
            navMenu.classList.remove('show-menu')
        })
      }


// REMOVE MENU MOBILE

const navlink = document.querySelectorAll('nav-link')

const linkAction =() =>{

const navMenu = document.getElementById('nav-menu')
navlink.classList.remove('show-menu')
}
 navlink.forEach(n => n.addEventListener('click', linkAction))
