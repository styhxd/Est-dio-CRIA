import { 
  Palette, 
  Clapperboard, 
  Glasses, 
  Bot, 
  Globe, 
  Music, 
  Layout, 
  Users, 
  Target, 
  Zap,
  Briefcase,
  MapPin,
  HelpCircle,
  Sparkles,
  GraduationCap,
  PlayCircle,
  BookOpen,
  Wand2,
  PenTool,
  Image as ImageIcon,
  Mic2
} from 'lucide-react';
import { Service, Project, Client, ProjectCategory } from './types';

// Navigation Content for Mega Menus
export const NAV_CONTENT = {
  sobre: [
    {
      title: 'O Manifesto',
      description: 'Nossa filosofia criativa.',
      href: '#manifesto',
      icon: Target
    },
    {
      title: 'Metodologia',
      description: 'Do caos à arte: nosso processo.',
      href: '#methodology',
      icon: Sparkles
    },
    {
      title: 'Nossos Clientes',
      description: 'Quem confia na nossa visão.',
      href: '#clients',
      icon: Users
    },
    {
      title: 'Educação',
      description: 'Workshops e masterclasses.',
      href: '#education',
      icon: GraduationCap
    },
    {
      title: 'Carreiras',
      description: 'Faça parte do time.',
      href: '#careers',
      icon: Briefcase
    }
  ],
  portfolio: [
    {
      title: 'Showreel Geral',
      description: 'Um mix de tudo que fazemos.',
      href: '#portfolio', 
      icon: PlayCircle,
      category: 'All' as ProjectCategory
    },
    {
      title: 'Animação & Motion',
      description: '2D e Motion Graphics.',
      href: '#portfolio',
      icon: Clapperboard,
      category: 'Animation' as ProjectCategory
    },
    {
      title: 'Produção Musical',
      description: 'Beats, Gravação e Lançamento.',
      href: '#portfolio',
      icon: Music,
      category: 'Music' as ProjectCategory
    },
    {
      title: 'Design & Branding',
      description: 'Identidade visual completa.',
      href: '#portfolio',
      icon: Layout,
      category: 'Design' as ProjectCategory
    },
    {
      title: 'Ilustração Digital',
      description: 'Personagens, Capas e NFTs.',
      href: '#portfolio',
      icon: PenTool,
      category: 'Illustration' as ProjectCategory
    },
    {
      title: 'Editorial & Livros',
      description: 'Publique sua obra.',
      href: '#portfolio',
      icon: BookOpen,
      category: 'Editorial' as ProjectCategory
    },
    {
      title: 'Web & Digital',
      description: 'Sites e E-commerce.',
      href: '#portfolio',
      icon: Globe,
      category: 'Web' as ProjectCategory
    },
    {
      title: 'Restauração',
      description: 'Recuperação de memórias.',
      href: '#portfolio',
      icon: Wand2,
      category: 'Restoration' as ProjectCategory
    }
  ],
  contato: [
    {
      title: 'Iniciar Projeto',
      description: 'Vamos construir algo incrível juntos.',
      href: '#contact',
      icon: Zap
    },
    {
      title: 'Dúvidas Frequentes',
      description: 'Entenda como trabalhamos.',
      href: '#faq',
      icon: HelpCircle
    },
    {
      title: 'Localização',
      description: 'Onde a mágica acontece.',
      href: '#location',
      icon: MapPin
    }
  ]
};

export const SERVICES: Service[] = [
  {
    id: 's1',
    title: 'Ilustração Digital',
    description: 'Criação de capas para livros, design de personagens, mascotes digitais, NFTs e estampas exclusivas para merchandising.',
    icon: Palette,
    highlightColor: 'art',
  },
  {
    id: 's2',
    title: 'Produção Musical',
    description: 'Gravação remota, produção completa, catálogo de beats exclusivos e assessoria para lançar sua música nas plataformas.',
    icon: Mic2,
    highlightColor: 'tech',
  },
  {
    id: 's3',
    title: 'Vídeos & Audiovisual',
    description: 'Captação, edição, roteirização para influencers e publicidade. Transformamos raw footage em narrativa.',
    icon: Clapperboard,
    highlightColor: 'tech',
  },
  {
    id: 's4',
    title: 'Design Gráfico',
    description: 'Logotipos, identidade visual completa, flyers, cartões e materiais promocionais de alto impacto.',
    icon: Layout,
    highlightColor: 'cyan',
  },
  {
    id: 's5',
    title: 'Web Design',
    description: 'Criação de sites institucionais, e-commerce, Landing Pages de alta conversão, hospedagem e otimização SEO.',
    icon: Globe,
    highlightColor: 'cyan',
  },
  {
    id: 's6',
    title: 'Restauração & Edição',
    description: 'Recuperação de fotos antigas, colorização, manipulação artística, retoque profissional e remoção de elementos indesejados.',
    icon: Wand2,
    highlightColor: 'art',
  },
  {
    id: 's7',
    title: 'Publicação Editorial',
    description: 'Diagramação, design de capa, revisão textual, registro ISBN e distribuição em plataformas digitais e impressas.',
    icon: BookOpen,
    highlightColor: 'tech',
  },
  {
    id: 's8',
    title: 'Animação 2D',
    description: 'Motion Graphics, vídeos explicativos, personagens animados e conteúdo dinâmico para redes sociais.',
    icon: PlayCircle,
    highlightColor: 'art',
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    title: 'Coleção: Lendas Urbanas',
    client: 'Editora Aurora',
    category: 'Illustration',
    imageUrl: 'https://picsum.photos/800/600?random=1',
  },
  {
    id: 'p2',
    title: 'Single: "Noite Neon"',
    client: 'MC Jota',
    category: 'Music',
    imageUrl: 'https://picsum.photos/800/800?random=2',
  },
  {
    id: 'p3',
    title: 'Campanha de Verão',
    client: 'Moda Praia Co.',
    category: 'Video',
    imageUrl: 'https://picsum.photos/800/600?random=3',
  },
  {
    id: 'p4',
    title: 'Identidade Visual',
    client: 'TechStart Solutions',
    category: 'Design',
    imageUrl: 'https://picsum.photos/800/500?random=4',
  },
  {
    id: 'p5',
    title: 'E-commerce Deluxe',
    client: 'Boutique Z',
    category: 'Web',
    imageUrl: 'https://picsum.photos/800/800?random=5',
  },
  {
    id: 'p6',
    title: 'Acervo Histórico 1950',
    client: 'Museu da Cidade',
    category: 'Restoration',
    imageUrl: 'https://picsum.photos/800/600?random=6',
  },
  {
    id: 'p7',
    title: 'Livro: O Caminho',
    client: 'Autor Independente',
    category: 'Editorial',
    imageUrl: 'https://picsum.photos/800/600?random=7',
  },
  {
    id: 'p8',
    title: 'Explainer Video APP',
    client: 'Fintech Go',
    category: 'Animation',
    imageUrl: 'https://picsum.photos/800/600?random=8',
  }
];

export const CLIENTS: Client[] = [
  { id: 'c1', name: 'Coletivo Coqueiro', logoPlaceholder: 'CC' },
  { id: 'c2', name: 'Club du Hotel', logoPlaceholder: 'CH' },
  { id: 'c3', name: 'Kazuri', logoPlaceholder: 'KZ' },
  { id: 'c4', name: "Germano's", logoPlaceholder: 'GS' },
  { id: 'c5', name: 'Insanos Populares', logoPlaceholder: 'IP' },
  { id: 'c6', name: 'Vulneráveis Venceremos', logoPlaceholder: 'VV' },
];