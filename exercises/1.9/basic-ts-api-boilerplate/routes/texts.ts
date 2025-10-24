import { Router } from "express";
import {readAllText, readOneText, createText, deleteText, updateText} from "../services/texts"
import { NewText } from "../types";


const router = Router();

router.get("/", (req, res) =>{
    const levelFilter = req.query["level"];
    if (levelFilter && (levelFilter !== "easy" && levelFilter !== "medium" && levelFilter !== "hard"))
        return res.sendStatus(400);
    const texts = readAllText(levelFilter as string);
    return res.json(texts);
})

router.get("/:id", (req, res) =>{
    const id = String(req.params.id);
    const text = readOneText(id);
    if (!text)
        return res.sendStatus(404);
    return res.json(text);
})

router.post("/", (req, res) =>{
    const body: unknown = req.body;
    if (!body || typeof body !== "object"
        || !("content" in body) 
        || !("level" in body)
        || typeof body.content !== "string"
        || typeof body.level !== "string"
        || (body.level !== "easy" && body.level !== "medium" && body.level !== "hard"))
        return res.sendStatus(400);
    const {content, level} = req.body as NewText;
    const text = createText(({content, level}))
    return res.json(text);
})

router.delete("/:id", (req, res) =>{
    const id = String(req.params.id);
    const text = deleteText(id);
    if (!text)
        return res.sendStatus(404);
    return res.json(text);
})

router.put("/:id", (req, res) =>{
    const id = String(req.params.id);
    const body : unknown = req.body;
    if (!body || typeof body !== "object"
        || ("content" in body && (typeof body.content !== "string"))
        || ("level" in body && (typeof body.level !== "string" || (body.level !== "easy" && body.level !== "medium" && body.level !== "hard"))))
        return res.sendStatus(400);
    const {content, level} = req.body as Partial<NewText>;
    const text = updateText(id, ({content, level}))
    if (!text)
        return res.sendStatus(404);
    return res.json(text);
})
export default router;