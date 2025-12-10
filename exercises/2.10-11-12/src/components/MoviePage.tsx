
import type { MovieContext } from "../type";
import MovieListView from "./Film/ViewMovieForm";

import { useOutletContext } from "react-router-dom";
const MoviePage = () => {
  const {films} : MovieContext = useOutletContext();
  return (
    <div>
      <MovieListView films={films} />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}
export default MoviePage;