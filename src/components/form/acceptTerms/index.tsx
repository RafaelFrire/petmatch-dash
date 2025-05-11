"use client";
import InputRadius from "../inputRadius";

type TermsProps = {
  text: string;
  classname?: string;
  error?: string;
  value: boolean;
  onChange: (value: boolean) => void;
};

const AcceptTerms: React.FC<TermsProps> = ({
  text,
  classname,
  error,
  value,
  onChange,
}) => {
  return (
    <div
      className={`flex flex-col flex-wrap justify-between gap-1 max-w-md w-full ${classname}`}
      onClick={() => onChange(!value)}
    >
      <div className="flex items-center gap-1 md:w-[400px]">
        <InputRadius active={value} />
        <p className="text-md">{text}</p>
      </div>
      {error && <p className="text-red-500 text-xs px-6">{error}</p>}
    </div>
  );
};
export default AcceptTerms;
