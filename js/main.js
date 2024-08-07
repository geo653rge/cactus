// script.js
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/* Menu show */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/* Menu hidden */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}
// REMOVE MENU MOBILE

const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  // when each of the item on the nav__link is clicked , the show-menu closes.
  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=======ADD BLUR HEADER========*/

const blurHeader = () => {
  const header = document.getElementById("header");

  // Add a class if the bottom offset is greater than 50 of the
  this.scrollY >= 50
    ? header.classList.add("blur-header")
    : header.classList.remove("blur-header");
};

window.addEventListener("scroll", blurHeader);

// SHOW SCROLL UP

const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  //when the scroll is higher than 350 viewprt height , add the show-scroll to the a tag with the scrollup class

  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);

/*======== SCROLL SECTIONS ACTIVE LINK ======*/

const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollDown = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionsClass = document.querySelector(
        ".nav__menu a[href*=" + sectionId + "]"
      );

    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link");
    } else {
      sectionsClass.classList.remove("active-link");
    }
  });
};

window.addEventListener("scroll", scrollActive);

/*===== SCROLL REVEAL ANIMATION   ========= */

const scl = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2500,
  delay: 300,

  //reset: true, // Animation repeat
});

scl.reveal('.home__img, .new__data,.care_img,.contact__content ,.footer')
scl.reveal('.home__data,.care__list ,.contact__img', {delay: 500})
scl.reveal('.new__card' , {delay: 500 , internal: 100})
scl.reveal('.shop__card' , {internal: 100})
