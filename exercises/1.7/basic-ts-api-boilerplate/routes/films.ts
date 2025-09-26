import { Router } from "express";
import { Film, NewFilm } from "../types";
import path from "node:path";
import { serialize, parse } from "../utils/json";
const jsonDbPath = path.join(__dirname, "/../data/films.json");

const router = Router();

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

router.post("/", (req, res) => {
  const body : unknown = req.body;
  if (!body 
    || typeof body !== "object" 
    || !("title" in body) 
    || !("director" in body)
    || !("duration" in body)
    || typeof body.duration !== "number"
    || typeof body.title !== "string"
    || typeof body.director !== "string"
    || body.duration <= 0) {
      return res.sendStatus(400);
    }
  if ("budget" in body && (typeof body.budget !== "number" || body.budget <= 0)){
    return res.sendStatus(400);
  }
  if ("description" in body && typeof body.description !== "string"){
    return res.sendStatus(400);
  }
  if ("imageUrl" in body && typeof body.imageUrl !== "string"){
    return res.sendStatus(400);
  }
  const {title, director, duration, budget, description, imageUrl } = req.body as NewFilm;

  const films = parse(jsonDbPath, defaultFilms);
  const nextId = films.reduce((maxId, film) => (film.id > maxId ? film.id : maxId), 0) + 1;

  const newFilm : Film = {
    id : nextId,
    title,
    director,
    duration,
    budget,
    description,
    imageUrl,
  };
  films.push(newFilm);
  serialize(jsonDbPath, films);
  return res.json(newFilm);
  
});

router.get("/:id", (req, res) => {
  const id = Number(req.params.id);
  const film = defaultFilms.find((film) => film.id === id);
  if (!film){
    return res.sendStatus(404);
  }
  return res.json(film);
});

router.get("/", (req, res) =>{
  const films = parse(jsonDbPath, defaultFilms);
  if (!req.query["minimum-duration"])
    return res.json(films);
  const minimumDuration = Number(req.query["minimum-duration"]);
  const filteredFilms = films.filter((films) =>{
    return films.duration >= minimumDuration;
  });
  return res.json(filteredFilms);
});

router.delete("/:id", (req, res) =>{
  const id = Number(req.params.id);
  const films = parse(jsonDbPath, defaultFilms);
  const index = films.findIndex((film) => film.id === id);
  if (index === -1){
    return res.sendStatus(404);
  }
  const deletedFilm = films.splice(index, 1);
  serialize(jsonDbPath, films);
  return res.json(deletedFilm[0]);
});

router.patch("/:id", (req, res) =>{
  const id = Number(req.params.id);
  const films = parse(jsonDbPath, defaultFilms);
  const film = films.find((film) => film.id === id);
  if (!film){
    return res.sendStatus(404);
  }
  const body: unknown = req.body;

  if (
    !body ||
    typeof body !== "object"
    || ("title" in body && (typeof body.title !== "string")) 
    || ("director" in body && (typeof body.director !== "string"))
    || ("duration" in body && (typeof body.duration !== "number" || body.duration <= 0))
    || ("budget" in body && (typeof body.budget !== "number" || body.budget <= 0))
    || ("description" in body && typeof body.description !== "string")
    || ("imageUrl" in body && typeof body.imageUrl !== "string"))
      return res.sendStatus(400);

  const {title, director, duration, budget, description, imageUrl }: Partial<NewFilm> = body as Partial<NewFilm>;

  if (title){
    film.title = title;
  }
  if (director){
    film.director = director;
  }
  if (duration){
    film.duration = duration;
  }
  if (budget){
    film.budget = budget;
  }
  if (description){
    film.description = description;
  }
  if (imageUrl){
    film.imageUrl = imageUrl;
  }
  serialize(jsonDbPath, films);
  return res.json(film);
});

router.put("/:id", (req, res) =>{
  const id = Number(req.params.id);
  const body: unknown = req.body;
  if (
    !body ||
    typeof body !== "object"
    || ("budget" in body && (typeof body.budget !== "number" || body.budget <= 0))
    || ("description" in body && typeof body.description !== "string")
    || ("imageUrl" in body && typeof body.imageUrl !== "string")){
      return res.sendStatus(400);
  }
  const films = parse(jsonDbPath, defaultFilms);
  const film = films.find((film) => film.id === id);
  if (!film){
    if (!("title" in body) 
    || !("director" in body)
    || !("duration" in body)
    || typeof body.duration !== "number"
    || typeof body.title !== "string"
    || typeof body.director !== "string"
    || body.duration <= 0) {
      return res.sendStatus(400);
    }
    const {title, director, duration, budget, description, imageUrl } = req.body as NewFilm;
    const newFilm : Film = {
      id : id,
      title,
      director,
      duration,
      budget,
      description,
      imageUrl,
    };
    films.push(newFilm);
    serialize(jsonDbPath, films);
    return res.json(newFilm);
  }

  if (("title" in body && (typeof body.title !== "string")) 
    || ("director" in body && (typeof body.director !== "string"))
    || ("duration" in body && (typeof body.duration !== "number" || body.duration <= 0))){
      return res.sendStatus(400);
  }

  const {title, director, duration, budget, description, imageUrl }: Partial<NewFilm> = body as Partial<NewFilm>;

  if (title){
    film.title = title;
  }
  if (director){
    film.director = director;
  }
  if (duration){
    film.duration = duration;
  }
  if (budget){
    film.budget = budget;
  }
  if (description){
    film.description = description;
  }
  if (imageUrl){
    film.imageUrl = imageUrl;
  }
  serialize(jsonDbPath, films);
  return res.json(film);
});
export default router;
