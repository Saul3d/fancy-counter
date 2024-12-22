import React from "react";
import Title from "./Components/Title";
import Counter from "./Components/Counter";
import ResetButton from "./Components/ResetButton";
import CountButtons from "./Components/CountButtons";

const Card = () => {
  return (
    <>
      <Title />
      <Counter number={0} />
      <ResetButton />
      <CountButtons />
    </>
  );
};

export default Card;
