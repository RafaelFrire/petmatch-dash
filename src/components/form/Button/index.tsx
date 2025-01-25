type ButtonProps = {
  text: string;
  borderRounded?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;


const Button:React.FC<ButtonProps> = ({text, borderRounded}:ButtonProps) =>{
    return (
      <button
        className={`
            ${borderRounded ? "rounded-full" : "rounded-md"} 
            bg-primary100 text-white min-h-10`}
      >
        {text}
      </button>
    );
}

export default Button;