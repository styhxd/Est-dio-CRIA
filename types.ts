import { LucideIcon } from 'lucide-react';

export type ServiceHighlight = 'tech' | 'art' | 'cyan';

export type PageView = 'home' | 'about' | 'services' | 'portfolio' | 'contact';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  highlightColor: ServiceHighlight;
  colSpan?: boolean; 
}

export type ProjectCategory = 
  | 'All' 
  | 'Animação 2D'
  | 'Fotografia'
  | 'Fotos Restauradas' 
  | 'Música' 
  | 'Vídeos';

export interface Project {
  id: string;
  title: string;
  client: string;
  category: ProjectCategory;
  imageUrl: string;
  mediaType?: 'image' | 'video' | 'audio' | 'compare' | 'gallery' | 'music_release';
  mediaUrl?: string; // For video or audio links
  beforeImageUrl?: string; // For compare
  afterImageUrl?: string; // For compare
  galleryUrls?: string[]; // For gallery
  spotifyUrl?: string;
  youtubeUrl?: string;
}

export interface Client {
  id: string;
  name: string;
  logoPlaceholder: string;
}