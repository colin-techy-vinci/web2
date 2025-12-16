import { useEffect, useState } from "react";
import type { Joke } from "./type";

function App() {
  const [joke, setJoke] = useState<Joke>()

  const fetchJoke = () => {
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
  };
  useEffect(() => {
    fetchJoke();
    setInterval(fetchJoke, 10000);
  }, []);

  return(
    <p>{joke?.category} {joke?.joke}</p>
  )

}

export default App
