import { LucideIcon } from 'lucide-react';

export type ServiceHighlight = 'tech' | 'art' | 'cyan';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  highlightColor: ServiceHighlight;
  colSpan?: boolean; // For Bento Grid layout sizing
}

export type ProjectCategory = 
  | 'All' 
  | 'Illustration' 
  | 'Music' 
  | 'Video' 
  | 'Design' 
  | 'Web' 
  | 'Restoration' 
  | 'Editorial' 
  | 'Animation';

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