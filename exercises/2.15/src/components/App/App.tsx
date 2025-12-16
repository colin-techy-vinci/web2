import { useNavigate, Outlet } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";
import type { Film, MovieContext, NewFilm } from "../../type";
import { useEffect, useState } from "react";

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
  useEffect(() => {
    fetchFilms();
  }, []);
  const fetchFilms = async () => {
    try{
      const films = await getAllFilms();
      setFilms(films);
    }catch(error){
      console.error("Error in fetchFilms:", error);
    }
  };
  const onMovieAdded = async (newFilm: NewFilm) => {
      try{
        const options = {
        method: "POST",
        body: JSON.stringify(newFilm),
        headers: {
          "Content-Type": "application/json",
        },
      };
        const response = await fetch("/api/films", options);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const createMovie = await response.json();
        setFilms([...films, createMovie]);
      }catch(error){
          console.error("Error adding movie:", error);
      }
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
async function getAllFilms() {
  try{
    const response = await fetch("/api/films");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const films = await response.json();
    return films;
  }catch(error){
    console.error("Error fetching movies:", error);
    throw error;
  }
};
export default App;
