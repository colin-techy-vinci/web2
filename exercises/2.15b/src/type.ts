interface Film {
  id: number;
  title: string;
  director: string;
  duration: number;
  imageUrl?: string;
  description?: string;
  budget?: number;
}
interface MovieContext {
  films: Film[];
  setFilms: (films: Film[]) => void;
  onMovieAdded: (newFilm: Film) => Promise<void>;
  onMovieDeleted: (film: Film) => Promise<void>;
}
type NewFilm = Omit<Film, "id">;
export type { Film, MovieContext, NewFilm };
