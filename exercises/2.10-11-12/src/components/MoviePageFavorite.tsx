import { useMatch } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import type { MovieContext } from "../type";
const MoviePageFavorite = () => {
    const {films} : MovieContext = useOutletContext();

    const match = useMatch("/movies/:id");
    const movieId = Number(match?.params.id);
    if (isNaN(movieId)) return <div>Invalid movie ID</div>;
    
    const movieFound = films.find(film => film.id === movieId);
    if (!movieFound) return <div>Movie not found</div>;

    return (
        <div>
            <h2>{movieFound.titre}</h2>
            <p>Director: {movieFound.director}</p>
            <p>Duration: {movieFound.duration} minutes</p>
        </div>
    );
}
export default MoviePageFavorite;
