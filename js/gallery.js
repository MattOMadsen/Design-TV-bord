export const galleryImages = [
    'galleri-01-hvid-flise-stue.jpg',
    'galleri-02.jpg',
    'model-lille-110cm.jpg',
    'galleri-03.jpg',
    'galleri-04.jpg',
    'galleri-05.jpg',
    'galleri-06.jpg',
    'galleri-07.jpg',
    'galleri-08.jpg',
    'galleri-09.jpg',
    'model-standard-130cm.jpg',
    'galleri-10.jpg',
    'model-stor-160cm.jpg',
    'galleri-11.jpg',
    'galleri-12.jpg',
    'galleri-13.jpg',
    'galleri-14.jpg'
];

export function initGallery(openLightbox) {
    const galleryGrid = document.getElementById('gallery-grid');
    if (!galleryGrid) return;

    galleryImages.forEach((filename, index) => {
        const item = document.createElement('button');
        item.type = 'button';
        item.className = 'gallery-item aspect-square reveal';
        item.style.transitionDelay = `${(index % 8) * 0.05}s`;
        item.innerHTML = `<img src="images/${filename}" alt="Flise TV-bord eksempel ${index + 1}" class="w-full h-full object-cover" loading="lazy">`;
        item.addEventListener('click', () => openLightbox(index));
        galleryGrid.appendChild(item);
    });
}