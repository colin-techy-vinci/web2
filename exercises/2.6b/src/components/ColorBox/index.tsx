import { useState } from "react";

const ColorBox = () => {
  const [count, setCount] = useState(0);
  const colors: string[] = ["red", "green", "blue", "yellow", "purple"];
  const clickHandle = () => {
    if (count === colors.length - 1) {
      setCount(0);
    } else setCount((count) => count + 1);
  };
  const colorRender = colors[(count + 1) % colors.length];
  return (
    <div style={{ backgroundColor: colors[count], width: "200px",
        height: "200px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "12px",
        margin: "10px",}}>
      <button onClick={clickHandle}>{colorRender}</button>
      <p>{colors[count]}</p>
    </div>
  );
};

export default ColorBox;
