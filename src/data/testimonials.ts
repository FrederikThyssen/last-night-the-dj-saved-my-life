export type Testimonial = {
  id: string;
  name: string;
  event: string;
  date: string;
  rating: number;
  comment: string;
  avatar: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sophie & Julien",
    event: "Mariage",
    date: "Juin 2024",
    rating: 5,
    comment:
      "FredMusic a rendu notre mariage absolument magique. Il a su lire l'ambiance tout au long de la soirée et tout le monde était sur la piste. On l'a vu échanger avec nos invités pour ajuster sa playlist en temps réel. Merci infiniment !",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
  },
  {
    id: "2",
    name: "Thomas R.",
    event: "Anniversaire 30 ans",
    date: "Mars 2024",
    rating: 5,
    comment:
      "Soirée exceptionnelle pour mes 30 ans ! Fred a mixé pendant 5h sans jamais laisser la piste se vider. Les jeux de lumières étaient top, l'ambiance était incroyable. Je recommande les yeux fermés !",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
  },
  {
    id: "3",
    name: "Camille & Antoine",
    event: "Mariage",
    date: "Septembre 2024",
    rating: 5,
    comment:
      "Un professionnalisme sans faille du premier contact jusqu'à la fin de la soirée. Fred avait pris le temps de bien comprendre nos goûts musicaux et le résultat était parfait. Nos invités ont adoré !",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
  },
  {
    id: "4",
    name: "Marc D.",
    event: "Soirée d'entreprise",
    date: "Novembre 2023",
    rating: 5,
    comment:
      "FredMusic est intervenu pour notre soirée company annuelle. Très professionnel, ponctuel, tenue impeccable. La musique était parfaitement adaptée à notre événement corporate. Notre équipe a passé une soirée mémorable.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",
  },
  {
    id: "5",
    name: "Léa & Mélissa",
    event: "EVJF",
    date: "Juillet 2024",
    rating: 5,
    comment:
      "On a organisé un EVJF surprise et Fred a fait le show ! Il a animé toute la soirée avec énergie et bonne humeur. Les animations sont sympas, l'ambiance était au top. La future mariée a adoré !",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&q=80",
  },
  {
    id: "6",
    name: "Patrick & Marie-Claire",
    event: "Anniversaire 50 ans",
    date: "Octobre 2023",
    rating: 5,
    comment:
      "FredMusic a su parfaitement mélanger les musiques de notre époque avec les hits actuels pour que petits et grands dansent ensemble. Un vrai moment de partage familial. Bravo et merci !",
    avatar: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=100&q=80",
  },
];
