import CheckWhiteIcon from "@/icons/CheckWhiteIcon";

type InputProps = {
  active: boolean;
} & React.InputHTMLAttributes<HTMLDivElement>
;

const InputRadius:React.FC<InputProps> = ({active}) =>{
    return (
      <div
        className={`w-5 h-5 flex justify-center items-center border rounded-full ${
          active ? " bg-sencondary100" : null
        }`}
      >
        {active && <CheckWhiteIcon width={15} height={15} />}
      </div>
    );
}

export default InputRadius