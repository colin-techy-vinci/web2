interface Movie {
  title: string;
  director: string;
}
interface CinemaProps {
  name: string;
  movies: Movie[];
}

const Cinema = ({ name, movies }: CinemaProps) => {
  return (
    <div>
      <h2>{name}</h2>
      <ul>
        <strong>
          {movies.map((movie) => (
            <tr>
              <li>
                <td>{movie.title}</td>
                <td>- Réalisateur : {movie.director}</td>
              </li>
            </tr>
          ))}
        </strong>
      </ul>
    </div>
  );
};

export default Cinema;
