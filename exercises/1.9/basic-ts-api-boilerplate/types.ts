interface Film {
  id : number;
  title : string;
  director : string;
  duration : number;
  budget : number | undefined;
  description : string | undefined;
  imageUrl : string | undefined;
}

type Level = "easy" | "medium" | "hard";

interface Text{
  id : string;
  content : string;
  level : Level
}

type NewFilm = Omit<Film, "id">;
type NewText = Omit<Text, "id">;

export type { Film, NewFilm, Text, NewText };
