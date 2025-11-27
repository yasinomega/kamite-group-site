// controllers/pageController.js

/* ========= TEXTES LONGS KAMITE GROUP ========= */

const longTexts = {
  tagline: "Kamite Group SARL — Pour une Afrique forte, prospère et autonome.",

  motDuFondateur: `« Notre continent n’est pas en retard ; il est en gestation. Kamite Group est né de cette certitude : l’Afrique ne doit plus attendre qu’on la sauve, elle doit s’organiser, se transformer et se hisser au rang des puissances constructives.
Nous croyons en une Afrique connectée à ses valeurs, ambitieuse, bien gouvernée et compétitive à l’échelle mondiale. Chaque jour, à travers nos services, nos équipes et nos projets, nous bâtissons un futur où le Made in Africa n’est plus un slogan, mais une norme de qualité, de performance et d’innovation.
Kamite Group est plus qu’une entreprise. C’est un mouvement, une réponse à l’appel de notre époque. Rejoignez-nous dans ce combat noble : restaurer la dignité africaine par l'excellence. »
— Mokanga Oméga Yasin, Directeur Général`,

  presentationHistorique: `Kamite Group SARL est une entreprise congolaise dynamique, fondée sur une vision panafricaine et un engagement stratégique pour le développement durable de l’Afrique. Depuis sa création en 2019 à Kinshasa, RDC, Kamite Group n’a cessé de croître en proposant des solutions concrètes aux défis de plusieurs secteurs clés.
Lancée à partir d’un projet de salon de beauté et d’imprimerie, l’entreprise s’est rapidement diversifiée. Aujourd’hui, Kamite Group regroupe plusieurs départements complémentaires, tous portés par une même ambition : bâtir une Afrique forte, prospère et autonome.
Date de création : 2019 — Siège : Kinshasa (RDC).`,

  nosAtouts: `• Une équipe jeune, agile et formée aux standards internationaux.
• Une organisation intégrée favorisant les synergies entre départements.
• Une vision panafricaine et une ambition régionale soutenues par des partenariats solides.
• Capacité d’exécution opérationnelle, expertise terrain et réseau de partenaires locaux et internationaux.`,

  perspectivesDeveloppement: `Kamite Group ambitionne de devenir un acteur incontournable de la modernisation des secteurs clés en Afrique : transport, formation, services, communication et sous-traitance.
Objectifs : extension régionale, montée en gamme des services, développement industriel (agro-transformation) et export.`
};


/* ========= DÉPARTEMENTS ========= */

const departments = [
  {
    id: 'transport',
    title: 'Kamite Transport & Logistique',
    summary: 'Solutions de transport, gestion logistique et services adaptés aux besoins de votre entreprise.',
    cta: { label: 'Découvrir', href: '/services#transport' }
  },
  {
    id: 'prod',
    title: 'Kamite Prod & Événementiel',
    summary: "Organisation d’événements, production audiovisuelle et coordination opérationnelle.",
    cta: { label: 'En savoir plus', href: '/services#prod' }
  },
  {
    id: 'creation',
    title: 'Kamite Création & Impression',
    summary: 'Branding, conception graphique et impression professionnelle.',
    cta: { label: 'Nos services', href: '/services#creation' }
  },
  {
    id: 'formation',
    title: 'Kamite Formation & Sous-traitance',
    summary: 'Formations professionnelles, renforcement des capacités et solutions de sous-traitance.',
    cta: { label: 'Voir les programmes', href: '/services#formation' }
  },
  {
    id: 'industrie',
    title: 'Kamite Industrie',
    summary: 'Production locale, fabrication et industrialisation durable.',
    cta: { label: 'Découvrir', href: '/services#industrie' }
  }
];


/* ========= FILIALES ========= */

const filiales = [
  { id: 'goldbeauty', name: 'Gold Beauty', desc: 'Beauté, cosmétiques et soins.' },
  { id: 'amabutho', name: 'Amabutho Security', desc: 'Sécurité, surveillance et protection rapprochée.' },
  { id: 'express', name: 'Établissements Express', desc: 'Services express et solutions rapides.' },
  { id: 'afroclean', name: 'AfroClean', desc: 'Nettoyage professionnel et hygiène.' }
];


/* ========= RÉSEAUX SOCIAUX ========= */

const social = {
  instagram: 'https://www.instagram.com/kamitegroup',
  facebook: 'https://www.facebook.com/kamitegroup',
  linkedin: 'https://www.linkedin.com/company/kamitegroup'
};


/* ========= EXPORT DES PAGES ========= */

module.exports = {

  // ACCUEIL
  index: (req, res) => {
    res.render('index', {
      title: 'Accueil - Kamite Group',
      departments,
      filiales,
      social,
      slogan: longTexts.tagline
    });
  },

  // A PROPOS
  about: (req, res) => {
    res.render('about', {
      title: 'À propos - Kamite Group',
      longTexts,
      social
    });
  },

  // SERVICES
  services: (req, res) => {
    res.render('services', {
      title: 'Services - Kamite Group',
      departments,
      filiales,
      social
    });
  },

  // FILIALES
  filiales: (req, res) => {
    res.render('filiales', {
      title: 'Filiales - Kamite Group',
      filiales,
      social
    });
  },

  // PROJETS
  projects: (req, res) => {
    res.render('projects', {
      title: 'Projets - Kamite Group',
      longTexts,
      social
    });
  },

  // GALLERIE
  gallery: (req, res) => {
    res.render('gallery', {
      title: 'Galerie - Kamite Group',
      social
    });
  },

  // CARRIÈRES
  careers: (req, res) => {
    res.render('careers', {
      title: 'Carrières - Kamite Group',
      social
    });
  },

  // FAQ
  faq: (req, res) => {
    res.render('faq', {
      title: 'FAQ - Kamite Group',
      social
    });
  },

  // PARTENAIRES
  partners: (req, res) => {
    res.render('partners', {
      title: 'Partenaires - Kamite Group',
      social
    });
  },

  // CONTACT
  contact: (req, res) => {
    res.render('contact', {
      title: 'Contact - Kamite Group',
      social
    });
  },

  /* ========= INSTITUTION ========= */

  motDuFondateur: (req, res) => {
    res.render('institution/founder', {
      title: "Mot du Fondateur - Kamite Group",
      longTexts,
      social
    });
  },

  historique: (req, res) => {
    res.render('institution/historique', {
      title: "Historique - Kamite Group",
      longTexts,
      social
    });
  },

  nosAtouts: (req, res) => {
    res.render('institution/atouts', {
      title: "Nos Atouts - Kamite Group",
      longTexts,
      social
    });
  },

  perspectives: (req, res) => {
    res.render('institution/perspectives', {
      title: "Perspectives & Développement - Kamite Group",
      longTexts,
      social
    });
  }

}; // <<< FIN EXPORT, FERMETURE OK
