import LocomotiveScroll from 'locomotive-scroll'

const scroll = new LocomotiveScroll({
  el: document.querySelector('[data-scroll-container]'),
  smooth: true,
  offset: ['30%', 100],
  multiplier: 1
})

const cursor = document.querySelector('.cursor')
document.addEventListener('mousemove', (event) => {
  cursor.style.left = event.pageX + 'px'
  cursor.style.top = event.pageY + 'px'
})
