export interface Testimonial {
  id: string;
  name: string;
  country: string;
  rating: number;
  comment: string;
  date: string;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Marco e Giulia',
    country: 'Italia',
    rating: 5,
    comment: 'Soggiorno perfetto! La posizione è ideale, a due passi dal mare e dal centro storico. La camera era pulita e confortevole, la colazione abbondante e il personale gentilissimo. Torneremo sicuramente!',
    date: 'Agosto 2023'
  },
  {
    id: '2',
    name: 'Sophie and John',
    country: 'Regno Unito',
    rating: 5,
    comment: 'Absolutely wonderful stay at Il Gabbiano. The location is perfect, the rooms are beautiful and clean, and the staff went above and beyond to make our stay special. The breakfast on the terrace with sea view was magical!',
    date: 'Luglio 2023'
  },
  {
    id: '3',
    name: 'Hans und Greta',
    country: 'Germania',
    rating: 4,
    comment: 'Sehr schönes B&B im Herzen von Monopoli. Die Zimmer sind geschmackvoll eingerichtet und sauber. Das Frühstück war ausgezeichnet mit lokalen Produkten. Nur der Parkplatz war etwas schwer zu finden.',
    date: 'Giugno 2023'
  },
  {
    id: '4',
    name: 'Pierre et Marie',
    country: 'Francia',
    rating: 5,
    comment: 'Un séjour inoubliable! L\'emplacement est parfait, la chambre était magnifique avec vue sur la mer, et le petit-déjeuner délicieux. Les propriétaires sont très accueillants et nous ont donné d\'excellents conseils pour visiter la région.',
    date: 'Settembre 2023'
  }
];