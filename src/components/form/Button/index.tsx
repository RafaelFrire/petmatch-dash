type ButtonProps = {
  text: string;
  borderRounded?: boolean;
  backgroundNone?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({
  text,
  backgroundNone,
  borderRounded,
}: ButtonProps) => {
  return (
    <button
      className={`
            ${borderRounded ? "rounded-full" : "rounded-md"} 
            ${
              backgroundNone
                ? "bg-none text-black border-2 border-primary100"
                : "bg-primary100"
            } 
             text-white min-h-10`}
    >
      {text}
    </button>
  );
};

export default Button;
