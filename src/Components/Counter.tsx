type props = {
  count: number;
};

export default function Counter({ count }: props) {
  return (
    <>
      <p className="count">{count}</p>
    </>
  );
}
