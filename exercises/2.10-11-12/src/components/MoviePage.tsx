import { useState } from "react";
import type { Film } from "../type";
import MovieListView from "./Film/ViewMovieForm";
import AddMovieForm from "./Film/AddMovieForm";
const defaultfilms: Film[] = [
  {
    titre: "Inception",
    director: "Christopher Nolan",
    duration: 148,
    url: "https://www.imdb.com/title/tt1375666/",
    description:
      "Un voleur s'infiltre dans les rêves pour y implanter des idées.",
    budget: 160000000,
  },
  {
    titre: "The Godfather",
    director: "Francis Ford Coppola",
    duration: 175,
    url: "https://www.imdb.com/title/tt0068646/",
    description:
      "L’histoire du clan Corleone, une puissante famille mafieuse italienne.",
    budget: 160000000,
  },
  {
    titre: "Interstellar",
    director: "Christopher Nolan",
    duration: 169,
    url: "https://www.imdb.com/title/tt0816692/",
    description:
      "Un groupe d’astronautes voyage à travers un trou de ver à la recherche d’un nouveau foyer pour l’humanité.",
    budget: 160000000,
  },
  {
    titre: "Parasite",
    director: "Bong Joon-ho",
    duration: 132,
    url: "https://www.imdb.com/title/tt6751668/",
    description:
      "Une famille pauvre infiltre la maison d’une famille riche sous de fausses identités.",
    budget: 160000000,
  },
  {
    titre: "The Matrix",
    director: "Lana Wachowski, Lilly Wachowski",
    duration: 136,
    url: "https://www.imdb.com/title/tt0133093/",
    description:
      "Un hacker découvre que la réalité est une simulation contrôlée par des machines.",
    budget: 160000000,
  },
];
const MoviePage = () => {
    const [films, setFilms] = useState(defaultfilms);
    const onMovieAdded = (newFilm: Film) => {
        setFilms([...films, newFilm]);
    };
    return (
    <div>
      <MovieListView films={films} />
      <AddMovieForm onMovieAdded={onMovieAdded} />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}
export default MoviePage;