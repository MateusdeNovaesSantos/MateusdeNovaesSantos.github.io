/* HEADER FIXO */

const mainHeader = document.querySelector('.header');
const stickyHeader = document.querySelector('.sticky-header');
const hamburgerMenu = document.querySelector('.hamburger-menu');
const mobileMenu = document.querySelector('.mobile-menu');

window.addEventListener('scroll', () => {
    const mainHeaderHeight = mainHeader.offsetHeight;

    if (window.innerHeight >= 768) {
        if (window.scrollY > mainHeaderHeight) {
            stickyHeader.classList.add('show');
        } else {
            stickyHeader.classList.remove('show');
        }
    }
});

hamburgerMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
});


/* SECTION ANIMATION */

document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const options = {
        threshold: 0.4
    }

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                entry.target.classList.remove('hidden');
            } else {
                entry.target.classList.add('hidden');
                entry.target.classList.remove('visible');
            }
        });
    }, options);

    sections.forEach(section => {
        section.classList.add('hidden');
        observer.observe(section);
    });
});


/* THEME TOGGLE */

const themeToggleBtn = document.getElementById('theme-toggle');

themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
        themeToggleBtn.textContent = 'Light Mode';
    } else {
        localStorage.setItem('theme', 'light');
        themeToggleBtn.textContent = 'Dark Mode';
    }
});

const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
    document.body.classList.add('dark-mode');
    themeToggleBtn.textContent = 'Light Mode';
}