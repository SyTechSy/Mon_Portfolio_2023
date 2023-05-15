const nemuGlobalTimes = document.getElementById('menu_global_times');
const navToggle = document.getElementById('nav_toggle');
const navClose = document.getElementById('nav_close');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        nemuGlobalTimes.classList.add('show_active');
    })
}

if (navClose) {
    navClose.addEventListener('click', () => {
        nemuGlobalTimes.classList.remove('show_active');
    })
}


















// ================ HEADER BACKGROUND CHANGE =======================

const scrollHeader = () => {
    const header = document.getElementById('nav__header1')
    // Lorsque le défilement est supérieur à 50 de hauteur de fenêtre, ajoutez la classe d'en-tête de défilement
    this.scrollY >= 10 ? header.classList.add('bg-header')
                       : header.classList.remove('bg-header')
}
window.addEventListener('scroll', scrollHeader)
