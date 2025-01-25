import PawDog from "@/icons/PawDog";

type buttonRedirectProps = {
  text: string;
  isActive: boolean;
} & React.HtmlHTMLAttributes<HTMLButtonElement>;

export const ButtonRedirect: React.FC<buttonRedirectProps> = ({ text, isActive }) => {
  return (
    <div className="flex items-center text-xl gap-1">
      <h1 className={`${isActive ? 'text-primary100': ''}`}>{text}</h1>
      {isActive ? <PawDog width={28} height={28} /> : false}
    </div>
  );
};