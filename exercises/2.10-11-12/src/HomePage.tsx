import { useOutletContext } from "react-router-dom";
import type { MovieContext } from "./type";
import { Link } from "react-router-dom";
const HomePage = () => {
    const { films }: MovieContext = useOutletContext();
    return (
        <div>
            <h1>Voici une liste non exhaustive de mon app 1movies</h1>
            <ul>
                {films.filter(film => film.favorite)
                .map((film) => (
                    <li key={film.id}>
                        <Link to={`/movies/${film.id}`}>{film.titre}</Link>{" "}
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default HomePage;