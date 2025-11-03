import type { Film } from "../../type";

interface MovieListProps {
  films: Film[];
}

const MovieListView = ({ films }: MovieListProps) => {
  return (
    <div>
      <ul>
        {films.map((film) => (
            <p>{film.titre} {film.director} {film.duration} {film.url} {film.description} {film.budget}</p>
        ))}
      </ul>
    </div>
  );
};

export default MovieListView
