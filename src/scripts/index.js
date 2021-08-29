// import LocomotiveScroll from 'locomotive-scroll'

// const scroll = new LocomotiveScroll({
//   el: document.querySelector('[data-scroll-container]'),
//   smooth: true,
//   offset: ['30%', 100],
//   multiplier: 1
// })

// const cursor = document.querySelector('.cursor')
// document.addEventListener('mousemove', (event) => {
//   cursor.style.left = event.pageX + 'px'
//   cursor.style.top = event.pageY + 'px'
// })



let darkMode = localStorage.getItem('darkMode')

const darkModeToggle = document.querySelector('#dark-mode-toggle')

const enableDarkMode = () => {
  document.body.classList.add('darkmode')
  // Updating darkMode in localStorage
  localStorage.setItem('darkMode', 'enabled')
}

const disableDarkMode = () => {
  document.body.classList.remove('darkmode')
  // Updating darkMode in localStorage 
  localStorage.setItem('darkMode', null)
}
 
// Enabled darkMode from previous visit, therefore start things off with it on
if (darkMode === 'enabled') {
  enableDarkMode()
}

// Toggle function for dark/light
darkModeToggle.addEventListener('click', () => {
  darkMode = localStorage.getItem('darkMode')
  
  // if currently not enabled, enable it
  if (darkMode !== 'enabled') {
    enableDarkMode()
  // if enabled, turn it off  
  } else {  
    disableDarkMode() 
  }
})


// Scrolling home button
const scrollingHomeButton = document.querySelector('.scroll-home')

window.addEventListener('scroll', () => {
  scrollingHomeButton.classList.toggle('active', window.scrollY > 600)
})

const scrollingTop = document.querySelector('.home-button')

scrollingTop.addEventListener('click', () => {
  console.log('clicked')
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
})

// ! hamburger navbar
const hamburger = document.querySelector('.nav-icon')
const sidebar = document.querySelector('.side-navbar')

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active')
  sidebar.classList.toggle('active')
  // console.log('burger clicked')
})
