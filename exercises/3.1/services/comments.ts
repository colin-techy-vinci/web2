import { Comment} from "../types";
import path from "node:path";
import { serialize, parse } from "../utils/json";
import { readFilmById } from "./films";

const jsonDbPath = path.join(__dirname, "/../data/comments.json");


function createComment(newComment: Comment): void  {
    const comments = parse<Comment>(jsonDbPath);

    const filmFind = readFilmById(newComment.filmId);
    if (!filmFind)
        throw new Error("Film not found");

    const userHasCommented = comments.some((c) => c.filmId === newComment.filmId && c.username === newComment.username);
    if (userHasCommented)
        throw new Error("Conflict");
    comments.push(newComment);
    serialize(jsonDbPath, comments);
}


function readAllComment(film_id: number | undefined): Comment[] {
    const comments = parse<Comment>(jsonDbPath);

    if (film_id){
        const commentFilter = comments.filter((c) => c.filmId === film_id);
        return commentFilter;
    }
    return comments;
}

function deleteComment(film_id: number, username: string): Comment {
  const comments = parse<Comment>(jsonDbPath);

    const index = comments.findIndex((c) => c.filmId === film_id && c.username === username);
    if (index === -1)
        throw new Error("Not found");
    const deletedComment = comments.splice(index, 1);
    serialize(jsonDbPath, comments);
    return deletedComment[0];
}


export {createComment, readAllComment, deleteComment};