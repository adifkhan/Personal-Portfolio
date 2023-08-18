/* ========== toggle icon navbar ==============  */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

/* ========== scroll section active link ==============  */
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove('active');
        document
          .querySelector('header nav a[href*=' + id + ']')
          .classList.add('active');
      });
    }
  });

  /* ========== sticky navbar ==============  */
  let header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 100);

  /*========= remove toggle icon and navbar when navlinks are clicked (scroll) ==========*/
  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');
};

/* ========== Scroll reveal ==============  */

ScrollReveal({
  //   reset: true,
  distance: '80px',
  duration: 2000,
  delay: 200,
});
ScrollReveal().reveal('.home-contents, .heading,.about-img', { origin: 'top' });
ScrollReveal().reveal(
  '.services-box,.about-contents,.portfolio,.contact-container form',
  {
    origin: 'bottom',
  }
);
/* ScrollReveal().reveal('.home-contents h1', { origin: 'left' });
ScrollReveal().reveal('.home-contents h3', { origin: 'right' }); */

/* ========== Typed effect ==============  */
var typed = new Typed('.skills', {
  strings: [
    'HTML-5, CSS-3',
    'JavaScript, ES6',
    'React, NextJs',
    'Tailwind, Bootstrap, MaterialUI',
    'NodeJs, ExpresJs',
    'MongoDb, Mongoose',
    'Firebase Authentication',
    'JSON Web Token',
  ],
  typeSpeed: 30,
  backSpeed: 30,
  backDelay: 500,
  loop: true,
});
