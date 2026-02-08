import { LucideIcon } from 'lucide-react';

export type ServiceHighlight = 'tech' | 'art' | 'cyan';

export type PageView = 'home' | 'about' | 'services' | 'portfolio' | 'contact' | 'clube';

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
  | 'Trap'
  | 'Funk'
  | 'Hip Hop' 
  | 'Pop' 
  | 'Electronic' 
  | 'Rock/Alt' 
  | 'MPB' 
  | 'Mix & Master' 
  | 'Sound Design' 
  | 'Podcasts';

export interface Project {
  id: string;
  title: string;
  client: string;
  category: ProjectCategory;
  imageUrl: string;
}

export interface Client {
  id: string;
  name: string;
  logoPlaceholder: string;
}