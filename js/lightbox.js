export function initLightbox(galleryImages) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCounter = document.getElementById('lightbox-counter');
    let currentLightboxIndex = 0;

    function updateLightbox() {
        const filename = galleryImages[currentLightboxIndex];
        lightboxImg.src = `images/${filename}`;
        lightboxImg.alt = `Flise TV-bord eksempel ${currentLightboxIndex + 1}`;
        lightboxCounter.textContent = `${currentLightboxIndex + 1} / ${galleryImages.length}`;
    }

    function openLightbox(index) {
        currentLightboxIndex = index;
        updateLightbox();
        lightbox.classList.remove('hidden');
        lightbox.classList.add('open');
        document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
        lightbox.classList.add('hidden');
        lightbox.classList.remove('open');
        document.body.style.overflow = '';
    }

    document.getElementById('lightbox-close').addEventListener('click', closeLightbox);
    document.getElementById('lightbox-prev').addEventListener('click', () => {
        currentLightboxIndex = (currentLightboxIndex - 1 + galleryImages.length) % galleryImages.length;
        updateLightbox();
    });
    document.getElementById('lightbox-next').addEventListener('click', () => {
        currentLightboxIndex = (currentLightboxIndex + 1) % galleryImages.length;
        updateLightbox();
    });
    lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });
    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('open')) return;
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') document.getElementById('lightbox-prev').click();
        if (e.key === 'ArrowRight') document.getElementById('lightbox-next').click();
    });

    return openLightbox;
}