type props = {
  num1: number;
  num2: number;
};

export default function Sum({ num1, num2 }: props) {
  const total = num1 + num2;
  return total;
}
