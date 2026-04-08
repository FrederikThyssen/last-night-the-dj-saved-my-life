export type GalleryItem = {
  id: string;
  src: string;
  alt: string;
  category: "mariage" | "anniversaire" | "soiree" | "evenement-pro";
  caption?: string;
};

export const galleryItems: GalleryItem[] = [
  {
    id: "1",
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
    alt: "Mariage élégant salle de réception",
    category: "mariage",
    caption: "Mariage - Château de Vaux, juin 2024",
  },
  {
    id: "2",
    src: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&q=80",
    alt: "DJ booth avec jeux de lumières",
    category: "soiree",
    caption: "Soirée privée - Paris, mars 2024",
  },
  {
    id: "3",
    src: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&q=80",
    alt: "Anniversaire festif avec ballons colorés",
    category: "anniversaire",
    caption: "Anniversaire 30 ans - Lyon, avril 2024",
  },
  {
    id: "4",
    src: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80",
    alt: "Soirée d'entreprise cocktail",
    category: "evenement-pro",
    caption: "Soirée corporate - Bordeaux, novembre 2023",
  },
  {
    id: "5",
    src: "https://static.wixstatic.com/media/1c8254_e78aa1b657014274b016378b49f5ae49~mv2.jpg/v1/fill/w_1796,h_858,al_c,q_85,enc_avif,quality_auto/1c8254_e78aa1b657014274b016378b49f5ae49~mv2.jpg",
    alt: "Console DJ professionnelle en action",
    category: "soiree",
    caption: "Festival privé - Marseille, août 2024",
  },
  {
    id: "6",
    src: "https://images.unsplash.com/photo-1549451371-64aa98a6f660?w=800&q=80",
    alt: "Dancefloor mariage avec invités qui dansent",
    category: "mariage",
    caption: "Mariage - Domaine les Bruyères, mai 2024",
  },
  {
    id: "7",
    src: "https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?w=800&q=80",
    alt: "Ambiance lumières colorées soirée",
    category: "soiree",
    caption: "EVJF - Paris, juillet 2024",
  },
  {
    id: "8",
    src: "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?w=800&q=80",
    alt: "Mariage romantique décoration florale",
    category: "mariage",
    caption: "Mariage - Provins, septembre 2024",
  },
  {
    id: "9",
    src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80",
    alt: "Soirée avec foule et lumières de scène",
    category: "soiree",
    caption: "Soirée thématique - Toulouse, février 2024",
  },
  {
    id: "10",
    src: "https://images.unsplash.com/photo-1496337589254-7e19d01cec44?w=800&q=80",
    alt: "Buffet cocktail événementiel élégant",
    category: "evenement-pro",
    caption: "Lancement produit - Paris, octobre 2023",
  },
  {
    id: "11",
    src: "https://images.unsplash.com/photo-1437719417032-8595fd9e9dc6?w=800&q=80",
    alt: "Anniversaire surprise déco guirlandes",
    category: "anniversaire",
    caption: "Anniversaire 18 ans - Nice, décembre 2023",
  },
  {
    id: "12",
    src: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&q=80",
    alt: "DJ en action concert plein air",
    category: "soiree",
    caption: "Soirée plein air - Nantes, juin 2024",
  },
];

export const galleryCategories = [
  { id: "all", label: "Tout voir" },
  { id: "mariage", label: "Mariages" },
  { id: "anniversaire", label: "Anniversaires" },
  { id: "soiree", label: "Soirées" },
  { id: "evenement-pro", label: "Événements Pro" },
] as const;
