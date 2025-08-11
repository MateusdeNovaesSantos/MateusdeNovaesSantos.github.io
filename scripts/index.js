



document.addEventListener('DOMContentLoaded', () => {

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


    /* THEME TOGGLE */

    const desktopThemeToggleCheckbox = document.getElementById('theme-toggle');
    const mobileThemeToggleCheckbox = document.getElementById('mobile-theme-toggle');

    const toggleTheme = (isDarkMode) => {
        document.body.classList.toggle('dark-mode', isDarkMode);
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
        desktopThemeToggleCheckbox.checked = isDarkMode;
        mobileThemeToggleCheckbox.checked = isDarkMode;
    };

    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark' ) {
        toggleTheme(true);
    } else {
        toggleTheme(false);
    }

    desktopThemeToggleCheckbox.addEventListener('change', (e) => {
        toggleTheme(e.target.checked);
    });

    mobileThemeToggleCheckbox.addEventListener('change', (e) => {
        toggleTheme(e.target.checked);
    })
});
