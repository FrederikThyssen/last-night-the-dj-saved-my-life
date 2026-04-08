# FredMusic — Documentation du POC

## Table des matières

- [Vue d'ensemble](#vue-densemble)
- [Stack technique](#stack-technique)
- [Structure du projet](#structure-du-projet)
- [Pages réalisées](#pages-réalisées)
- [Composants réutilisables](#composants-réutilisables)
- [Choix de design](#choix-de-design)
- [Démarrage rapide](#démarrage-rapide)
- [Ce qui reste à faire](#ce-qui-reste-à-faire)
- [Évolutions possibles](#évolutions-possibles)

---

## Vue d'ensemble

Ce projet est un **POC (Proof of Concept)** pour le site web d'un DJ professionnel. Il est entièrement **statique** (aucune base de données, aucune API) et utilise des données mockées pour illustrer l'interface. L'objectif est de poser une base solide, moderne et accessible, prête à être connectée à un backend.

Le site s'inspire fortement de [amaury-evenementiel.com](https://www.amaury-evenementiel.com/) tout en adoptant une identité visuelle propre à l'univers musical/DJ : dark theme, dégradés violet-ambre, typographie bold.

---

## Stack technique

| Technologie | Usage | Justification |
|---|---|---|
| **Next.js 16** (App Router) | Framework React fullstack | Standard industrie, excellent SEO, SSR/SSG natif |
| **TypeScript** | Typage statique | Sécurité, maintenabilité, DX |
| **Tailwind CSS v4** | Styles | Utilitaire first, aucun CSS custom nécessaire |
| **Framer Motion** | Animations (prêt à l'emploi) | Installé, à brancher si besoin |
| **Lucide React** | Icônes | Léger, cohérent, tree-shakable |
| **clsx + tailwind-merge** | Utilitaire `cn()` | Fusion de classes conditionnelles sans conflit |
| **Unsplash** | Images libres de droit | Qualité pro, usage gratuit |

---

## Structure du projet

```
src/
├── app/                            # App Router Next.js
│   ├── layout.tsx                  # Layout global (Header + Footer)
│   ├── page.tsx                    # Landing page
│   ├── globals.css                 # Variables CSS + config Tailwind
│   ├── avis/page.tsx               # Page avis clients
│   ├── contact/page.tsx            # Page contact + formulaire
│   ├── galerie/page.tsx            # Galerie photo avec filtre
│   ├── mentions-legales/page.tsx   # Mentions légales
│   └── prestations/
│       ├── mariages/page.tsx
│       ├── anniversaires/page.tsx
│       ├── soirees/page.tsx
│       └── evenements-pro/page.tsx
├── components/
│   ├── layout/
│   │   ├── Header.tsx              # Navigation responsive + mobile menu
│   │   └── Footer.tsx              # Pied de page multicolonne
│   ├── ui/                         # Composants atomiques réutilisables
│   │   ├── Button.tsx              # Bouton multi-variantes (primary/secondary/outline/ghost)
│   │   ├── SectionTitle.tsx        # Titre de section standardisé
│   │   ├── ServiceCard.tsx         # Carte de prestation avec image + hover
│   │   ├── TestimonialCard.tsx     # Carte d'avis client
│   │   └── ContactForm.tsx         # Formulaire de contact avec validation
│   └── sections/                   # Blocs de page composables
│       ├── HeroSection.tsx         # Section héro plein écran
│       ├── ServicesSection.tsx     # Grille des prestations
│       ├── AboutSection.tsx        # Présentation du DJ
│       ├── TestimonialsSection.tsx # Carrousel/grille d'avis
│       ├── CtaSection.tsx          # Appel à l'action récurrent
│       ├── PrestationPageLayout.tsx # Template réutilisé pour chaque page prestation
│       └── GalleryClient.tsx       # Galerie interactive avec filtre et lightbox
├── data/                           # Données mockées (remplacées par API)
│   ├── services.ts                 # 4 prestations avec tous leurs détails
│   ├── testimonials.ts             # 6 témoignages clients
│   └── gallery.ts                  # 12 photos avec catégories
└── lib/
    └── utils.ts                    # Fonction cn() pour Tailwind
```

---

## Pages réalisées

### `/` — Landing page
Composition de sections empilées :
- **HeroSection** : full-screen avec image DJ, titre bold, stats (200+ événements, 5★, 7 ans), CTA double
- **ServicesSection** : grille 2×2 des 4 prestations avec `ServiceCard`
- **AboutSection** : biographie + points forts en grid 2 colonnes avec image
- **TestimonialsSection** : 3 avis + résumé de note globale
- **CtaSection** : appel à l'action avec téléphone cliquable

### `/prestations/mariages` · `/anniversaires` · `/soirees` · `/evenements-pro`
Toutes générées depuis le même template `PrestationPageLayout` :
- Hero avec image de fond + breadcrumb
- Bande de statistiques (durée, nombre d'invités, devis)
- Description longue + liste des inclusions
- Section témoignages
- Prestations suggérées
- CTA

### `/galerie`
- Filtres par catégorie (Tout, Mariages, Anniversaires, Soirées, Pro)
- Grille masonry-like responsive
- Lightbox client-side (click pour agrandir + fermeture overlay)

### `/avis`
- Note globale 5/5 mise en avant
- Grille de tous les témoignages
- Note sur l'intégration future (Google Business, Mariages.net)

### `/contact`
- Formulaire complet : nom, email, téléphone, type d'événement, date, nombre d'invités, message
- Validation côté client (sans librairie externe)
- Message de confirmation post-envoi
- Coordonnées + réseaux sociaux

### `/mentions-legales`
Conformité RGPD minimale, mentions données personnelles.

---

## Composants réutilisables

### `Button`
```tsx
<Button href="/contact" variant="primary" size="lg">
  Demander un devis
</Button>
```
**Variantes** : `primary` (violet gradient) · `secondary` (ambre) · `outline` · `ghost`  
**Tailles** : `sm` · `md` · `lg`  
Supporte `href` (rendu en `<Link>`) ou `onClick` (rendu en `<button>`).

### `SectionTitle`
```tsx
<SectionTitle
  tag="Mes prestations"
  title="Pour chaque moment, une ambiance"
  subtitle="Description optionnelle..."
  centered={true}
/>
```

### `ServiceCard`
Reçoit un objet `Service` complet. Gère : image avec zoom au hover, icône, prix de départ, lien vers la page détail.

### `TestimonialCard`
Reçoit un objet `Testimonial`. Affiche : étoiles, citation, avatar, nom et contexte.

### `ContactForm`
Client component autonome avec état interne. Prêt à être branché sur une API via fetch/axios.

### `PrestationPageLayout`
Template de page pour les 4 prestations. Reçoit un objet `Service` + services connexes.

---

## Choix de design

### Palette de couleurs
| Rôle | Couleur | Tailwind |
|---|---|---|
| Fond principal | `#080810` | `bg-[#080810]` |
| Fond section alternée | `#0a0a0f` | `bg-zinc-950` |
| Fond section 2 | `#000000` | `bg-black` |
| Accent principal | Violet `#7c3aed` | `violet-600` |
| Accent secondaire | Ambre `#f59e0b` | `amber-500` |
| Texte principal | `#f1f5f9` | `slate-100` |
| Texte secondaire | `#9ca3af` | `gray-400` |

### Typographie
Police système sans-serif via Geist (Google Fonts). Titres en `font-black` (900), sous-titres `font-bold` (700), corps `font-normal`.

### UX & accessibilité
- Menu mobile avec `aria-expanded` et `aria-label`
- Formulaire avec `label` associés, `autocomplete`, messages d'erreur
- Images avec `alt` descriptifs
- Liens externes avec `rel="noopener noreferrer"`
- Scrollbar personnalisée, smooth scroll
- Header transparent → opaque au scroll

---

## Démarrage rapide

```bash
cd dj-website
npm install       # déjà fait
npm run dev       # http://localhost:3000
```

**Build de production :**
```bash
npm run build
npm run start
```

---

## Ce qui reste à faire

### Intégration backend
- [ ] Connecter le formulaire de contact à une API (ex: Next.js Route Handler + Resend/NodeMailer)
- [ ] Remplacer les données mockées par des appels API (Strapi, Directus, Sanity, Supabase...)
- [ ] Ajouter un système d'authentification pour un back-office (gestion des demandes de devis)

### Galerie
- [ ] Intégrer vraies photos du DJ (avec consentement)
- [ ] Connecter à un CMS ou Google Drive pour mise à jour facile

### Avis
- [ ] Intégrer les vrais avis Google Business via Google Places API
- [ ] Ou widget Mariages.net officiel

### SEO
- [ ] Ajouter sitemap.xml (automatique avec Next.js)
- [ ] Ajouter robots.txt
- [ ] Configurer Open Graph réel avec vraie photo
- [ ] Google Analytics ou Plausible

### Fonctionnalités
- [ ] Système de calendrier / disponibilités en ligne
- [ ] Paiement d'acompte en ligne (Stripe)

---

## Évolutions possibles

### Court terme
- **Système de réservation en ligne** : intégration Calendly ou système custom avec vérification de disponibilité
- **Player audio intégré** : SoundCloud ou mixcloud embed pour écouter des sets
- **Page "À propos" dédiée** : biographie longue, parcours, équipements

### Moyen terme
- **Blog / actualités** : partager des expériences, conseils pour son mariage musical
- **Calculateur de prix** : questionnaire interactif pour estimer le budget
- **Espace client** : suivi de la prestation, playlist collaborative, documents

### Long terme
- **Application mobile** : accès rapide pour les clients en cours de prestation
- **Système de parrainage** : clients satisfaits recommandent et gagnent une réduction
- **Multi-DJ** : si l'activité grandit, gérer plusieurs prestataires depuis la même plateforme

---

## Notes d'implémentation

- Toutes les pages sont **pré-rendues statiquement** (SSG) → excellent pour le SEO et les performances
- Le formulaire de contact est un **Client Component** (`"use client"`) pour gérer l'état
- La galerie avec lightbox est aussi un Client Component pour l'interactivité
- Les Server Components (par défaut) maximisent les performances et la sécurité
- Aucun CSS externe, tout passe par Tailwind — les quelques classes utilitaires sont dans `globals.css`
- Les données dans `src/data/` sont typées TypeScript → migration API facilitée
