const burguerIcon = document.querySelector('.menu')
const closeMenuIcon = document.querySelector('.close-menu')
const menu = document.querySelector('.nav-mobile')

console.log({ burguerIcon })

const toggleMenu = () => {
    const body = document.querySelector('body')

    menu.style.display = 'flex'
    closeMenuIcon.style.display = 'block'
    burguerIcon.style.display = 'none'
    body.style.overflow = 'hidden'
}

const closeMenu = () => {
    const screen = window.screen

    if (screen.width > 768) return

    const body = document.querySelector('body')

    menu.style.display = 'none'
    body.style.overflow = 'auto'
    closeMenuIcon.style.display = 'none'
    burguerIcon.style.display = 'block'
}

const closeOnResize = () => {
    const screen = window.screen

    if (screen.width > 768) {
        const body = document.querySelector('body')

        menu.style.display = 'none'
        body.style.overflow = 'auto'
        closeMenuIcon.style.display = 'none'
        burguerIcon.style.display = 'none'
    } else {
        burguerIcon.style.display = 'block'
    }
}

burguerIcon.addEventListener('click', toggleMenu)
closeMenuIcon.addEventListener('click', closeMenu)
window.addEventListener('resize', closeOnResize)
