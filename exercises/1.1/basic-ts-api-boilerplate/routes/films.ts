import { Router } from "express";
import { Film } from "../types"

const router = Router();

const films: Film[] = [
   {
    id: 1,
    title: "Inception",
    director: "Christopher Nolan",
    duration: 148,
    budget: 160_000_000,
    description: "Un voleur s’infiltre dans les rêves pour voler des secrets, mais doit réaliser l’impossible : implanter une idée.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/7/7e/Inception_ver3.jpg",
  },
  {
    id: 2,
    title: "The Matrix",
    director: "Lana & Lilly Wachowski",
    duration: 136,
    budget: 63_000_000,
    description: "Un hacker découvre que la réalité est une simulation contrôlée par des machines.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/c/c1/The_Matrix_Poster.jpg",
  },
  {
    id: 3,
    title: "Parasite",
    director: "Bong Joon-ho",
    duration: 132,
    budget: 11_000_000,
    description: "Une famille pauvre infiltre progressivement une riche demeure avec des conséquences inattendues.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/5/53/Parasite_%282019_film%29.png",
  }
]

router.get('/', (_req, res)=>{
    return res.json(films);
});

export default router;
