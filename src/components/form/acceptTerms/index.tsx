"use client";
import { useState } from "react";
import InputRadius from "../inputRadius";

type termsProps = {
  text: string;
};

const AcceptTerms: React.FC<termsProps> = ({ text }) => {
  const [isActive, setActive] = useState<boolean>(false);

  const handleChangeState = () => {
    setActive(!isActive);
  };
  return (
    <div className="flex gap-1 items-center" onClick={handleChangeState}>
      <InputRadius active={isActive} />
      {text}
    </div>
  );
};
export default AcceptTerms;
