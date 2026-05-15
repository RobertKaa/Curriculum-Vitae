export const cv = {
  name: 'Stéphane Bran',
  role: 'Développeur frontend',
  profile:
  "Développeur web, j'aime concevoir des interfaces soignées et intuitives. " +
      "Le design et l'UX me sont très chers, ils sont à la base de mon développement, soucieux de l'utilisateur et de l'accessibilité d'une application. " +
      "Mon envie est particulièrement portée vers le Frontend, qui m'attire toujours plus au fil des années.",
  photoUrl: '/data/STV-14.jpg',
  contact: {
    address: '8 rue Boucry, 75018 Paris',
    location: 'Paris, France - remote',
    email: 'sbran75017+contact@gmail.com',
    linkedin: 'https://www.linkedin.com/in/stéphane-claude-bran/',
  },
  stack: [
    { label: 'TypeScript', type: 'language' },
    { label: 'React', type: 'language' },
    { label: 'Vue', type: 'language' },
    { label: 'CSS / Sass', type: 'language' },
    { label: 'Git', type: 'language' },
    { label: 'Méthodologie Scrum', type: 'method' },
    { label: 'Responsive design', type: 'method' },
    { label: 'UI design', type: 'method' },
    { label: 'Accessibilité', type: 'method' },
  ],
  qualities: [
    'Soucieux de l’UX et de l’UI',
    'Sens du détail',
      'Aime trouver et corriger les problèmes',
    'Intuitivité des interfaces',
  ],
  communities: [
      {
        title: 'Devoxx France',
        role: 'Polo rouge (orga)',
        description:
          'Participe à l\'organisation de l\'événement en orientant, aidant les participants. Accompagne les speakers pour fluidifier les échanges et les conférences.',
      },
  ],
  projects: [
    {
      name: 'Find the Flag',
      description:
        "Projet de test de l'utilisation d'outils d'IA avec Codex (vibe coding / TU / MCPs).",
      url: 'https://vexiio.com',
    },
    {
      name: 'Portfolio photo',
      description: 'Galerie photo personnelle.',
      url: 'https://stephanebran.com',
    },
  ],
  hobbies: ['Photographie', 'Retouche réaliste', 'Jeux vidéo', 'Sport'],
  experiences: [
    {
      period: '2025 - aujourd’hui',
      company: 'Talan',
      client: 'Enedis',
      title: 'Développeur Fullstack - Vue, .NET, Java',
      description:
        'Développement d’une web application interne à Enedis. Ce portail permet au métier Enedis de vérifier la disponibilité et de gérer les interventions sur le réseau Enedis.',
      highlights: [
        "Création d'un front en Angular",
        'Connexion et utilisation de procédures stockées avec PostgreSQL',
        'Intégration des développements et coordination des livraisons',
        'Chiffrage et propositions techniques',
      ],
    },
    {
      period: '2022 - 2025',
      company: 'Talan',
      client: 'Enedis',
      title: 'Développeur Fullstack - Angular (TS), Java',
      description:
        'Développement d’une web application interne à Enedis pour le calcul des bilans de consommation et la visualisation des données relatives aux compteurs Linky.',
      highlights: [
        "Création d'un front en Angular",
        'Connexion et utilisation de procédures stockées avec Teradata',
        'Intégration des développements et coordination des livraisons',
        'Chiffrage et propositions techniques',
      ],
    },
    {
      period: '2021 - 2022',
      company: 'Talan',
      client: 'Futurmaster',
      title: 'Développeur Fullstack - React, Java',
      description: 'Implémentation d’une web application en React.',
      highlights: [
        "Création d'un front en React",
        'Connexion et utilisation de procédures stockées avec PostgreSQL',
        'Intégration des développements et coordination des livraisons',
        'Chiffrage et propositions techniques',
      ],
    },
    {
      period: '2019 - 2021',
      company: 'Talan',
      client: 'Bpifrance',
      title: 'Développeur Fullstack - AngularJS, Java',
      description:
        'Développement d’une web application permettant aux clients de Bpifrance de gérer facilement leurs comptes bancaires en temps réel.',
      highlights: [
        "Création d'un front en AngularJS",
        'Dialogue avec une base de données PostgreSQL',
        'Intégration des développements et coordination des livraisons',
        'Chiffrage et propositions techniques',
      ],
    },
    {
      period: '2017 - 2019',
      company: 'Talan',
      client: 'Lisea',
      title: 'Développeur Fullstack - AngularJS, Java',
      description:
        'Développement d’une web application permettant à Lisea de gérer, suivre et facturer les circulations sur son réseau ferroviaire.',
      highlights: [
        "Création d'un front en AngularJS",
        'Dialogue avec une base de données PostgreSQL',
        'Intégration des développements et coordination des livraisons',
        'Chiffrage et propositions techniques',
      ],
    },
  ],
  education: [
    {
      period: '2013 - 2017',
      school: 'École 42',
      title: 'Formation au métier de développeur',
      description:
        'Apprentissage autonome dans un système peer-to-peer, orienté résolution de problèmes, partage de connaissances et adaptation au monde professionnel.',
    },
  ],
} as const
