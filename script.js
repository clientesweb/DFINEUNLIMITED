document.addEventListener('DOMContentLoaded', function() {
    // Menú toggle
    const menuToggle = document.getElementById('menu-toggle');
    const nav = document.querySelector('nav');

    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('nav-open');
    });

    // Smooth scroll para enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Lazy loading para imágenes
    const images = document.querySelectorAll('img[data-src]');
    const config = {
        rootMargin: '50px 0px',
        threshold: 0.01
    };

    let observer = new IntersectionObserver((entries, self) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                preloadImage(entry.target);
                self.unobserve(entry.target);
            }
        });
    }, config);

    images.forEach(image => {
        observer.observe(image);
    });

    function preloadImage(img) {
        const src = img.getAttribute('data-src');
        if (!src) { return; }
        img.src = src;
    }

    // Chat widget toggle
    const chatToggle = document.querySelector('.chat-toggle');
    const chatWidget = document.querySelector('.chat-widget');

    chatToggle.addEventListener('click', function() {
        chatWidget.classList.toggle('chat-open');
    });

    // Animación de aparición al hacer scroll
    const fadeElems = document.querySelectorAll('.fade-in');
    
    function checkFade() {
        fadeElems.forEach(elem => {
            const elemTop = elem.getBoundingClientRect().top;
            const elemBottom = elem.getBoundingClientRect().bottom;
            
            if (elemTop < window.innerHeight && elemBottom > 0) {
                elem.classList.add('visible');
            }
        });
    }

    window.addEventListener('scroll', checkFade);
    checkFade();
});