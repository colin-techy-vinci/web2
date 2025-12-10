import { useEffect, useState } from "react";
import type { Joke } from "./type";

function App() {
  const [joke, setJoke] = useState<Joke>()
  useEffect(() => {
    fetch("https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw&type=single")
      .then((response) => {
        if (!response.ok)
          throw new Error(`fetch error : ${response.status} : ${response.statusText}`);
        return response.json();
      })
      .then((joke) => setJoke(joke))
      .catch((err) => {
        console.error("Jokes::error", err);
      })
  }, []);
  return(
    <p>{joke?.category} {joke?.joke}</p>
  )

}

export default App
