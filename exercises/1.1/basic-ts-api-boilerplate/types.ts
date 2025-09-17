
interface Film {
  id : number;
  title : string;
  director : string;
  duration : number;
  budget : number | undefined;
  description : string | undefined;
  imageUrl : string | undefined;
}

export type { Film };
