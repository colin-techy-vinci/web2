import { Router } from "express";
import {NewFilm } from "../types";
import { createFilm, readAllFilm, readFilmById, deleteFilm, updateFilm } from "../services/films"
import { authorize } from "../utils/auths";

const router = Router();

router.post("/", authorize, (req, res) => {
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

  const addFilm = createFilm(({title, director, duration, budget, description, imageUrl }))

  return res.json(addFilm);
  
});

router.get("/:id", (req, res) => {
  const id = Number(req.params.id);
  const film = readFilmById(id);
  if (!film){
    return res.sendStatus(404);
  }
  return res.json(film);
});

router.get("/", (req, res) =>{
  const minimumDuration = Number(req.query["minimum-duration"]);
  const film = readAllFilm(minimumDuration)
  return res.json(film);
});

router.delete("/:id",authorize, (req, res) =>{
  const id = Number(req.params.id);
  const film = deleteFilm(id);
  if (!film)
    return res.sendStatus(404);
  return res.json(film);
});

router.patch("/:id",authorize, (req, res) =>{
  const id = Number(req.params.id);
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
  const film = updateFilm(id, {title, director, duration, budget, description, imageUrl });
  if (!film){
    return res.sendStatus(404);
  }
  return res.json(film);
});

router.put("/:id", authorize,(req, res) =>{
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
  const film = readFilmById(id);
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
    const newFilm = createFilm({title, director, duration, budget, description, imageUrl });
    return res.json(newFilm);
  }

  if (("title" in body && (typeof body.title !== "string")) 
    || ("director" in body && (typeof body.director !== "string"))
    || ("duration" in body && (typeof body.duration !== "number" || body.duration <= 0))){
      return res.sendStatus(400);
  }

  const {title, director, duration, budget, description, imageUrl }: Partial<NewFilm> = body as Partial<NewFilm>;
  const updatedFilm = updateFilm(id,{title, director, duration, budget, description, imageUrl })
  return res.json(updatedFilm);
});
export default router;