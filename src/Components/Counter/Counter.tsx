type props = {
  num1: number;
  num2: number;
};

export default function Counter({ num1, num2 }: props) {
  const total = num1 + num2;
  return (
    <>
      <p>{total}</p>
    </>
  );
}
