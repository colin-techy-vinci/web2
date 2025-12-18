import type { Film, NewFilm } from "./type";

const fetchMovie = async (): Promise<Film[]> => {
  try {
    const response = await fetch("/api/films");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    if (!data || !Array.isArray(data)) {
      throw new Error("Invalid data");
    }
    return data;
  } catch (error) {
    console.error("Error fetching movies:", error);
    throw error;
  }
};

const addMovie = async (newFilm: NewFilm): Promise<Film> => {
  try {
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
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error adding movie:", error);
    throw error;
  }
};

const deleteMovie = async (film : Film): Promise<void> => {
    try{
        const options={
            method: "DELETE"
        }
        const response = await fetch(`/api/films/${film.id}`, options);
        if (!response.ok){
            throw new Error(`HTTP error! status: ${response.status}`);
        }
    }catch (error){
        console.error("Error adding movie:", error);
        throw error;
    }
};

export {fetchMovie, addMovie, deleteMovie}
