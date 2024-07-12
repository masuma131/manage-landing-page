const btn = document.getElementById('menu-btn')
const nav = document.getElementById('menu')

//menu icon from open and close
//menu items from display flex to hidden
btn.addEventListener('click', () => {
  btn.classList.toggle('open')
  nav.classList.toggle('flex')
  nav.classList.toggle('hidden')
})