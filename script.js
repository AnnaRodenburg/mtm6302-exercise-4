AOS.init();

const $hamburgerButton = document.getElementById('hamburger-menu')
const $menu = document.getElementById('menu')

let menuToggle = false

$hamburgerButton.addEventListener('click', function() {
    
    if (menuToggle === false) {
        $menu.style.display = 'block'
        menuToggle = true
    } else if (menuToggle === true) {
        $menu.style.display = 'none'
        menuToggle = false
    }
})

$hamburgerButton.style.display = 'none'

window.addEventListener('resize', function() {
    if (window.innerWidth >= 768) {
        $hamburgerButton.style.display = 'none'
        menuToggle = false
    }
    else if (window.innerWidth <= 768) {
        $hamburgerButton.style.display = 'block'
        menuToggle = true
    }
})


