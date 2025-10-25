import { useState } from "react";
interface ClickProps {
  title: string;
  message: string;
}
const ClickCounter = ({ title, message }: ClickProps) => {
  const [count, setCount] = useState(0);
  const ClickHandle = () => {
    setCount((count) => count + 1);
  };
  return (
    <footer>
      <h1>{title}</h1>
      <button onClick={ClickHandle}>count is {count}</button>
      <p>{count >= 10 ? message : ""}</p>
    </footer>
  );
};

export default ClickCounter;
