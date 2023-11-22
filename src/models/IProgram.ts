export interface IProgram {
  id: number;
  description: string;
  name: string;
  link: string; 
  logo: string;
  systems: string[];
}

export interface IProgramFull {
  id: number;
  description: string;
  name: string;
  link: string; 
  logo: string;
  systems: string[];
  pluses: string[];
  minuses: string[];
  examples: string[];
}



