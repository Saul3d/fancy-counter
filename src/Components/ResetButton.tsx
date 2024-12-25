import { ResetIcon } from "@radix-ui/react-icons";

type props = {
  setCount: (value: (prev: number) => number) => void;
};

export default function ResetButton({ setCount }: props) {
  return (
    <div>
      <button className="reset-btn" onClick={() => setCount(() => 0)}>
        <ResetIcon className="reset-btn-icon" />
      </button>
    </div>
  );
}
