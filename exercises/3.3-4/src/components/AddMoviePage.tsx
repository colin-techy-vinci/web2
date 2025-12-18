import AddMovieForm from "./Film/AddMovieForm";
import { useOutletContext } from "react-router-dom";
import type { MovieContext } from "../type";
const AddMoviePage = () => {
    const {onMovieAdded} : MovieContext = useOutletContext();
    return (
        <div>
            <AddMovieForm onMovieAdded={onMovieAdded}/>
        </div>
    );
}
export default AddMoviePage;