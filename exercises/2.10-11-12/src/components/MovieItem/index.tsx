import { useState } from "react";

interface MovieProps {
  title: string;
  director: string;
  description: string;
}

const MovieItem = ({ title, director, description }: MovieProps) => {
  const [clickDescription, setClick] = useState(false);
  const handleClick = () => {
    setClick((desc) => !desc);
  }
  return (
    <tr>
      <li onClick={handleClick}>
        <td>{title}</td>
        <td>- Réalisateur : {director}</td>
        {clickDescription ? <p>{description}</p> : null}
      </li>
    </tr>
  );
};
export default MovieItem;
