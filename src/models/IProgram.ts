export interface IProgram {
  id: number;
  description: string;
  name: string;
  link: string; 
  logo: string;
  systems: string[];
  favorite: boolean;
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

export interface IProgramSelect {
  id: number;
  name: string;
  logo: string;
}



