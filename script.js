const navToggle = document.querySelector('.nav-toggle'),
  nav = document.querySelector('nav');




navToggle.addEventListener('click', () => {
  if (nav.classList.contains('height-r')) {
    nav.classList.remove('height-r')
  } else {
    nav.classList.add('height-r')
  }

})