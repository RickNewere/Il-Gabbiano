export interface Room {
  id: string;
  name: string;
  description: string;
  descriptionEn: string;
  price: number;
  capacity: number;
  size: number;
  beds: string;
  bedsEn: string;
  amenities: string[];
  amenitiesEn: string[];
  images: string[];
  airbnbUrl: string;
}

export const rooms: Room[] = [
  {
    id: '1',
    name: 'Il Gabbiano B&B',
    description: 'Incantevole bilocale nel centro storico di Monopoli, a pochi metri dal mare! Scopri questo splendido bilocale nel cuore del centro storico di Monopoli, perfetto per vivere l\'atmosfera autentica della città. A pochi passi dal mare, l\'appartamento unisce il fascino delle antiche mura con il comfort moderno. Ideale per chi cerca relax, vicinanza a ristoranti tipici, boutique e spiagge incantevoli. Un angolo di tranquillità con tutto a portata di mano!',
    descriptionEn: 'Charming two-room apartment in the historic center of Monopoli, just a few meters from the sea! Discover this beautiful apartment in the heart of Monopoli\'s historic center, perfect for experiencing the authentic atmosphere of the city. Just steps from the sea, the apartment combines the charm of ancient walls with modern comfort. Ideal for those seeking relaxation, proximity to typical restaurants, boutiques, and enchanting beaches. A corner of tranquility with everything at your fingertips!',
    price: 90,
    capacity: 4,
    size: 65,
    beds: '1 letto matrimoniale e 1 divano letto',
    bedsEn: '1 double bed and 1 sofa bed',
    amenities: ['Wi-Fi gratuito', 'Aria condizionata', 'TV a schermo piatto', 'Bagno privato', 'Asciugacapelli', 'Set di cortesia', 'Balconi vista sul centro storico'],
    amenitiesEn: ['Free Wi-Fi', 'Air conditioning', 'Flat-screen TV', 'Private bathroom', 'Hairdryer', 'Courtesy set', 'Balconies overlooking the historic center'],
    images: [
      'https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    ],
    airbnbUrl: 'https://it.airbnb.com/rooms/1317966183520064227?_set_bev_on_new_domain=1741519015_EAZWJlZmQwNDIxNj&source_impression_id=p3_1741519015_P3yshf261ft95-iU'
  }
];