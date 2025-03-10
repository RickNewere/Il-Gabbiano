export interface Amenity {
  id: string;
  name: string;
  nameEn: string;
  description: string;
  descriptionEn: string;
  icon: string;
}

export const amenities: Amenity[] = [
  {
    id: '2',
    name: 'Wi-Fi gratuito',
    nameEn: 'Free Wi-Fi',
    description: 'Connessione Wi-Fi ad alta velocità in tutte le aree',
    descriptionEn: 'High-speed Wi-Fi connection in all areas',
    icon: 'wifi'
  },
  {
    id: '3',
    name: 'Aria condizionata',
    nameEn: 'Air conditioning',
    description: 'Tutte le camere sono dotate di aria condizionata regolabile',
    descriptionEn: 'All rooms are equipped with adjustable air conditioning',
    icon: 'airplay'
  },
  {
    id: '4',
    name: 'Balconi vista sul centro storico',
    nameEn: 'Balconies overlooking the historic center',
    description: 'Balconi con vista sul centro storico di Monopoli',
    descriptionEn: 'Balconies with views of Monopoli\'s historic center',
    icon: 'sun'
  },
  {
    id: '5',
    name: 'Servizio di pulizia',
    nameEn: 'Cleaning service',
    description: 'Pulizia delle camere e cambio biancheria',
    descriptionEn: 'Room cleaning and linen change',
    icon: 'bed'
  },
  {
    id: '6',
    name: 'Deposito bagagli',
    nameEn: 'Luggage storage',
    description: 'Possibilità di lasciare i bagagli prima del check-in e dopo il check-out',
    descriptionEn: 'Possibility to leave luggage before check-in and after check-out',
    icon: 'briefcase'
  },
  {
    id: '7',
    name: 'Assistenza turistica',
    nameEn: 'Tourist assistance',
    description: 'Informazioni e prenotazioni per escursioni e attività locali',
    descriptionEn: 'Information and bookings for local excursions and activities',
    icon: 'map'
  },
  {
    id: '8',
    name: 'Noleggio biciclette',
    nameEn: 'Bicycle rental',
    description: 'Biciclette disponibili per esplorare la città',
    descriptionEn: 'Bicycles available to explore the city',
    icon: 'bike'
  }
];