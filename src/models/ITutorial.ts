export interface ITutorial {
  id: number;
  author: string;
  description: string;
  title: string;
  difficulty: string;
  link: string; 
  image: string
  favorite?: boolean;
  time?: string;
}