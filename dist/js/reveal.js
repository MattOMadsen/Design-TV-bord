export function initReveal() {
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
    document.querySelectorAll('.reveal').forEach((el, i) => {
        if (!el.style.transitionDelay) el.style.transitionDelay = `${Math.min(i * 0.05, 0.4)}s`;
    });
}