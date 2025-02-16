"use client";
import InputRadius from "../inputRadius";

type TermsProps = {
  text: string;
  classname?: string;
  error?: string;
  value: boolean;
  onChange: (value: boolean) => void;
};


const AcceptTerms: React.FC<TermsProps> = ({ text, classname, error, value, onChange }) => {

  return (
      <div
        className={`flex flex-col gap-1 ${classname} w-64`}
        onClick={() => onChange(!value)}
      >
        <div className="flex gap-1">
        <InputRadius active={value} />
        {text}
        </div>
        {error && <p className="text-red-500 text-xs px-6">{error}</p>}
      </div>
  );
};
export default AcceptTerms;
