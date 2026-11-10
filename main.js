// Efecto de escritura en el hero
(function typeEffect() {
    const el = document.getElementById('typed');
    if (!el) return;
    const text = el.dataset.text;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        el.textContent = text;
        return;
    }
    let i = 0;
    const timer = setInterval(() => {
        el.textContent = text.slice(0, ++i);
        if (i >= text.length) clearInterval(timer);
    }, 45);
})();

// Resalta en la navegación la sección visible
const sections = document.querySelectorAll('main section');
const navLinks = document.querySelectorAll('.topnav ul a');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            navLinks.forEach((link) => {
                link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
            });
        }
    });
}, { rootMargin: '-40% 0px -55% 0px' });

sections.forEach((s) => observer.observe(s));