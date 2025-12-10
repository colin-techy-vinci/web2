interface Film {
  titre: string;
  director: string;
  duration: number;
  url?: string;
  description?: string;
  budget?: number;
}
interface MovieContext {
  films: Film[];
  setFilms: (films: Film[]) => void;
  onMovieAdded: (newFilm: Film) => void;
}

export type { Film, MovieContext };
