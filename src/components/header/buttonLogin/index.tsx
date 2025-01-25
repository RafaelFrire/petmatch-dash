import UserIcon from "@/icons/UserIcon";

type buttonProps = {
  text: string;
} & React.PropsWithChildren<React.ComponentPropsWithRef<"button">>;

const ButtonLogin:React.FC<buttonProps> = ({text, ...props}:buttonProps) => {
  return (
    <a href="/login">
      <div className="flex items-center gap-2">
        <UserIcon width={30} height={30} className="cursor-pointer" />
        <button
          {...props}
          className="text-primary100 font-semibold cursor-pointer hover:text-primary-20"
        >
          {text}
        </button>
      </div>
    </a>
  );
};

export default ButtonLogin;
