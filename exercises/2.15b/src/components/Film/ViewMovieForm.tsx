import type { Film } from "../../type";

interface MovieListProps {
  films: Film[];
  onMovieDeleted : (film: Film) => void;
}

const MovieListView = ({ films, onMovieDeleted }: MovieListProps) => {
  return (
    <div>
      <ul>
        {films.map((film) => (
          <div>
            <p>{film.title} {film.director} {film.duration} {film.imageUrl} {film.description} {film.budget}</p>
            <button onClick={() => onMovieDeleted(film)}>Delete the movie</button>
          </div>
        ))}
        
      </ul>
    </div>
  );
};

export default MovieListView
