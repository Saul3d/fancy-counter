import React from "react";

type props = {
  num1: number;
  num2: number;
};

export default function Sum({ num1, num2 }: props) {
  const total = num1 + num2;
  return (
    <>
      <h1>This is a component used to test jest</h1>
      <p>The total is {total}</p>
    </>
  );
}
