import { 
  Mic2, 
  Music, 
  Sliders, 
  Speaker, 
  Radio, 
  Headphones, 
  Disc, 
  Mic, 
  Zap,
  Briefcase,
  MapPin,
  HelpCircle,
  Sparkles,
  GraduationCap,
  BarChart3,
  Globe,
  Users,
  Target,
  Wand2,
  BoomBox,
  Camera,
  Video,
  Image,
  Film,
  PlaySquare
} from 'lucide-react';
import { Service, Project, Client, ProjectCategory, PageView } from './types';

// Updated Navigation Content for Pages
export const NAV_CONTENT = {
  sobre: [
    {
      title: 'Sobre o Estúdio',
      description: 'Nossa estrutura e equipe.',
      page: 'about',
      href: '#about',
      icon: Target
    },
    {
      title: 'Metodologia',
      description: 'Nosso processo de trabalho.',
      page: 'about',
      href: '#methodology',
      icon: Sparkles
    }
  ],
  portfolio: [
    {
      title: 'Todo o Portfólio',
      description: 'Nossos últimos trabalhos.',
      page: 'portfolio', 
      icon: Briefcase,
      category: 'All' as ProjectCategory
    },
    {
      title: 'Animação 2D',
      description: 'Animações e motion graphics.',
      page: 'portfolio',
      icon: Film,
      category: 'Animação 2D' as ProjectCategory
    },
    {
      title: 'Fotografia',
      description: 'Ensaios e coberturas.',
      page: 'portfolio',
      icon: Camera,
      category: 'Fotografia' as ProjectCategory
    },
    {
      title: 'Fotos Restauradas',
      description: 'Recuperação de memórias.',
      page: 'portfolio',
      icon: Image,
      category: 'Fotos Restauradas' as ProjectCategory
    },
    {
      title: 'Música',
      description: 'Produções musicais e áudio.',
      page: 'portfolio',
      icon: Music,
      category: 'Música' as ProjectCategory
    },
    {
      title: 'Vídeos',
      description: 'Clipes e coberturas audiovisuais.',
      page: 'portfolio',
      icon: Video,
      category: 'Vídeos' as ProjectCategory
    }
  ],
  contato: [
    {
      title: 'Iniciar Projeto',
      description: 'Fale com nossa equipe.',
      page: 'contact',
      href: '#contact',
      icon: Mic
    },
    {
      title: 'Dúvidas Frequentes',
      description: 'Processos e orçamentos.',
      page: 'contact',
      href: '#faq',
      icon: HelpCircle
    },
    {
      title: 'Localização',
      description: 'Onde a mágica acontece.',
      page: 'contact',
      href: '#location',
      icon: MapPin
    }
  ]
};

export const SERVICES: Service[] = [
  {
    id: 's1',
    title: 'Animação 2D',
    description: 'Motion graphics e animação tradicional para dar vida a ideias, marcas e narrativas complexas com fluidez e impacto visual.',
    icon: Film,
    highlightColor: 'tech',
  },
  {
    id: 's2',
    title: 'Fotografia Premium',
    description: 'Ensaios, cobertura de eventos e fotografia de produto com iluminação impecável e pós-produção de alto nível.',
    icon: Camera,
    highlightColor: 'art',
  },
  {
    id: 's3',
    title: 'Restauração Digital',
    description: 'Recuperação minuciosa de fotografias antigas ou danificadas, trazendo memórias de volta à vida com precisão e cuidado.',
    icon: Image,
    highlightColor: 'cyan',
  },
  {
    id: 's4',
    title: 'Produção Musical',
    description: 'Gravação, mixagem, masterização e sound design. Qualidade de estúdio premium para elevar a sua obra.',
    icon: Music,
    highlightColor: 'tech',
  },
  {
    id: 's5',
    title: 'Produção Audiovisual',
    description: 'Direção, captação e edição de vídeos em alta resolução para clipes, institucionais e campanhas publicitárias.',
    icon: Video,
    highlightColor: 'art',
  }
];

const getDriveImage = (id: string) => `https://drive.google.com/uc?export=view&id=${id}`;
const getDriveVideoThumb = (id: string) => `https://drive.google.com/thumbnail?id=${id}&sz=w800-h800`;
const getDriveVideo = (id: string) => `https://drive.google.com/file/d/${id}/preview`;
const getDriveAudio = (id: string) => `https://drive.google.com/file/d/${id}/preview`; // Audio preview

export const PROJECTS: Project[] = [
  // Animação 2D
  {
    id: 'a1',
    title: 'Bingo Abana Rabo',
    client: 'Livro Infantil',
    category: 'Animação 2D',
    imageUrl: getDriveVideoThumb('1lbguGQGCdCb6_xoHTCoNCXWFFrgDtlnL'),
    mediaType: 'video',
    mediaUrl: getDriveVideo('1lbguGQGCdCb6_xoHTCoNCXWFFrgDtlnL'),
  },
  {
    id: 'a2',
    title: 'ET Joga Game',
    client: 'Animação Autoral',
    category: 'Animação 2D',
    imageUrl: getDriveVideoThumb('1aD-rBvFJdxQ_uQdrQTKjnFixMl9AM08Y'),
    mediaType: 'video',
    mediaUrl: getDriveVideo('1aD-rBvFJdxQ_uQdrQTKjnFixMl9AM08Y'),
  },
  {
    id: 'a3',
    title: 'Geleia de Jabuticaba',
    client: 'Curta Premiado',
    category: 'Animação 2D',
    imageUrl: getDriveVideoThumb('1cJSP9NF9tk4BMe1JfFh_yxlWVlWi97md'),
    mediaType: 'video',
    mediaUrl: getDriveVideo('1cJSP9NF9tk4BMe1JfFh_yxlWVlWi97md'),
  },
  {
    id: 'a4',
    title: 'Tattoo Pro Site',
    client: 'Animação Gótica',
    category: 'Animação 2D',
    imageUrl: getDriveVideoThumb('1HQYx6GfX1oM3LpigcGgs94GwcnwvTucu'),
    mediaType: 'video',
    mediaUrl: getDriveVideo('1HQYx6GfX1oM3LpigcGgs94GwcnwvTucu'),
  },
  {
    id: 'a5',
    title: 'Toca Aqui',
    client: 'Motion Graphics',
    category: 'Animação 2D',
    imageUrl: getDriveVideoThumb('1SvXX2RqTs1rE-lr6FrXrV3sOLRwSEE03'),
    mediaType: 'video',
    mediaUrl: getDriveVideo('1SvXX2RqTs1rE-lr6FrXrV3sOLRwSEE03'),
  },

  // Fotografia
  {
    id: 'f1',
    title: 'Ensaio Flaviano Melo',
    client: 'Retrato Profissional',
    category: 'Fotografia',
    imageUrl: getDriveImage('1wW2Dsvyj35XFiD6-124YYhY34yqL5DPN'),
    mediaType: 'image',
    mediaUrl: getDriveImage('1wW2Dsvyj35XFiD6-124YYhY34yqL5DPN'),
  },
  {
    id: 'f2',
    title: 'Ensaio Dalgs',
    client: 'Editorial',
    category: 'Fotografia',
    imageUrl: getDriveImage('1NgzQ942CUmSjaEDzQBpvJzSyvev6DvW8'),
    mediaType: 'image',
    mediaUrl: getDriveImage('1NgzQ942CUmSjaEDzQBpvJzSyvev6DvW8'),
  },
  {
    id: 'f3',
    title: 'Ensaio DJ BLJ',
    client: 'Música & Eventos',
    category: 'Fotografia',
    imageUrl: getDriveImage('1N4fgNqhnLYy8tgKQYEcIVu0I8VBHW5WX'),
    mediaType: 'image',
    mediaUrl: getDriveImage('1N4fgNqhnLYy8tgKQYEcIVu0I8VBHW5WX'),
  },
  {
    id: 'f4',
    title: 'Matheus Malabares',
    client: 'Arte & Performance',
    category: 'Fotografia',
    imageUrl: getDriveImage('14RFKT20A5EZDk8R4c_ITp4y1iNyMpNUz'),
    mediaType: 'image',
    mediaUrl: getDriveImage('14RFKT20A5EZDk8R4c_ITp4y1iNyMpNUz'),
  },
  {
    id: 'f5',
    title: 'Sessão Completa Dalgs',
    client: 'Editorial de Moda',
    category: 'Fotografia',
    imageUrl: getDriveImage('1p9k5o9Gu4bP0fMx5I6e3SPP-L2yUB7YL'),
    mediaType: 'gallery',
    galleryUrls: [
      getDriveImage('1Wn7WDtSTXCxy7Zwtln1Wn3aHRW_M_uag'),
      getDriveImage('1p9k5o9Gu4bP0fMx5I6e3SPP-L2yUB7YL'),
      getDriveImage('1pzvSsX_Gk_CAoqtv4A-1vRw7YlYQi6d3'),
      getDriveImage('14EIpWYAZT1bjnGMWrg8fCP5IoA-u83ND'),
      getDriveImage('1818O2J-rZF3WN1tq-teFdnV018kHzJh4'),
    ]
  },

  // Fotos Restauradas
  {
    id: 'r1',
    title: 'Restauração Clássica',
    client: 'Memórias Recuperadas',
    category: 'Fotos Restauradas',
    imageUrl: getDriveImage('1wANrFlLN01a4PtPLtMWLal6YJZCpV4wl'),
    mediaType: 'compare',
    beforeImageUrl: getDriveImage('1IU78ryrBUgjCMfiXEd-i2ppLOVwNNi7i'),
    afterImageUrl: getDriveImage('1wANrFlLN01a4PtPLtMWLal6YJZCpV4wl'),
  },
  {
    id: 'r2',
    title: 'Montagem Casal',
    client: 'União de Memórias',
    category: 'Fotos Restauradas',
    imageUrl: getDriveImage('14cILAYO_dGGhcAXkchb6EGAZikT3LHZ4'),
    mediaType: 'gallery',
    galleryUrls: [
      getDriveImage('1xg46VkgZmo5q-p-tAbSGUcmmxEa6W3YJ'), // Original 1
      getDriveImage('1-RVc_WViMmZr_7s-V0C1AV9oZSLqIAIA'), // Original 2
      getDriveImage('14cILAYO_dGGhcAXkchb6EGAZikT3LHZ4'), // Montagem 1
      getDriveImage('1eFljUVAYkVextC5AB9gPM7YgVfOEmdia'), // Montagem 2
      getDriveImage('1O6NFoZ-6nLnk4rC2LLMa4uQZR6c1p0jY'), // Montagem 3
      getDriveImage('1L6lY3HYeKHneUBgnDzxydLQ86KoI455K'), // Montagem 4
    ]
  },

  // Música
  {
    id: 'm1',
    title: 'Rima Leste - Resenha',
    client: 'Case de Sucesso',
    category: 'Música',
    imageUrl: getDriveImage('1e4a-AiCnwEALJMcGdgDd1uiQWRCZIfmx'),
    mediaType: 'music_release',
    mediaUrl: getDriveVideo('1mVkIiRyxHFDpNxspJBkzseErwOP6UEOg'), // Lyric Video
    youtubeUrl: 'https://www.youtube.com/watch?v=Bu94oySRhHU',
    spotifyUrl: 'https://open.spotify.com/intl-pt/artist/2c5vkTuMxaYtsQN7za8HBH',
    galleryUrls: [
      getDriveImage('1vJ_D4fnhJazJiJsz44BVNSr34sJC6M5r') // Youtube Print
    ]
  },

  // Vídeos
  {
    id: 'v1',
    title: 'Aniversário 3 Anos',
    client: 'Cobertura Infantil',
    category: 'Vídeos',
    imageUrl: getDriveVideoThumb('1LY-AqlwsHp9QeyypprrWCqRavgE2G_hJ'),
    mediaType: 'video',
    mediaUrl: getDriveVideo('1LY-AqlwsHp9QeyypprrWCqRavgE2G_hJ'),
  },
  {
    id: 'v2',
    title: 'Aniversário 18 Anos',
    client: 'Cobertura de Evento',
    category: 'Vídeos',
    imageUrl: getDriveVideoThumb('1tThBmY11QOQAoZMw7_AYl3RTBre4gSoU'),
    mediaType: 'video',
    mediaUrl: getDriveVideo('1tThBmY11QOQAoZMw7_AYl3RTBre4gSoU'),
  },
  {
    id: 'v3',
    title: 'Casamento',
    client: 'Filme de Casamento',
    category: 'Vídeos',
    imageUrl: getDriveVideoThumb('1RSY-fJjfuJ1o62ZKKXVHnJf2BcZWk0Af'),
    mediaType: 'video',
    mediaUrl: getDriveVideo('1RSY-fJjfuJ1o62ZKKXVHnJf2BcZWk0Af'),
  },
  {
    id: 'v4',
    title: 'Zanah Clipe',
    client: 'Videoclipe Musical',
    category: 'Vídeos',
    imageUrl: getDriveVideoThumb('1-eTq720f9vnomUZ0caKHJPszvP5vzNip'),
    mediaType: 'video',
    mediaUrl: getDriveVideo('1-eTq720f9vnomUZ0caKHJPszvP5vzNip'),
  }
];

export const CLIENTS: Client[] = [
  { id: 'c1', name: 'Sony Music', logoPlaceholder: 'SM' },
  { id: 'c2', name: 'Netflix', logoPlaceholder: 'NFLX' },
  { id: 'c3', name: 'Kondzilla', logoPlaceholder: 'KZ' },
  { id: 'c4', name: 'Red Bull', logoPlaceholder: 'RB' },
  { id: 'c5', name: 'Mainstreet', logoPlaceholder: 'MS' },
  { id: 'c6', name: 'ONErpm', logoPlaceholder: 'OR' },
];