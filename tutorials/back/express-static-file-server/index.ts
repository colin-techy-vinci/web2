import express from "express";

const app = express();

app.use(express.static("public"));

const PORT: number = 3232;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});