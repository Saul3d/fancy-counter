import { ReactNode } from "react";

type ButtonContainerProps = {
  children: ReactNode;
};

export default function ButtonContainer({ children }: ButtonContainerProps) {
  return <div className="button-container">{children}</div>;
}
