const navToggle = document.querySelector('.nav-toggle'),
  nav = document.querySelector('nav'),
  bars = document.querySelector('.fa-bars')




navToggle.addEventListener('click', () => {
  if (nav.classList.contains('height-r')) {
    nav.classList.remove('height-r')
    bars.style.transform = 'rotate(0deg)'
  } else {
    nav.classList.add('height-r')
    bars.style.transform = 'rotate(-90deg)'
  }

})