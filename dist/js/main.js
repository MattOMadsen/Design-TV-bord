import { galleryImages, initGallery } from './gallery.js';
import { initLightbox } from './lightbox.js';
import { initNavbar } from './navbar.js';
import { initReveal } from './reveal.js';

const openLightbox = initLightbox(galleryImages);
initGallery(openLightbox);
initNavbar();
initReveal();