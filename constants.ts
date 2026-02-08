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
  BoomBox
} from 'lucide-react';
import { Service, Project, Client, ProjectCategory, PageView } from './types';

// Updated Navigation Content for Pages
export const NAV_CONTENT = {
  sobre: [
    {
      title: 'Identidade Sonora',
      description: 'Nossa filosofia de áudio.',
      page: 'about',
      icon: Target
    },
    {
      title: 'Workflow',
      description: 'Do Rec ao Play: nosso processo.',
      page: 'about',
      icon: Sparkles
    },
    {
      title: 'Artistas & Selos',
      description: 'Quem grava com a gente.',
      page: 'about',
      icon: Users
    },
    {
      title: 'Mentoria de Áudio',
      description: 'Workshops de Mix e Produção.',
      page: 'about',
      icon: GraduationCap
    }
  ],
  portfolio: [
    {
      title: 'Discografia Completa',
      description: 'Nossos últimos lançamentos.',
      page: 'portfolio', 
      icon: Disc,
      category: 'All' as ProjectCategory
    },
    {
      title: 'Trap & Drill',
      description: 'Graves 808 e hi-hats rápidos.',
      page: 'portfolio',
      icon: Zap,
      category: 'Trap' as ProjectCategory
    },
    {
      title: 'Funk Consciente/Mandelão',
      description: 'A batida que domina o Brasil.',
      page: 'portfolio',
      icon: BoomBox,
      category: 'Funk' as ProjectCategory
    },
    {
      title: 'Hip Hop & Boombap',
      description: 'Beats clássicos e lírica.',
      page: 'portfolio',
      icon: Mic2,
      category: 'Hip Hop' as ProjectCategory
    },
    {
      title: 'Pop & Mainstream',
      description: 'Produções para o topo das paradas.',
      page: 'portfolio',
      icon: Music,
      category: 'Pop' as ProjectCategory
    }
  ],
  contato: [
    {
      title: 'Agendar Sessão',
      description: 'Reserve o estúdio agora.',
      page: 'contact',
      icon: Mic
    },
    {
      title: 'Dúvidas Frequentes',
      description: 'Equipamentos e processos.',
      page: 'contact',
      icon: HelpCircle
    },
    {
      title: 'Localização',
      description: 'Onde o som acontece.',
      page: 'contact',
      icon: MapPin
    }
  ]
};

export const SERVICES: Service[] = [
  {
    id: 's1',
    title: 'Gravação & Captação',
    description: 'Sala tratada acusticamente, microfones valvulados e pré-amplificadores de classe A para capturar a melhor performance da sua voz ou instrumento.',
    icon: Mic2,
    highlightColor: 'art',
  },
  {
    id: 's2',
    title: 'Produção de Beat (Trap/Funk)',
    description: 'Criação de instrumentais exclusivos. Do 150BPM ao Trap melódico, nossos beatmakers criam a base perfeita para sua letra.',
    icon: Music,
    highlightColor: 'tech',
  },
  {
    id: 's3',
    title: 'Mixagem Profissional',
    description: 'Equilíbrio, profundidade e clareza. Utilizamos o melhor do mundo analógico e digital para dar o peso que sua música precisa.',
    icon: Sliders,
    highlightColor: 'cyan',
  },
  {
    id: 's4',
    title: 'Masterização',
    description: 'O polimento final. Garantimos que sua música soe alto e competitiva em todas as plataformas (Spotify, Apple Music, YouTube).',
    icon: Speaker,
    highlightColor: 'tech',
  },
  {
    id: 's5',
    title: 'Distribuição Digital',
    description: 'Lançamos sua música em +150 plataformas digitais, cuidamos do ISRC e gerenciamos seus royalties.',
    icon: Globe,
    highlightColor: 'cyan',
  },
  {
    id: 's6',
    title: 'Restauro de Áudio',
    description: 'Limpeza de ruídos, remoção de crackles e pops, e recuperação de gravações antigas ou danificadas.',
    icon: Wand2,
    highlightColor: 'art',
  },
  {
    id: 's7',
    title: 'Marketing Musical',
    description: 'Estratégia de lançamento, Pitching para playlists editoriais e gestão de tráfego pago para artistas.',
    icon: BarChart3,
    highlightColor: 'tech',
  },
  {
    id: 's8',
    title: 'Sound Design & SFX',
    description: 'Criação de efeitos sonoros, foley e trilhas originais para games, cinema e publicidade.',
    icon: Radio,
    highlightColor: 'art',
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    title: 'Single: "Noite de Baile"',
    client: 'MC Jotta',
    category: 'Funk',
    imageUrl: 'https://images.unsplash.com/photo-1571266028243-371695039353?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 'p2',
    title: 'Álbum: "Ouro & Prata"',
    client: 'Lil Z',
    category: 'Trap',
    imageUrl: 'https://images.unsplash.com/photo-1517400508447-f8dd518b86db?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 'p3',
    title: 'EP: "Ritmo de Rua"',
    client: 'DJ K',
    category: 'Funk',
    imageUrl: 'https://images.unsplash.com/photo-1621360841013-c768371e93cf?q=80&w=2548&auto=format&fit=crop',
  },
  {
    id: 'p4',
    title: 'Single: "Vibe Alta"',
    client: 'Trapper X',
    category: 'Trap',
    imageUrl: 'https://images.unsplash.com/photo-1493225255756-d9584f8606e9?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 'p5',
    title: 'Álbum: "Vozes da Rua"',
    client: 'MC Kael',
    category: 'Hip Hop',
    imageUrl: 'https://picsum.photos/800/600?random=10',
  },
  {
    id: 'p6',
    title: 'Single: "Neon Lights"',
    client: 'Luna Pop',
    category: 'Pop',
    imageUrl: 'https://picsum.photos/800/800?random=11',
  },
  {
    id: 'p7',
    title: 'Masterização: "Ecos"',
    client: 'Banda Aurora',
    category: 'Mix & Master',
    imageUrl: 'https://picsum.photos/800/500?random=13',
  },
  {
    id: 'p8',
    title: 'Acústico: "Raízes"',
    client: 'Ana Clara',
    category: 'MPB',
    imageUrl: 'https://picsum.photos/800/600?random=16',
  }
];

export const CLIENTS: Client[] = [
  { id: 'c1', name: 'Sony Music', logoPlaceholder: 'SM' },
  { id: 'c2', name: 'GR6 Explode', logoPlaceholder: 'GR6' },
  { id: 'c3', name: 'Kondzilla', logoPlaceholder: 'KZ' },
  { id: 'c4', name: "Love Funk", logoPlaceholder: 'LF' },
  { id: 'c5', name: 'Mainstreet', logoPlaceholder: 'MS' },
  { id: 'c6', name: 'ONErpm', logoPlaceholder: 'OR' },
];