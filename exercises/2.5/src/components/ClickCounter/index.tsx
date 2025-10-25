import { useState } from "react";
interface ClickProps {
  title: string;
  messageClick: string;
  messageMouse: string;
}
const ClickCounter = ({ title, messageClick, messageMouse }: ClickProps) => {
  const [count, setCount] = useState(0);
  const [onButton, setBouton] = useState(false);

  const MouseHandleOn = () => {
    setBouton(true);
  };
  const MouseHandleOff = () => {
    setBouton(false);
  };
  const ClickHandle = () => {
    setCount((count) => count + 1);
  };
  return (
    <div className="card">
      <h4>{title}</h4>
      <p>{onButton ? messageMouse : null}</p>
      <button
        onClick={ClickHandle}
        onMouseEnter={MouseHandleOn}
        onMouseLeave={MouseHandleOff}
      >
        count is {count}
      </button>
      <p>{count >= 10 ? messageClick : null}</p>
      <p>
        Edit <code>src/App.tsx</code> and save to test HMR
      </p>
    </div>
  );
};

export default ClickCounter;
