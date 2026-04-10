export interface Movie {
  id: number;
  title: string;
  year: number;
  rating: number;
  duration: string;
  poster: string;
  backdrop: string;
  genres: string[];
  overview: string;
  cast: string[];
  trailerUrl?: string;
  featured: boolean;
  categories: string[];
}

export interface Category {
  id: string;
  name: string;
  slug: string;
}
