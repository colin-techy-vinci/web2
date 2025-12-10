interface Film {
  id: number;
  titre: string;
  director: string;
  duration: number;
  url?: string;
  description?: string;
  budget?: number;
  favorite: boolean;
}
interface MovieContext {
  films: Film[];
  setFilms: (films: Film[]) => void;
  onMovieAdded: (newFilm: Film) => void;
}

export type { Film, MovieContext };
