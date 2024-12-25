import React, { useState } from "react";
import Title from "./Title";
import Counter from "./Counter";
import ResetButton from "./ResetButton";
import CountButtons from "./CountButtons";

const Card = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="card">
      <Title />
      <Counter count={count} />
      <ResetButton setCount={setCount} />
      <CountButtons setCount={setCount} />
    </div>
  );
};

export default Card;
