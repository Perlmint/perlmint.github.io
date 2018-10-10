export interface IPost {
  body: string;
  id: number;
  date: string; // Date
  title: string;
  categories: string[];
  tags: string[];
}

export interface IProject {
  name: string;
  description: string;
  tech: string[];
  works: string[];
}

export interface ICareer {
  company: string;
  begin: string; // Date
  end?: string; // Date
  projects?: IProject[];
}
