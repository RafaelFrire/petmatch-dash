export type InputProps = {
  label: string;
  name: string;
  borderRounded?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Input: React.FC<InputProps> = ({
  id,
  label,
  name,
  borderRounded,
  ...props
}: InputProps) => {
  return (
    <div className="flex flex-col gap-2">
      {label && <label htmlFor={id || name}>{label}</label>}
      <input
        id={name}
        name={name}
        {...props}
        className={`
            ${borderRounded ? "rounded-full" : "rounded-md"} 
            min-h-10 border-2 border-primary100 p-2.5 focus:outline-2 focus:outline-sencondary100`}
      />
    </div>
  );
};

export default Input;
