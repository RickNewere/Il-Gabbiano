export interface GalleryImage {
  id: string;
  url: string;
  title: string;
  category: 'rooms' | 'exterior' | 'surroundings';
}

export const galleryImages: GalleryImage[] = [
  {
    id: '1',
    url: 'https://i.postimg.cc/J01vdMZZ/vista3.jpg',
    title: 'Camera con vista Centro Storico',
    category: 'rooms'
  },
  {
    id: '2',
    url: 'https://i.postimg.cc/mkjfbtBm/camera1.jpg',
    title: 'Camera da Letto',
    category: 'rooms'
  },
  {
    id: '3',
    url: 'https://i.postimg.cc/TYkMFLkw/salone3.jpg',
    title: 'Salone',
    category: 'rooms'
  },
  {
    id: '4',
    url: 'https://i.postimg.cc/QNbRKKZb/vista4.jpg',
    title: 'Vista sul Centro Storico',
    category: 'exterior'
  },
  {
    id: '6',
    url: 'https://i.postimg.cc/hvpwk61w/vista2.jpg',
    title: 'Vista sul Centro Storico',
    category: 'rooms'
  },
];