import { useNavigate, Outlet } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";
import type { Film, MovieContext } from "../../type";
import { useState } from "react";
const defaultfilms: Film[] = [
  {
    id : 1,
    titre: "Inception",
    director: "Christopher Nolan",
    duration: 148,
    url: "https://www.imdb.com/title/tt1375666/",
    description:
      "Un voleur s'infiltre dans les rêves pour y implanter des idées.",
    budget: 160000000,
    favorite: true,
  },
  {
    id : 2,
    titre: "The Godfather",
    director: "Francis Ford Coppola",
    duration: 175,
    url: "https://www.imdb.com/title/tt0068646/",
    description:
      "L’histoire du clan Corleone, une puissante famille mafieuse italienne.",
    budget: 160000000,
    favorite: false,
  },
  {
    id : 3,
    titre: "Interstellar",
    director: "Christopher Nolan",
    duration: 169,
    url: "https://www.imdb.com/title/tt0816692/",
    description:
      "Un groupe d’astronautes voyage à travers un trou de ver à la recherche d’un nouveau foyer pour l’humanité.",
    budget: 160000000,
    favorite: true,
  },
  {
    id : 4,
    titre: "Parasite",
    director: "Bong Joon-ho",
    duration: 132,
    url: "https://www.imdb.com/title/tt6751668/",
    description:
      "Une famille pauvre infiltre la maison d’une famille riche sous de fausses identités.",
    budget: 160000000,
    favorite: false,
  },
  {
    id : 5,
    titre: "The Matrix",
    director: "Lana Wachowski, Lilly Wachowski",
    duration: 136,
    url: "https://www.imdb.com/title/tt0133093/",
    description:
      "Un hacker découvre que la réalité est une simulation contrôlée par des machines.",
    budget: 160000000,
    favorite: true,
  },
];
const NavBar = () => {
  const navigate = useNavigate();

  return (
    <nav>
      <button onClick={() => navigate("/")}>Home</button>
      <button onClick={() => navigate("/cinema")}>Cinema</button>
      <button onClick={() => navigate("/movies")}>Movies</button>
      <button onClick={() => navigate("/add-movie")}>add-movie</button>
    </nav>
  );
};
function App() {
  const navigate = useNavigate();
  const [films, setFilms] = useState(defaultfilms);
  const onMovieAdded = (newFilm: Film) => {
      setFilms([...films, newFilm]);
      navigate("/movies");
  };
  const movieContext: MovieContext = {
      films,
      setFilms,
      onMovieAdded
  };
  return (
    <>
      <Header url="https://media.istockphoto.com/id/1202770152/fr/photo/bobine-de-film-disolement-sur-le-fond-jaune-lumineux-dans-les-couleurs-pastel.jpg?s=1024x1024&w=is&k=20&c=2yKBrC8oyimPdW-5IxFWN_zxFPVK3KWYL9OE2gVmVX4=">
        <h1>hello test</h1>
      </Header>
      <div>
        <NavBar />
        <Outlet context={movieContext}/>
      </div>
      <Footer url="https://media.istockphoto.com/id/1202770152/fr/photo/bobine-de-film-disolement-sur-le-fond-jaune-lumineux-dans-les-couleurs-pastel.jpg?s=1024x1024&w=is&k=20&c=2yKBrC8oyimPdW-5IxFWN_zxFPVK3KWYL9OE2gVmVX4=">
        <p>Hello film</p>
      </Footer>
    </>
  );
}

export default App;
