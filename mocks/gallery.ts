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
    id: '5',
    url: 'https://i.postimg.cc/hvpwk61w/vista2.jpg',
    title: 'Vista sul Centro Storico',
    category: 'rooms'
  },
  {
    id: '6',
    url: 'https://i.postimg.cc/c41GFMB2/salone1.jpg',
    title: 'Salone',
    category: 'rooms'
  },
  {
    id: '7',
    url: 'https://i.postimg.cc/GpjtH0vt/salone6.jpg',
    title: 'Salone TV',
    category: 'rooms'
  },
  {
    id: '8',
    url: 'https://i.postimg.cc/mgCtW1DQ/camera3.jpg',
    title: 'Letto',
    category: 'rooms'
  },
  {
    id: '9',
    url: 'https://i.postimg.cc/rpTzVy07/accessori.jpg',
    title: 'Accessori',
    category: 'rooms'
  },
  {
    id: '10',
    url: 'https://i.postimg.cc/BvsYxzwR/portavecchhia3.jpg',
    title: 'Porta Vecchia Estate',
    category: 'surroundings'
  },
  {
    id: '11',
    url: 'https://i.postimg.cc/hvh3X73j/portavecchia2.jpg',
    title: 'Porta Vecchia Estate Fronte',
    category: 'surroundings'
  },
  {
    id: '12',
    url: 'https://i.postimg.cc/7LVBXNFh/portoverde.jpg',
    title: 'Porto Verde',
    category: 'surroundings'
  },
  {
    id: '13',
    url: 'https://i.postimg.cc/fRYqSs5x/cattedrale.jpg',
    title: 'Cattedrale',
    category: 'surroundings'
  },
  {
    id: '14',
    url: 'https://i.postimg.cc/GhWSptPL/porto3.jpg',
    title: 'Porto',
    category: 'surroundings'
  },
  {
    id: '15',
    url: 'https://i.postimg.cc/mkqpC20S/porto.jpg',
    title: 'Porto di sera',
    category: 'surroundings'
  },
  {
    id: '16',
    url: 'https://i.postimg.cc/vHgNMfV2/porot2.jpg',
    title: 'Porto Estate',
    category: 'surroundings'
  },
  {
    id: '17',
    url: 'https://i.postimg.cc/mDgmnH4w/faro.jpg',
    title: 'Faro',
    category: 'surroundings'
  },
];