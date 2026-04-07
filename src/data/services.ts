export type Service = {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  image: string;
  icon: string;
  features: string[];
  startingPrice: string;
  highlights: { label: string; value: string }[];
};

export const services: Service[] = [
  {
    id: "mariages",
    slug: "mariages",
    title: "Mariages",
    subtitle: "Le plus beau jour de votre vie, sublimé par la musique",
    description:
      "DJ pour votre mariage, de l'apéritif jusqu'au bout de la nuit. Un set sur-mesure pour accompagner chaque moment de votre journée.",
    longDescription:
      "Votre mariage est le moment le plus précieux de votre vie. La musique est le fil rouge de cette journée inoubliable. Du vin d'honneur à la dernière danse, je crée une ambiance unique et personnalisée qui correspond parfaitement à votre histoire. Ensemble, nous construisons votre playlist idéale, en mêlant vos morceaux préférés aux classiques qui font danser tous vos invités, petits et grands.",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=80",
    icon: "Heart",
    features: [
      "Consultation gratuite et personnalisée",
      "Sound check avant la cérémonie",
      "Sonorisation vin d'honneur & salle de réception",
      "Eclairage LED scène dancefloor",
      "Animation de soirée et mix en direct",
      "Micro sans fil pour discours & toast",
      "Playlist 100% personnalisée",
      "Backup matériel inclus",
    ],
    startingPrice: "À partir de 800€",
    highlights: [
      { label: "Durée", value: "Jusqu'à 8h de prestation" },
      { label: "Invités", value: "De 50 à 500 personnes" },
      { label: "Devis", value: "Gratuit et sans engagement" },
    ],
  },
  {
    id: "anniversaires",
    slug: "anniversaires",
    title: "Anniversaires",
    subtitle: "Fêtez chaque âge avec la musique qui vous ressemble",
    description:
      "18 ans, 30 ans, 50 ans... Chaque anniversaire mérite une fête à la hauteur. Ambiance garantie pour toutes les générations.",
    longDescription:
      "Un anniversaire, c'est l'occasion de rassembler ses proches et de créer des souvenirs impérissables. Que vous fêtiez vos 18 ans en mode clubbing, vos 40 ans en ambiance lounge ou vos 60 ans avec les grands classiques, j'adapte mon set à vos envies et à votre génération. La fête commence dès votre accord !",
    image:
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=1200&q=80",
    icon: "Cake",
    features: [
      "Mix adapté à toutes les générations",
      "Animation et gestion de l'ambiance",
      "Effets lumineux et jeux de lumières",
      "Karaoké en option",
      "Machine à fumée et confettis",
      "Soirée thématique sur demande",
      "Playlist collaborative avec les invités",
      "Installation complète incluse",
    ],
    startingPrice: "À partir de 500€",
    highlights: [
      { label: "Durée", value: "De 3h à 6h de prestation" },
      { label: "Invités", value: "De 20 à 300 personnes" },
      { label: "Devis", value: "Gratuit et sans engagement" },
    ],
  },
  {
    id: "soirees",
    slug: "soirees",
    title: "Soirées & Fêtes",
    subtitle: "L'énergie d'un vrai DJ pour toutes vos soirées",
    description:
      "Soirées privées, fêtes entre amis, EVJF, EVG… Je crée l'ambiance parfaite pour chaque occasion festive.",
    longDescription:
      "Vous organisez une soirée privée, un EVJF ou un EVG mémorable ? Je suis votre partenaire pour une nuit de folie. Mon matériel professionnel et mon sens de l'ambiance garantissent une expérience sonore et visuelle hors du commun. Des premiers beats aux derniers mixs, la piste de danse ne se vide jamais.",
    image:
      "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1200&q=80",
    icon: "Music",
    features: [
      "Mix live toutes musiques",
      "Jeux de lumières professionnels",
      "Sono adaptée au lieu",
      "Animation EVJF / EVG sur demande",
      "Machine à fumée & stroboscope",
      "Playlist collaborative",
      "Set DJ de 2h à 6h",
      "Intervention en Île-de-France et régions",
    ],
    startingPrice: "À partir de 350€",
    highlights: [
      { label: "Durée", value: "De 2h à 6h de prestation" },
      { label: "Invités", value: "De 10 à 200 personnes" },
      { label: "Devis", value: "Gratuit et sans engagement" },
    ],
  },
  {
    id: "evenements-pro",
    slug: "evenements-pro",
    title: "Événements Pro",
    subtitle: "L'image sonore de votre entreprise entre de bonnes mains",
    description:
      "Soirées d'entreprise, lancements de produits, séminaires, galas… Une prestation professionnelle pour vos événements corporate.",
    longDescription:
      "Vos événements professionnels méritent une qualité sonore irréprochable et une ambiance maîtrisée. De la musique d'ambiance feutrée pour un cocktail d'entreprise au set énergique pour votre soirée de gala, j'adapte chaque prestation à votre image et à vos exigences. Discrétion, ponctualité et professionnalisme sont mes maîtres-mots.",
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200&q=80",
    icon: "Briefcase",
    features: [
      "Habillage sonore cocktail & dîner",
      "Animation soirée de gala",
      "Matériel haut de gamme",
      "Tenue vestimentaire adaptée",
      "Devis et facture professionnels",
      "Coordination avec la salle et les traiteurs",
      "Prestation sur mesure et confidentielle",
      "Références sur demande",
    ],
    startingPrice: "À partir de 600€",
    highlights: [
      { label: "Durée", value: "De 2h à toute la nuit" },
      { label: "Invités", value: "De 30 à 1000 personnes" },
      { label: "Devis", value: "Gratuit et sans engagement" },
    ],
  },
];

export const getServiceBySlug = (slug: string): Service | undefined =>
  services.find((s) => s.slug === slug);
