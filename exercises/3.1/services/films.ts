import { Film, NewFilm } from "../types";
import path from "node:path";
import { serialize, parse } from "../utils/json";

const jsonDbPath = path.join(__dirname, "/../data/films.json");

const defaultFilms: Film[] = [
  {
    id: 1,
    title: "Inception",
    director: "Christopher Nolan",
    duration: 148,
    budget: 160_000_000,
    description:
      "Un voleur s’infiltre dans les rêves pour voler des secrets, mais doit réaliser l’impossible : implanter une idée.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/7/7e/Inception_ver3.jpg",
  },
  {
    id: 2,
    title: "The Matrix",
    director: "Lana & Lilly Wachowski",
    duration: 136,
    budget: 63_000_000,
    description:
      "Un hacker découvre que la réalité est une simulation contrôlée par des machines.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/c/c1/The_Matrix_Poster.jpg",
  },
  {
    id: 3,
    title: "Parasite",
    director: "Bong Joon-ho",
    duration: 132,
    budget: 11_000_000,
    description:
      "Une famille pauvre infiltre progressivement une riche demeure avec des conséquences inattendues.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/5/53/Parasite_%282019_film%29.png",
  },
];

function createFilm(newFilm: NewFilm): Film {
  const films = parse(jsonDbPath, defaultFilms);
  const nextId =
    films.reduce((maxId, film) => (film.id > maxId ? film.id : maxId), 0) + 1;

  const tmp: Film = {
    id: nextId,
    title: newFilm.title,
    director: newFilm.director,
    duration: newFilm.duration,
    budget: newFilm.budget,
    description: newFilm.description,
    imageUrl: newFilm.imageUrl,
  };
  films.push(tmp);
  serialize(jsonDbPath, films);
  return tmp;
}

function readFilmById(id: number): Film | undefined {
  const films = parse(jsonDbPath, defaultFilms);
  return films.find((film) => film.id === id);
}

function readAllFilm(min_duration: number): Film[] {
  const films = parse(jsonDbPath, defaultFilms);
  if (!min_duration) return films;
  const filteredFilms = films.filter((films) => {
    return films.duration >= min_duration;
  });
  return filteredFilms;
}

function deleteFilm(id: number): Film | undefined {
  const films = parse(jsonDbPath, defaultFilms);
  const index = films.findIndex((film) => film.id === id);
  if (index === -1) {
    return undefined;
  }
  const deletedFilm = films.splice(index, 1);
  serialize(jsonDbPath, films);
  return deletedFilm[0];
}

function updateFilm(id: number, newFilm: Partial<NewFilm>): Film | undefined {
  const films = parse(jsonDbPath, defaultFilms);
  const film = films.find((film) => film.id === id);
  if (!film) return undefined;
  if (newFilm.title) {
    film.title = newFilm.title;
  }
  if (newFilm.director) {
    film.director = newFilm.director;
  }
  if (newFilm.duration) {
    film.duration = newFilm.duration;
  }
  if (newFilm.budget) {
    film.budget = newFilm.budget;
  }
  if (newFilm.description) {
    film.description = newFilm.description;
  }
  if (newFilm.imageUrl) {
    film.imageUrl = newFilm.imageUrl;
  }
  serialize(jsonDbPath, films);
  return film;
}

export { createFilm, readFilmById, readAllFilm, deleteFilm, updateFilm };