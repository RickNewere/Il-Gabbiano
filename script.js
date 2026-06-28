// Gallery Images Data
const galleryImages = [
  { id: '1', url: 'https://i.postimg.cc/J01vdMZZ/vista3.jpg', title: { it: 'Balcone con vista Centro Storico', en: 'Balcony with Old Town View' }, category: 'rooms' },
  { id: '2', url: 'https://i.postimg.cc/mkjfbtBm/camera1.jpg', title: { it: 'Camera da Letto Principale', en: 'Master Bedroom' }, category: 'rooms' },
  { id: '3', url: 'https://i.postimg.cc/TYkMFLkw/salone3.jpg', title: { it: 'Salone Luminoso', en: 'Bright Living Room' }, category: 'rooms' },
  { id: '4', url: 'https://i.postimg.cc/QNbRKKZb/vista4.jpg', title: 'Vista sul Centro Storico', title: { it: 'Balcone Vista Città', en: 'City View Balcony' }, category: 'rooms' },
  { id: '5', url: 'https://i.postimg.cc/hvpwk61w/vista2.jpg', title: { it: 'Vista sul Centro Storico di Monopoli', en: 'View of Monopoli Historic Center' }, category: 'rooms' },
  { id: '6', url: 'https://i.postimg.cc/c41GFMB2/salone1.jpg', title: { it: 'Zona Pranzo', en: 'Dining Area' }, category: 'rooms' },
  { id: '7', url: 'https://i.postimg.cc/GpjtH0vt/salone6.jpg', title: { it: 'Salotto accogliente con TV', en: 'Cozy TV Lounge' }, category: 'rooms' },
  { id: '8', url: 'https://i.postimg.cc/mgCtW1DQ/camera3.jpg', title: { it: 'Dettaglio Letto Matrimoniale', en: 'Double Bed Detail' }, category: 'rooms' },
  { id: '9', url: 'https://i.postimg.cc/rpTzVy07/accessori.jpg', title: { it: 'Dettagli e Benvenuto', en: 'Welcome details' }, category: 'rooms' },
  { id: '10', url: 'https://i.postimg.cc/BvsYxzwR/portavecchhia3.jpg', title: { it: 'Cala Porta Vecchia in Estate', en: 'Cala Porta Vecchia Beach' }, category: 'surroundings' },
  { id: '11', url: 'https://i.postimg.cc/hvh3X73j/portavecchia2.jpg', title: { it: 'Porta Vecchia Passeggiata', en: 'Porta Vecchia Promenade' }, category: 'surroundings' },
  { id: '12', url: 'https://i.postimg.cc/7LVBXNFh/portoverde.jpg', title: { it: 'Cala Porto Verde', en: 'Porto Verde Cove' }, category: 'surroundings' },
  { id: '13', url: 'https://i.postimg.cc/fRYqSs5x/cattedrale.jpg', title: { it: 'Cattedrale di Monopoli', en: 'Monopoli Cathedral' }, category: 'surroundings' },
  { id: '14', url: 'https://i.postimg.cc/GhWSptPL/porto3.jpg', title: { it: 'Barche Tipiche al Porto Vecchio', en: 'Typical Boats in the Old Port' }, category: 'surroundings' },
  { id: '15', url: 'https://i.postimg.cc/mkqpC20S/porto.jpg', title: { it: 'Porto Vecchio di Sera', en: 'Old Port by Night' }, category: 'surroundings' },
  { id: '16', url: 'https://i.postimg.cc/vHgNMfV2/porot2.jpg', title: { it: 'Il Porto in Estate', en: 'The Old Port in Summer' }, category: 'surroundings' },
  { id: '17', url: 'https://i.postimg.cc/mDgmnH4w/faro.jpg', title: { it: 'Il Faro di Monopoli', en: 'Monopoli Lighthouse' }, category: 'surroundings' }
];

// Translations Dictionary
const translations = {
    it: {
        "menu-home": "Home",
        "menu-apartment": "L'Appartamento",
        "menu-gallery": "Galleria",
        "menu-location": "Dove Siamo",
        "menu-contact": "Contatti",
        "btn-book-airbnb": "Prenota su Airbnb",
        "hero-badge": "Puglia, Monopoli Centro Storico",
        "hero-title": "Un'oasi di tranquillità nel cuore di Monopoli",
        "hero-subtitle": "Incantevole bilocale a pochi metri dal mare, dove il fascino delle antiche mura incontra il comfort moderno.",
        "btn-discover": "Scopri l'Appartamento",
        "spec-guests-title": "Ospiti",
        "spec-guests-text": "Fino a 4 Persone",
        "spec-beds-title": "Letti",
        "spec-beds-text": "1 Matrimoniale, 1 Divano Letto",
        "spec-size-title": "Superficie",
        "spec-location-title": "Distanza Mare",
        "spec-location-text": "A soli 200 metri",
        "apt-title": "Il Nostro Appartamento",
        "apt-subtitle": "Comfort e stile tipico pugliese per un soggiorno indimenticabile nel centro storico",
        "apt-heading": "Un bilocale di charme con balcone",
        "apt-desc-1": "Incantevole bilocale situato nel pittoresco centro storico di Monopoli. L'alloggio unisce con stile l'architettura originaria, caratterizzata da spesse mura che mantengono freschi gli ambienti, a arredi moderni e funzionali scelti per il massimo comfort dei nostri ospiti.",
        "apt-desc-2": "La posizione è ideale per immergersi nelle atmosfere autentiche della città pugliese: percorrendo le caratteristiche viuzze in pietra bianca, in soli 3 minuti a piedi potrai raggiungere la celebre spiaggia di Cala Porta Vecchia, i ristoranti tipici di mare, le botteghe artigiane e i principali monumenti storici.",
        "apt-amenities-title": "I Servizi inclusi:",
        "am-wifi": "Wi-Fi ad alta velocità",
        "am-ac": "Aria condizionata",
        "am-tv": "Smart TV LCD",
        "am-bath": "Bagno privato completo",
        "am-balcony": "Balconi vista centro",
        "am-kitchen": "Cucina attrezzata",
        "gallery-title": "Galleria Fotografica",
        "gallery-subtitle": "Guarda i dettagli dell'appartamento e le meraviglie di Monopoli",
        "tab-all": "Tutte",
        "tab-rooms": "Interni",
        "tab-surroundings": "Monopoli e Dintorni",
        "loc-title": "Dove Siamo",
        "loc-subtitle": "Nel cuore pulsante del centro storico, a due passi dal mare di Monopoli",
        "loc-address-heading": "Indirizzo",
        "loc-how-title": "Come raggiungerci",
        "loc-car-title": "In Auto",
        "loc-car-desc": "Dall'autostrada A14, uscita Bari Nord/Sud, procedere sulla SS16 in direzione Brindisi fino all'uscita Monopoli. Il centro storico è una ZTL (Zona a Traffico Limitato), ma sono disponibili comodi parcheggi liberi e a pagamento a circa 200 metri dal B&B.",
        "loc-train-title": "In Treno",
        "loc-train-desc": "La stazione di Monopoli è servita da treni regionali ed intercity diretti da Bari e Lecce. Il B&B dista circa 1.2 km dalla stazione, percorribile in 15 minuti a piedi o in pochi minuti di taxi.",
        "loc-plane-title": "In Aereo",
        "loc-plane-desc": "Gli aeroporti più vicini sono Bari Palese (BRI) a circa 60 km e Brindisi Papola Casale (BDS) a circa 70 km. Entrambi offrono collegamenti in treno, bus navetta o auto a noleggio per Monopoli.",
        "loc-nearby-title": "Nelle vicinanze",
        "loc-poi-1": "Cala Porta Vecchia (Spiaggia cittadina)",
        "loc-poi-2": "Cattedrale di Maria SS. della Madia",
        "loc-poi-3": "Castello Carlo V",
        "loc-poi-4": "Porto Vecchio di Monopoli",
        "loc-poi-5": "Piazza Giuseppe Garibaldi (Movida)",
        "btn-open-google-maps": "Apri in Google Maps",
        "contact-title": "Richiedi Informazioni o Preventivo",
        "contact-subtitle": "Mettiti in contatto diretto con noi per ricevere tariffe personalizzate o chiarire qualsiasi dubbio",
        "card-phone": "Telefono / WhatsApp",
        "card-phone-note": "Disponibile anche per messaggi WhatsApp",
        "card-email-note": "Rispondiamo solitamente entro poche ore",
        "card-hours": "Orari Check-in / Out",
        "card-hours-val": "Check-in: 14:00 - 20:00<br>Check-out: entro le 10:30",
        "wa-card-title": "Risposta Rapida WhatsApp",
        "wa-card-desc": "Vuoi fare in fretta? Clicca sul pulsante sottostante per aprire direttamente una conversazione WhatsApp precompilata con noi.",
        "btn-whatsapp-chat": "Scrivici su WhatsApp",
        "label-name": "Nome e Cognome",
        "label-checkin": "Data di Arrivo (Check-in)",
        "label-checkout": "Data di Partenza (Check-out)",
        "label-guests": "Numero di Ospiti",
        "label-message": "Messaggio / Richiesta Preventivo",
        "btn-send": "Invia Richiesta",
        "success-title": "Richiesta Ricevuta!",
        "success-desc": "Grazie per averci contattato. Ti risponderemo all'indirizzo email fornito nel minor tempo possibile.",
        "success-alternative": "Se preferisci una risposta immediata, puoi inviare i dati compilati direttamente su WhatsApp:",
        "btn-send-wa": "Invia tramite WhatsApp",
        "btn-new-msg": "Invia un altro messaggio",
        "footer-tagline": "La tua accogliente casa nel centro storico di Monopoli. Il fascino della Puglia a due passi dal mare Adriatico.",
        "footer-links-title": "Collegamenti",
        "footer-contacts-title": "Contatti",
        "footer-rights": "Tutti i diritti riservati.",
        "wa-tooltip": "Serve aiuto? Scrivici!"
    },
    en: {
        "menu-home": "Home",
        "menu-apartment": "The Apartment",
        "menu-gallery": "Gallery",
        "menu-location": "Location",
        "menu-contact": "Contact",
        "btn-book-airbnb": "Book on Airbnb",
        "hero-badge": "Puglia, Monopoli Historic Center",
        "hero-title": "An oasis of tranquility in the heart of Monopoli",
        "hero-subtitle": "Charming two-room apartment just steps from the sea, where ancient walls meet modern comfort.",
        "btn-discover": "Discover the Apartment",
        "spec-guests-title": "Guests",
        "spec-guests-text": "Up to 4 Guests",
        "spec-beds-title": "Beds",
        "spec-beds-text": "1 Double Bed, 1 Sofa Bed",
        "spec-size-title": "Surface area",
        "spec-location-title": "Sea Distance",
        "spec-location-text": "Only 200 meters away",
        "apt-title": "Our Apartment",
        "apt-subtitle": "Comfort and local Apulian style for an unforgettable stay in the historic center",
        "apt-heading": "A charming two-room flat with balcony",
        "apt-desc-1": "Charming two-room apartment located in the picturesque historic center of Monopoli. The flat stylishly combines original architecture—featuring thick stone walls that keep the rooms cool—with modern and functional furnishings chosen for the maximum comfort of our guests.",
        "apt-desc-2": "The location is ideal for immersing yourself in the authentic atmospheres of the Apulian city: walking along the characteristic white stone streets, in just 3 minutes you can reach the famous beach of Cala Porta Vecchia, local fish restaurants, artisan shops, and major historical monuments.",
        "apt-amenities-title": "Included Services:",
        "am-wifi": "High-speed Wi-Fi",
        "am-ac": "Air conditioning",
        "am-tv": "Smart TV LCD",
        "am-bath": "Full private bathroom",
        "am-balcony": "Balconies overlooking center",
        "am-kitchen": "Fully equipped kitchen",
        "gallery-title": "Photo Gallery",
        "gallery-subtitle": "Explore the apartment details and the wonders of Monopoli",
        "tab-all": "All",
        "tab-rooms": "Interiors",
        "tab-surroundings": "Monopoli & Dintorni",
        "loc-title": "Location",
        "loc-subtitle": "In the beating heart of the old town, steps away from the Monopoli sea",
        "loc-address-heading": "Address",
        "loc-how-title": "How to reach us",
        "loc-car-title": "By Car",
        "loc-car-desc": "From the A14 highway, exit Bari Nord/Sud, continue on the SS16 towards Brindisi until the Monopoli exit. The historic center is a ZTL (Limited Traffic Zone), but public free and paid parking spaces are available about 200 meters from the B&B.",
        "loc-train-title": "By Train",
        "loc-train-desc": "Monopoli railway station is well served by regional and intercity trains from Bari and Lecce. The B&B is about 1.2 km from the station, a 15-minute walk or a few minutes by taxi.",
        "loc-plane-title": "By Plane",
        "loc-plane-desc": "The nearest airports are Bari Palese (BRI) at 60 km and Brindisi Papola Casale (BDS) at 70 km. Both offer connections by train, shuttle bus, or rental car to Monopoli.",
        "loc-nearby-title": "Nearby attractions",
        "loc-poi-1": "Cala Porta Vecchia (Town Beach)",
        "loc-poi-2": "Cathedral of Maria SS. della Madia",
        "loc-poi-3": "Carlo V Castle",
        "loc-poi-4": "Monopoli Old Port",
        "loc-poi-5": "Piazza Giuseppe Garibaldi (Nightlife)",
        "btn-open-google-maps": "Open in Google Maps",
        "contact-title": "Request Information or Quote",
        "contact-subtitle": "Get in direct contact with us to receive personalized rates or clarify any doubts",
        "card-phone": "Phone / WhatsApp",
        "card-phone-note": "Also available for WhatsApp messages",
        "card-email-note": "We usually respond within a few hours",
        "card-hours": "Check-in / Out Hours",
        "card-hours-val": "Check-in: 2:00 PM - 8:00 PM<br>Check-out: by 10:30 AM",
        "wa-card-title": "Fast Response WhatsApp",
        "wa-card-desc": "In a hurry? Click the button below to directly open a pre-filled WhatsApp conversation with us.",
        "btn-whatsapp-chat": "Message us on WhatsApp",
        "label-name": "Full Name",
        "label-checkin": "Arrival Date (Check-in)",
        "label-checkout": "Departure Date (Check-out)",
        "label-guests": "Number of Guests",
        "label-message": "Message / Quote Request",
        "btn-send": "Send Request",
        "success-title": "Request Received!",
        "success-desc": "Thank you for contacting us. We will reply to your email address as soon as possible.",
        "success-alternative": "If you prefer an immediate response, you can send the compiled details directly to WhatsApp:",
        "btn-send-wa": "Send via WhatsApp",
        "btn-new-msg": "Send another message",
        "footer-tagline": "Your cozy home in the historic center of Monopoli. The charm of Apulia steps away from the Adriatic Sea.",
        "footer-links-title": "Quick Links",
        "footer-contacts-title": "Contacts",
        "footer-rights": "All rights reserved.",
        "wa-tooltip": "Need help? Message us!"
    }
};

// Global variables
let currentLanguage = 'it';
let activeSlideIndex = 0;
let activeGalleryCategory = 'all';
let currentLightboxImages = [];
let currentLightboxIndex = 0;

// Initialize Lucide Icons
function initLucide() {
    if (window.lucide) {
        window.lucide.createIcons();
    }
}

// Language Switcher Functionality
function setLanguage(lang) {
    currentLanguage = lang;
    document.documentElement.lang = lang;
    
    // Toggle button text
    const langBtnText = document.getElementById('lang-text');
    if (langBtnText) {
        langBtnText.textContent = lang === 'it' ? 'EN' : 'IT';
    }
    
    // Translate all elements with data-i18n
    const elementsToTranslate = document.querySelectorAll('[data-i18n]');
    elementsToTranslate.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            // Check if element has HTML content or plain text
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[lang][key];
            } else if (key === 'card-hours-val') {
                element.innerHTML = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });

    // Rerender gallery to update captions
    renderGallery(activeGalleryCategory);
}

// Mobile Menu Functionality
const menuToggleBtn = document.getElementById('menu-toggle-btn');
const mobileNav = document.getElementById('mobile-nav');
const menuIcon = document.getElementById('menu-icon');

function toggleMobileMenu() {
    mobileNav.classList.toggle('open');
    const isOpen = mobileNav.classList.contains('open');
    if (isOpen) {
        menuIcon.setAttribute('data-lucide', 'x');
    } else {
        menuIcon.setAttribute('data-lucide', 'menu');
    }
    initLucide();
}

if (menuToggleBtn && mobileNav) {
    menuToggleBtn.addEventListener('click', toggleMobileMenu);
    
    // Close mobile menu on link click
    const mobileLinks = document.querySelectorAll('.mobile-link');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileNav.classList.remove('open');
            menuIcon.setAttribute('data-lucide', 'menu');
            initLucide();
        });
    });
}

// Header Scroll Shadow
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (header) {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }
    
    // Update active nav link based on scroll position
    updateActiveNavLink();
});

function updateActiveNavLink() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let currentSectionId = 'home';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            currentSectionId = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSectionId}`) {
            link.classList.add('active');
        }
    });
}

// Room Slider (Carousel)
const slides = document.querySelectorAll('#room-slider .slide');
const sliderDotsContainer = document.getElementById('slider-dots');
const sliderPrevBtn = document.getElementById('slider-prev-btn');
const sliderNextBtn = document.getElementById('slider-next-btn');

function initSlider() {
    if (!slides.length) return;
    
    // Create dots
    sliderDotsContainer.innerHTML = '';
    slides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('slider-dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => showSlide(index));
        sliderDotsContainer.appendChild(dot);
    });
    
    if (sliderPrevBtn) {
        sliderPrevBtn.addEventListener('click', () => {
            let nextIndex = activeSlideIndex - 1;
            if (nextIndex < 0) nextIndex = slides.length - 1;
            showSlide(nextIndex);
        });
    }
    
    if (sliderNextBtn) {
        sliderNextBtn.addEventListener('click', () => {
            let nextIndex = (activeSlideIndex + 1) % slides.length;
            showSlide(nextIndex);
        });
    }

    // Auto-advance slide every 5 seconds
    setInterval(() => {
        let nextIndex = (activeSlideIndex + 1) % slides.length;
        showSlide(nextIndex);
    }, 5000);
}

function showSlide(index) {
    slides[activeSlideIndex].classList.remove('active');
    
    const dots = document.querySelectorAll('.slider-dot');
    if (dots.length) {
        dots[activeSlideIndex].classList.remove('active');
    }
    
    activeSlideIndex = index;
    slides[activeSlideIndex].classList.add('active');
    if (dots.length) {
        dots[activeSlideIndex].classList.add('active');
    }
}

// Gallery rendering and filtering
const galleryGrid = document.getElementById('gallery-grid');
const tabButtons = document.querySelectorAll('.gallery-tabs .tab-btn');

function renderGallery(category = 'all') {
    if (!galleryGrid) return;
    
    galleryGrid.innerHTML = '';
    activeGalleryCategory = category;
    
    const filtered = category === 'all' 
        ? galleryImages 
        : galleryImages.filter(img => img.category === category);
        
    filtered.forEach(img => {
        const item = document.createElement('div');
        item.classList.add('gallery-item');
        item.dataset.id = img.id;
        
        const titleText = img.title[currentLanguage] || img.title;
        
        item.innerHTML = `
            <img src="${img.url}" alt="${titleText}" loading="lazy">
            <div class="gallery-item-overlay">
                <span class="gallery-item-title">${titleText}</span>
            </div>
        `;
        
        item.addEventListener('click', () => openLightbox(img.id, filtered));
        galleryGrid.appendChild(item);
    });
}

function initGalleryTabs() {
    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            tabButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const category = btn.getAttribute('data-category');
            renderGallery(category);
        });
    });
}

// Lightbox Modal Functionality
const lightboxModal = document.getElementById('lightbox-modal');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxCaption = document.getElementById('lightbox-caption');
const lightboxCloseBtn = document.getElementById('lightbox-close-btn');
const lightboxPrevBtn = document.getElementById('lightbox-prev-btn');
const lightboxNextBtn = document.getElementById('lightbox-next-btn');

function openLightbox(imageId, imageList) {
    currentLightboxImages = imageList;
    currentLightboxIndex = currentLightboxImages.findIndex(img => img.id === imageId);
    
    updateLightboxContent();
    lightboxModal.classList.add('open');
    document.body.style.overflow = 'hidden'; // Stop scroll
}

function closeLightbox() {
    lightboxModal.classList.remove('open');
    document.body.style.overflow = ''; // Resume scroll
}

function updateLightboxContent() {
    const img = currentLightboxImages[currentLightboxIndex];
    if (!img) return;
    
    lightboxImg.src = img.url;
    const titleText = img.title[currentLanguage] || img.title;
    lightboxImg.alt = titleText;
    lightboxCaption.textContent = titleText;
}

if (lightboxCloseBtn) {
    lightboxCloseBtn.addEventListener('click', closeLightbox);
    // Click outside image to close
    lightboxModal.addEventListener('click', (e) => {
        if (e.target === lightboxModal || e.target.classList.contains('lightbox-content')) {
            closeLightbox();
        }
    });
}

if (lightboxPrevBtn && lightboxNextBtn) {
    lightboxPrevBtn.addEventListener('click', () => {
        currentLightboxIndex = currentLightboxIndex - 1;
        if (currentLightboxIndex < 0) currentLightboxIndex = currentLightboxImages.length - 1;
        updateLightboxContent();
    });
    
    lightboxNextBtn.addEventListener('click', () => {
        currentLightboxIndex = (currentLightboxIndex + 1) % currentLightboxImages.length;
        updateLightboxContent();
    });
}

// Keyboard controls for lightbox
document.addEventListener('keydown', (e) => {
    if (!lightboxModal.classList.contains('open')) return;
    
    if (e.key === 'Escape') {
        closeLightbox();
    } else if (e.key === 'ArrowLeft') {
        lightboxPrevBtn.click();
    } else if (e.key === 'ArrowRight') {
        lightboxNextBtn.click();
    }
});

// Contact Form and WhatsApp message drafting
const bookingForm = document.getElementById('booking-form');
const formSuccess = document.getElementById('form-success');
const sendSuccessWaBtn = document.getElementById('send-success-wa');
const resetFormBtn = document.getElementById('reset-form-btn');

if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Grab inputs
        const name = document.getElementById('form-name').value;
        const email = document.getElementById('form-email').value;
        const checkin = document.getElementById('form-checkin').value;
        const checkout = document.getElementById('form-checkout').value;
        const guests = document.getElementById('form-guests').value;
        const message = document.getElementById('form-message').value;
        
        // Simple form validation is handled by HTML5 attributes
        
        // Format date strings for readability if provided
        const checkinStr = checkin ? new Date(checkin).toLocaleDateString(currentLanguage === 'it' ? 'it-IT' : 'en-US') : 'N/D';
        const checkoutStr = checkout ? new Date(checkout).toLocaleDateString(currentLanguage === 'it' ? 'it-IT' : 'en-US') : 'N/D';
        
        // Construct the WhatsApp message draft
        let waText = '';
        if (currentLanguage === 'it') {
            waText = `Ciao! Mi chiamo ${name}. Vorrei fare una richiesta per il B&B Il Gabbiano.\n\n` +
                     `- Email di contatto: ${email}\n` +
                     `- Arrivo: ${checkinStr}\n` +
                     `- Partenza: ${checkoutStr}\n` +
                     `- Numero di Ospiti: ${guests}\n\n` +
                     `Messaggio:\n"${message}"`;
        } else {
            waText = `Hello! My name is ${name}. I would like to make an inquiry for B&B Il Gabbiano.\n\n` +
                     `- Contact Email: ${email}\n` +
                     `- Check-in: ${checkinStr}\n` +
                     `- Check-out: ${checkoutStr}\n` +
                     `- Guests: ${guests}\n\n` +
                     `Inquiry details:\n"${message}"`;
        }
        
        // Set the link on the success WhatsApp button
        const encodedText = encodeURIComponent(waText);
        sendSuccessWaBtn.href = `https://wa.me/393389290144?text=${encodedText}`;
        
        // Show success visual state
        bookingForm.classList.add('hidden');
        formSuccess.classList.remove('hidden');
    });
}

if (resetFormBtn) {
    resetFormBtn.addEventListener('click', () => {
        bookingForm.reset();
        bookingForm.classList.remove('hidden');
        formSuccess.classList.add('hidden');
    });
}

// Language Toggle button click listener
const langBtn = document.getElementById('lang-btn');
if (langBtn) {
    langBtn.addEventListener('click', () => {
        const targetLang = currentLanguage === 'it' ? 'en' : 'it';
        setLanguage(targetLang);
    });
}

// Page load initialization
document.addEventListener('DOMContentLoaded', () => {
    initLucide();
    initSlider();
    initGalleryTabs();
    renderGallery('all');
    
    // Set dates default min limits in form to current date
    const checkinInput = document.getElementById('form-checkin');
    const checkoutInput = document.getElementById('form-checkout');
    if (checkinInput && checkoutInput) {
        const today = new Date().toISOString().split('T')[0];
        checkinInput.min = today;
        
        checkinInput.addEventListener('change', () => {
            checkoutInput.min = checkinInput.value;
        });
    }
});
