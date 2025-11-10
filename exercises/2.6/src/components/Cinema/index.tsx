import MovieItem from "../MovieItem";

interface Movie {
  title: string;
  director: string;
  description: string;
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
          {movies.map((movie, index) => (
            <MovieItem key={index} title ={movie.title} director={movie.director} description={movie.description}/>
          ))}
        </strong>
      </ul>
    </div>
  );
};

export default Cinema;
