const toggleButton = document.querySelector('.toggle-button');
const panier = document.querySelector('.panier');
const navbar = document.querySelector('.navbar');
const navLinks = document.querySelector('.nav-links');
const ul_navLinks = document.querySelector('.nav-links ul');
const li_navLinks = document.getElementsByClassName('nav-link');

toggleButton.addEventListener('click', () => {
    panier.classList.toggle('toggled');
    navbar.classList.toggle('toggled');
    navLinks.classList.toggle('toggled');
    ul_navLinks.classList.toggle('toggled');
    
    setTimeout(() => {
        for (let i = 0; i < li_navLinks.length; i++) {
            li_navLinks[i].classList.toggle('show');
        }
    }, 10);

    setTimeout(() => {
        toggleButton.classList.toggle('toggled');
    }, 10);
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        navbar.style.position = 'fixed';
    }
})