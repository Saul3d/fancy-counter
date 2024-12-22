import React from "react";
import Title from "./Title";
import Counter from "./Counter";
import ResetButton from "./ResetButton";
import CountButtons from "./CountButtons";

const Card = () => {
  return (
    <>
      <Title />
      <Counter />
      <ResetButton />
      <CountButtons />
    </>
  );
};

export default Card;
