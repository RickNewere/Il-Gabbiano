export interface GalleryImage {
  id: string;
  url: string;
  title: string;
  category: 'rooms' | 'exterior' | 'surroundings';
}

export const galleryImages: GalleryImage[] = [
  {
    id: '1',
    url: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    title: 'Facciata del B&B',
    category: 'exterior'
  },
  {
    id: '2',
    url: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    title: 'Camera Vista Mare',
    category: 'rooms'
  },
  {
    id: '3',
    url: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    title: 'Suite Deluxe',
    category: 'rooms'
  },
  {
    id: '4',
    url: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    title: 'Balconi vista sul centro storico',
    category: 'exterior'
  },
  {
    id: '6',
    url: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    title: 'Centro storico di Monopoli',
    category: 'surroundings'
  },
  {
    id: '7',
    url: 'https://images.unsplash.com/photo-1499678329028-101435549a4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    title: 'Spiaggia di Monopoli',
    category: 'surroundings'
  },
  {
    id: '8',
    url: 'https://images.unsplash.com/photo-1584132915807-fd1f5fbc078f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    title: 'Bagno privato',
    category: 'rooms'
  }
];