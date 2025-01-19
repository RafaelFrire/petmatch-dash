import { ReactNode } from "react";

export type textWithIconProps = {
  text: string;
  icon: ReactNode;
};

const TextWithIcon = ({ text, icon }: textWithIconProps) => {
  return (
    <div className="flex gap-2">
      {icon}
      <span>{text}</span>
    </div>
  );
};

export default TextWithIcon;
