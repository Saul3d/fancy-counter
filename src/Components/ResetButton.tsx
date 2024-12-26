import { ResetIcon } from "@radix-ui/react-icons";

type props = {
  setCount: (value: (prev: number) => number) => void;
};

export default function ResetButton({ setCount }: props) {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setCount(() => 0);
    e.currentTarget.blur();
  };

  return (
    <div>
      <button className="reset-btn" onClick={handleClick}>
        <ResetIcon className="reset-btn-icon" />
      </button>
    </div>
  );
}
