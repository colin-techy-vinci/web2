import express from "express";

import filmRouter from "./routes/films";
import textRouter from "./routes/texts";

const app = express();
let i = 0;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/films", filmRouter);
app.use("/texts", textRouter);

app.use((_req, _res, next) => {
  i++;
  console.log("GET counter: " + i);
  next();
});

export default app;
