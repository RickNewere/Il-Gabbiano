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
        "btn-request-quote": "Richiedi Preventivo",
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
        "btn-request-quote": "Request a Quote",
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
    },
    fr: {
        "menu-home": "Accueil",
        "menu-apartment": "L'Appartement",
        "menu-gallery": "Galerie",
        "menu-location": "Emplacement",
        "menu-contact": "Contact",
        "btn-book-airbnb": "Réserver sur Airbnb",
        "btn-request-quote": "Demander un Devis",
        "hero-badge": "Monopoli (BA), Pouilles",
        "hero-title": "Un havre de paix au cœur de Monopoli",
        "hero-subtitle": "Charmant appartement de deux pièces à quelques mètres de la mer, où le charme des vieux murs rencontre le confort moderne.",
        "btn-discover": "Découvrir l'Appartement",
        "spec-guests-title": "Voyageurs",
        "spec-guests-text": "Jusqu'à 4 Personnes",
        "spec-beds-title": "Lits",
        "spec-beds-text": "1 Lit Double, 1 Canapé-lit",
        "spec-size-title": "Superficie",
        "spec-location-title": "Distance Mer",
        "spec-location-text": "À seulement 200 mètres",
        "apt-title": "Notre Appartement",
        "apt-subtitle": "Confort et style typique des Pouilles pour un séjour inoubliable dans le centre historique",
        "apt-heading": "Un appartement de charme avec balcon",
        "apt-desc-1": "Charmant appartement de deux pièces situé dans le pittoresque centre historique de Monopoli. Le logement allie avec style l'architecture d'origine, caractérisée par des murs épais qui gardent les pièces fraîches, et un mobilier moderne et fonctionnel choisi pour le plus grand confort de nos clients.",
        "apt-desc-2": "L'emplacement est idéal pour s'immerger dans l'atmosphère authentique de cette ville des Pouilles : en vous promenant dans les ruelles caractéristiques en pierre blanche, vous rejoindrez en seulement 3 minutes à pied la célèbre plage de Cala Porta Vecchia, les restaurants de poisson typiques, les boutiques d'artisans et les principaux monuments historiques.",
        "apt-amenities-title": "Services inclus :",
        "am-wifi": "Wi-Fi haut débit",
        "am-ac": "Climatisation",
        "am-tv": "Smart TV LCD",
        "am-bath": "Salle de bain privée",
        "am-balcony": "Balcons vue centre",
        "am-kitchen": "Cuisine équipée",
        "gallery-title": "Galerie Photos",
        "gallery-subtitle": "Découvrez les détails de l'appartement et les merveilles de Monopoli",
        "tab-all": "Toutes",
        "tab-rooms": "Intérieurs",
        "tab-surroundings": "Monopoli et Alentours",
        "loc-title": "Où nous trouver",
        "loc-subtitle": "Au cœur du centre historique, à deux pas de la mer de Monopoli",
        "loc-address-heading": "Adresse",
        "loc-how-title": "Comment s'y rendre",
        "loc-car-title": "En Voiture",
        "loc-car-desc": "Depuis l'autoroute A14, sortie Bari Nord/Sud, continuez sur la SS16 en direction de Brindisi jusqu'à la sortie Monopoli. Le centre historique est une zone à trafic limité (ZTL), mais des parkings publics gratuits et payants sont disponibles à environ 200 mètres du B&B.",
        "loc-train-title": "En Train",
        "loc-train-desc": "La gare de Monopoli est desservie par des trains régionaux et interurbains depuis Bari et Lecce. Le B&B se trouve à environ 1,2 km de la gare, soit 15 minutes à pied ou quelques minutes en taxi.",
        "loc-plane-title": "En Avion",
        "loc-plane-desc": "Les aéroports les plus proches sont Bari Palese (BRI) à 60 km et Brindisi Papola Casale (BDS) à 70 km. Tous deux proposent des liaisons en train, navette ou voiture de location vers Monopoli.",
        "loc-nearby-title": "À proximité",
        "loc-poi-1": "Cala Porta Vecchia (Plage de la ville)",
        "loc-poi-2": "Cathédrale Maria SS. della Madia",
        "loc-poi-3": "Château Charles V",
        "loc-poi-4": "Vieux Port de Monopoli",
        "loc-poi-5": "Piazza Giuseppe Garibaldi (Vie nocturne)",
        "btn-open-google-maps": "Ouvrir dans Google Maps",
        "contact-title": "Demander des Infos ou un Devis",
        "contact-subtitle": "Contactez-nous directement pour recevoir des tarifs personnalisés ou poser vos questions",
        "card-phone": "Téléphone / WhatsApp",
        "card-phone-note": "Aussi disponible pour messages WhatsApp",
        "card-email-note": "Nous répondons généralement sous quelques heures",
        "card-hours": "Horaires Arrivée / Départ",
        "card-hours-val": "Arrivée : 14h00 - 20h00<br>Départ : avant 10h30",
        "wa-card-title": "Réponse rapide WhatsApp",
        "wa-card-desc": "Vous êtes pressé ? Cliquez sur le bouton ci-dessous pour ouvrir directement une discussion WhatsApp pré-remplie.",
        "btn-whatsapp-chat": "Écrivez-nous sur WhatsApp",
        "label-name": "Nom et Prénom",
        "label-checkin": "Date d'Arrivée (Check-in)",
        "label-checkout": "Date de Départ (Check-out)",
        "label-guests": "Nombre de Voyageurs",
        "label-message": "Message / Demande de Devis",
        "btn-send": "Envoyer la Demande",
        "success-title": "Demande Reçue !",
        "success-desc": "Merci de nous avoir contactés. Nous vous répondrons par e-mail dans les plus brefs délais.",
        "success-alternative": "Si vous préférez une réponse immédiate, vous pouvez nous envoyer les détails directement sur WhatsApp :",
        "btn-send-wa": "Envoyer par WhatsApp",
        "btn-new-msg": "Envoyer un autre message",
        "footer-tagline": "Votre maison accueillante dans le centre historique de Monopoli. Le charme des Pouilles à deux pas de la mer Adriatique.",
        "footer-links-title": "Liens Rapides",
        "footer-contacts-title": "Contacts",
        "footer-rights": "Tous droits réservés.",
        "wa-tooltip": "Besoin d'aide ? Écrivez-nous !"
    },,
    es: {
        "menu-home": "Inicio",
        "menu-apartment": "El Apartamento",
        "menu-gallery": "Galería",
        "menu-location": "Ubicación",
        "menu-contact": "Contacto",
        "btn-book-airbnb": "Reservar en Airbnb",
        "btn-request-quote": "Solicitar Presupuesto",
        "hero-badge": "Monopoli (BA), Apulia",
        "hero-title": "Un oasis de tranquilidad en el corazón de Monopoli",
        "hero-subtitle": "Encantador apartamento de dos habitaciones a pocos metros del mar, donde el encanto de los muros antiguos se une al confort moderno.",
        "btn-discover": "Descubrir el Apartamento",
        "spec-guests-title": "Huéspedes",
        "spec-guests-text": "Hasta 4 Personas",
        "spec-beds-title": "Camas",
        "spec-beds-text": "1 Cama Doble, 1 Sofá Cama",
        "spec-size-title": "Superficie",
        "spec-location-title": "Distancia al Mar",
        "spec-location-text": "A solo 200 metros",
        "apt-title": "Nuestro Apartamento",
        "apt-subtitle": "Confort y estilo típico de Apulia para una estancia inolvidable en el centro histórico",
        "apt-heading": "Un apartamento con encanto y balcón",
        "apt-desc-1": "Encantador apartamento de dos habitaciones situado en el pintoresco centro histórico de Monopoli. El alojamiento combina con estilo la arquitectura original, caracterizada por gruesos muros que mantienen las habitaciones frescas, con un mobiliario moderno y funcional elegido para el máximo confort de nuestros huéspedes.",
        "apt-desc-2": "La ubicación es ideal para sumergirse en la atmósfera auténtica de la ciudad de Apulia: paseando por las características calles de piedra blanca, en solo 3 minutos a pie llegarás a la famosa playa de Cala Porta Vecchia, restaurantes típicos de pescado, tiendas de artesanía y los principales monumentos históricos.",
        "apt-amenities-title": "Servicios incluidos:",
        "am-wifi": "Wi-Fi de alta velocidad",
        "am-ac": "Aire acondicionado",
        "am-tv": "Smart TV LCD",
        "am-bath": "Baño privado completo",
        "am-balcony": "Balcones con vista al centro",
        "am-kitchen": "Cocina equipada",
        "gallery-title": "Galería de Fotos",
        "gallery-subtitle": "Descubre los detalles del apartamento y las maravillas de Monopoli",
        "tab-all": "Todas",
        "tab-rooms": "Interiores",
        "tab-surroundings": "Monopoli y Alrededores",
        "loc-title": "Dónde Estamos",
        "loc-subtitle": "En el corazón del centro histórico, a dos pasos del mar de Monopoli",
        "loc-address-heading": "Dirección",
        "loc-how-title": "Cómo llegar",
        "loc-car-title": "En Coche",
        "loc-car-desc": "Desde la autopista A14, salida Bari Nord/Sud, continuar por la SS16 en dirección Brindisi hasta la salida Monopoli. El centro histórico es una Zona de Tráfico Limitado (ZTL), pero hay aparcamientos públicos gratuitos y de pago a unos 200 metros del B&B.",
        "loc-train-title": "En Tren",
        "loc-train-desc": "La estación de tren de Monopoli está conectada con trenes regionales e interurbanos desde Bari y Lecce. El B&B está a 1,2 km de la estación, unos 15 minutos a pie o unos minutos en taxi.",
        "loc-plane-title": "En Avión",
        "loc-plane-desc": "Los aeropuertos más cercanos son Bari Palese (BRI) a 60 km y Brindisi Papola Casale (BDS) a 70 km. Ambos ofrecen conexiones en tren, autobús de enlace o coche de alquiler a Monopoli.",
        "loc-nearby-title": "En las cercanías",
        "loc-poi-1": "Cala Porta Vecchia (Playa urbana)",
        "loc-poi-2": "Catedral de Maria SS. della Madia",
        "loc-poi-3": "Castillo de Carlos V",
        "loc-poi-4": "Puerto Viejo de Monopoli",
        "loc-poi-5": "Piazza Giuseppe Garibaldi (Vida nocturna)",
        "btn-open-google-maps": "Abrir en Google Maps",
        "contact-title": "Solicitar Información o Presupuesto",
        "contact-subtitle": "Ponte en contacto directo con nosotros para recibir tarifas personalizadas o aclarar cualquier duda",
        "card-phone": "Teléfono / WhatsApp",
        "card-phone-note": "También disponible para mensajes de WhatsApp",
        "card-email-note": "Normalmente respondemos en pocas horas",
        "card-hours": "Horario Entrada / Salida",
        "card-hours-val": "Entrada: 14:00 - 20:00<br>Salida: antes de las 10:30",
        "wa-card-title": "Respuesta Rápida WhatsApp",
        "wa-card-desc": "¿Tienes prisa? Haz clic en el botón de abajo para abrir una conversación de WhatsApp pre-redactada directamente con nosotros.",
        "btn-whatsapp-chat": "Escríbenos en WhatsApp",
        "label-name": "Nombre y Apellido",
        "label-checkin": "Fecha de Entrada (Check-in)",
        "label-checkout": "Fecha de Salida (Check-out)",
        "label-guests": "Número de Huéspedes",
        "label-message": "Mensaje / Solicitud de Presupuesto",
        "btn-send": "Enviar Solicitud",
        "success-title": "¡Solicitud Recibida!",
        "success-desc": "Gracias por contactarnos. Responderemos a tu dirección de correo electrónico lo antes posible.",
        "success-alternative": "Si prefieres una respuesta inmediata, puedes enviar los datos rellenados directamente por WhatsApp:",
        "btn-send-wa": "Enviar por WhatsApp",
        "btn-new-msg": "Enviar otro mensaje",
        "footer-tagline": "Tu acogedor hogar en el centro histórico de Monopoli. El encanto de Apulia a dos pasos del mar Adriático.",
        "footer-links-title": "Enlaces Rápidos",
        "footer-contacts-title": "Contactos",
        "footer-rights": "Todos los derechos reservados.",
        "wa-tooltip": "¿Necesitas ayuda? ¡Escríbenos!"
    },

    de: {
        "menu-home": "Startseite",
        "menu-apartment": "Das Apartment",
        "menu-gallery": "Galerie",
        "menu-location": "Lage",
        "menu-contact": "Kontakt",
        "btn-book-airbnb": "Auf Airbnb buchen",
        "btn-request-quote": "Angebot anfordern",
        "hero-badge": "Monopoli (BA), Apulien",
        "hero-title": "Eine Oase der Ruhe im Herzen von Monopoli",
        "hero-subtitle": "Bezaubernde Zweizimmerwohnung nur wenige Meter vom Meer entfernt, wo der Charme alter Mauern auf modernen Komfort trifft.",
        "btn-discover": "Entdecken Sie das Apartment",
        "spec-guests-title": "Gäste",
        "spec-guests-text": "Bis zu 4 Personen",
        "spec-beds-title": "Betten",
        "spec-beds-text": "1 Doppelbett, 1 Schlafsofa",
        "spec-size-title": "Fläche",
        "spec-location-title": "Entfernung zum Meer",
        "spec-location-text": "Nur 200 Meter entfernt",
        "apt-title": "Unser Apartment",
        "apt-subtitle": "Komfort und typisch apulischer Stil für einen unvergesslichen Aufenthalt in der Altstadt",
        "apt-heading": "Eine charmante Zweizimmerwohnung mit Balkon",
        "apt-desc-1": "Charmante Zweizimmerwohnung im malerischen historischen Zentrum von Monopoli. Die Unterkunft verbindet auf stilvolle Weise die ursprüngliche Architektur mit dicken Mauern, die die Räume kühl halten, mit modernen und funktionellen Möbeln, die für den maximalen Komfort unserer Gäste ausgewählt wurden.",
        "apt-desc-2": "Die Lage ist ideal, um in die authentische Atmosphäre der apulischen Stadt einzutauchen: Bei einem Spaziergang durch die charakteristischen Gassen aus weißem Stein erreichen Sie in nur 3 Gehminuten den berühmten Strand Cala Porta Vecchia, typische Fischrestaurants, Kunsthandwerksläden und die wichtigsten historischen Denkmäler.",
        "apt-amenities-title": "Inklusive Leistungen:",
        "am-wifi": "Highspeed-WLAN",
        "am-ac": "Klimaanlage",
        "am-tv": "Smart-TV LCD",
        "am-bath": "Eigenes komplettes Badezimmer",
        "am-balcony": "Balkone mit Blick aufs Zentrum",
        "am-kitchen": "Ausgestattete Küche",
        "gallery-title": "Fotogalerie",
        "gallery-subtitle": "Sehen Sie sich die Details des Apartments und die Wunder von Monopoli an",
        "tab-all": "Alle",
        "tab-rooms": "Innenbereich",
        "tab-surroundings": "Monopoli und Umgebung",
        "loc-title": "Lage & Anfahrt",
        "loc-subtitle": "Im pulsierenden Herzen der Altstadt, nur wenige Schritte vom Meer von Monopoli entfernt",
        "loc-address-heading": "Adresse",
        "loc-how-title": "Anreise",
        "loc-car-title": "Mit dem Auto",
        "loc-car-desc": "Nehmen Sie auf der Autobahn A14 die Ausfahrt Bari Nord/Sud und fahren Sie auf der SS16 in Richtung Brindisi bis zur Ausfahrt Monopoli. Das historische Zentrum ist eine verkehrsberuhigte Zone (ZTL), aber es gibt bequeme kostenlose und kostenpflichtige Parkplätze ca. 200 Meter vom B&B entfernt.",
        "loc-train-title": "Mit dem Zug",
        "loc-train-desc": "Der Bahnhof von Monopoli wird von Regional- und Intercity-Zügen aus Bari und Lecce angefahren. Das B&B ist ca. 1,2 km vom Bahnhof entfernt, was in 15 Gehminuten oder in wenigen Minuten mit dem Taxi zu erreichen ist.",
        "loc-plane-title": "Mit dem Flugzeug",
        "loc-plane-desc": "Die nächstgelegenen Flughäfen sind Bari Palese (BRI) in ca. 60 km und Brindisi Papola Casale (BDS) in ca. 70 km Entfernung. Beide bieten Zugverbindungen, Shuttlebusse oder Mietwagen nach Monopoli.",
        "loc-nearby-title": "In der Umgebung",
        "loc-poi-1": "Cala Porta Vecchia (Stadtstrand)",
        "loc-poi-2": "Kathedrale Maria SS. della Madia",
        "loc-poi-3": "Schloss Karl V.",
        "loc-poi-4": "Alter Hafen von Monopoli",
        "loc-poi-5": "Piazza Giuseppe Garibaldi (Nachtleben)",
        "btn-open-google-maps": "In Google Maps öffnen",
        "contact-title": "Informationen oder Angebot anfordern",
        "contact-subtitle": "Kontaktieren Sie uns direkt, um personalisierte Preise zu erhalten oder eventuelle Fragen zu klären",
        "card-phone": "Telefon / WhatsApp",
        "card-phone-note": "Auch für WhatsApp-Nachrichten verfügbar",
        "card-email-note": "Wir antworten in der Regel innerhalb weniger Stunden",
        "card-hours": "Check-in / Check-out Zeiten",
        "card-hours-val": "Check-in: 14:00 - 20:00 Uhr<br>Check-out: bis 10:30 Uhr",
        "wa-card-title": "Schnelle Antwort über WhatsApp",
        "wa-card-desc": "Haben Sie es eilig? Klicken Sie auf die Schaltfläche unten, um direkt ein vorformuliertes WhatsApp-Gespräch mit uns zu eröffnen.",
        "btn-whatsapp-chat": "Schreiben Sie uns auf WhatsApp",
        "label-name": "Vor- und Nachname",
        "label-checkin": "Anreisedatum (Check-in)",
        "label-checkout": "Abreisedatum (Check-out)",
        "label-guests": "Anzahl der Gäste",
        "label-message": "Nachricht / Angebotsanfrage",
        "btn-send": "Anfrage senden",
        "success-title": "Anfrage erhalten!",
        "success-desc": "Vielen Dank für Ihre Kontaktaufnahme. Wir werden Ihnen so schnell wie möglich an die angegebene E-Mail-Adresse antworten.",
        "success-alternative": "Wenn Sie eine sofortige Antwort bevorzugen, können Sie die ausgefüllten Daten direkt über WhatsApp senden:",
        "btn-send-wa": "Über WhatsApp senden",
        "btn-new-msg": "Eine weitere Nachricht senden",
        "footer-tagline": "Ihr gemütliches Zuhause in der Altstadt von Monopoli. Der Charme Apuliens, nur wenige Schritte von der Adria entfernt.",
        "footer-links-title": "Nützliche Links",
        "footer-contacts-title": "Kontakte",
        "footer-rights": "Alle Rechte vorbehalten.",
        "wa-tooltip": "Brauchen Sie Hilfe? Schreiben Sie uns!"
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
    
    // Update main button text
    const langBtnText = document.getElementById('lang-text');
    if (langBtnText) {
        langBtnText.textContent = lang.toUpperCase();
    }

    // Update active class in dropdown options
    const options = document.querySelectorAll('.lang-opt');
    options.forEach(opt => {
        if (opt.getAttribute('data-lang') === lang) {
            opt.classList.add('active');
        } else {
            opt.classList.remove('active');
        }
    });
    
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

// Contact Form — invio automatico email via FormSubmit.co a riccardoranieri00@gmail.com
const bookingForm = document.getElementById('booking-form');
const formSuccess = document.getElementById('form-success');
const sendSuccessWaBtn = document.getElementById('send-success-wa');
const resetFormBtn = document.getElementById('reset-form-btn');

if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Raccolta dati
        const name    = document.getElementById('form-name').value.trim();
        const email   = document.getElementById('form-email').value.trim();
        const checkin = document.getElementById('form-checkin').value;
        const checkout= document.getElementById('form-checkout').value;
        const guests  = document.getElementById('form-guests').value;
        const message = document.getElementById('form-message').value.trim();

        // Formattazione date leggibili
        const fmtDate = (d) => d ? new Date(d + 'T12:00:00').toLocaleDateString('it-IT', { day:'2-digit', month:'2-digit', year:'numeric' }) : 'Non specificata';
        const checkinStr  = fmtDate(checkin);
        const checkoutStr = fmtDate(checkout);

        // Aggiorna l'oggetto email con le date dinamiche
        const subjectField = document.getElementById('form-subject');
        subjectField.value = `RICHIESTA APPARTAMENTO per il ${checkinStr} – ${checkoutStr}`;

        // Disabilita bottone durante l'invio
        const submitBtn = document.getElementById('submit-form-btn');
        submitBtn.disabled = true;
        submitBtn.querySelector('span').textContent = 'Invio in corso...';

        // Invio tramite FormSubmit AJAX
        const formData = new FormData(bookingForm);

        fetch(bookingForm.action, {
            method: 'POST',
            body: formData,
            headers: { 'Accept': 'application/json' }
        })
        .then(response => response.json())
        .then(data => {
            // ── LINK WHATSAPP DI RISERVA ───────────────────────────────────────
            const waText = `Ciao Riccardo! Mi chiamo ${name} e vorrei richiedere un preventivo per il B&B Il Gabbiano.\n\n` +
                           `✅ Check-in: ${checkinStr}\n` +
                           `✅ Check-out: ${checkoutStr}\n` +
                           `👤 Ospiti: ${guests}\n` +
                           `📧 Email: ${email}\n\n` +
                           `💬 "${message}"`;
            sendSuccessWaBtn.href = `https://wa.me/393389290144?text=${encodeURIComponent(waText)}`;

            // Mostra schermata di conferma
            bookingForm.classList.add('hidden');
            formSuccess.classList.remove('hidden');
        })
        .catch(error => {
            console.error('Errore invio form:', error);
            alert('Si è verificato un errore nell\'invio. Riprova o contattaci su WhatsApp.');
        })
        .finally(() => {
            submitBtn.disabled = false;
            submitBtn.querySelector('span').textContent = 'Invia Richiesta';
        });
    });
}

if (resetFormBtn) {
    resetFormBtn.addEventListener('click', () => {
        bookingForm.reset();
        bookingForm.classList.remove('hidden');
        formSuccess.classList.add('hidden');
    });
}

// Language Dropdown Selector Logic
const langBtn = document.getElementById('lang-btn');
const langDropdown = document.getElementById('lang-dropdown');
const langOpts = document.querySelectorAll('.lang-opt');

if (langBtn && langDropdown) {
    // Toggle dropdown on click
    langBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        langDropdown.classList.toggle('open');
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', () => {
        langDropdown.classList.remove('open');
    });

    // Language option click handlers
    langOpts.forEach(opt => {
        opt.addEventListener('click', () => {
            const selectedLang = opt.getAttribute('data-lang');
            setLanguage(selectedLang);
            langDropdown.classList.remove('open');
        });
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
