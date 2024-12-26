import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";

type props = {
  setCount: (value: (prev: number) => number) => void;
  type: "plus" | "minus";
  locked?: boolean;
};

export default function CountButton({ setCount, type, locked }: props) {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setCount((prev) => {
      const decrementCount = prev - 1;
      const incrementCount = prev + 1;
      if (decrementCount < 0 && type === "minus") return 0;
      if (incrementCount > 5 && type === "plus") return 5;
      if (type === "plus") return prev + 1;
      if (type === "minus") return prev - 1;
      return prev;
    });
    e.currentTarget.blur();
  };

  return (
    <button disabled={locked} className="count-btn" onClick={handleClick}>
      {type === "minus" ? (
        <MinusIcon className="count-btn-icon" />
      ) : (
        <PlusIcon className="count-btn-icon" />
      )}
    </button>
  );
}
