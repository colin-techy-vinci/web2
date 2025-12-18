import { useNavigate, Outlet } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";
import type { Film, MovieContext, NewFilm } from "../../type";
import { useEffect, useState } from "react";
import { addMovie, fetchMovie, deleteMovie } from "../../api_utils";

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
  const [films, setFilms] = useState<Film[]>([]);

  const initMovies = async () => {
    try {
      const films = await fetchMovie();
      setFilms(films);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    initMovies();
  }, []);
  const onMovieAdded = async (newFilm: NewFilm) => {
    try {
      await addMovie(newFilm);
      await initMovies();
      navigate("/movies");
    } catch (error){
      console.error(error);
    }
  };
  const onMovieDeleted = async (film: Film) => {
    console.log("Movie to delete:", film);

    try {
      await deleteMovie(film);
      console.log("Movie deleted:", film);
      await initMovies();
    } catch (error) {
      console.error(error);
    }
  };
  const movieContext: MovieContext = {
    films,
    setFilms,
    onMovieAdded,
    onMovieDeleted,
  };
  return (
    <>
      <Header url="https://media.istockphoto.com/id/1202770152/fr/photo/bobine-de-film-disolement-sur-le-fond-jaune-lumineux-dans-les-couleurs-pastel.jpg?s=1024x1024&w=is&k=20&c=2yKBrC8oyimPdW-5IxFWN_zxFPVK3KWYL9OE2gVmVX4=">
        <h1>hello test</h1>
      </Header>
      <div>
        <NavBar />
        <Outlet context={movieContext} />
      </div>
      <Footer url="https://media.istockphoto.com/id/1202770152/fr/photo/bobine-de-film-disolement-sur-le-fond-jaune-lumineux-dans-les-couleurs-pastel.jpg?s=1024x1024&w=is&k=20&c=2yKBrC8oyimPdW-5IxFWN_zxFPVK3KWYL9OE2gVmVX4=">
        <p>Hello film</p>
      </Footer>
    </>
  );
}
export default App;
