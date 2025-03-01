import PawDogRed from "@/icons/PawDogRed";

type buttonRedirectProps = {
  text: string;
  redirect: string;
  isActive: boolean;
} & React.HtmlHTMLAttributes<HTMLButtonElement>;

export const ButtonRedirect: React.FC<buttonRedirectProps> = ({ text, redirect, isActive }) => {
  return (
    <a href={redirect}>
      <div className="flex items-center text-xl gap-1">
        <h1 className={`${isActive ? "text-primary100" : ""}`}>{text}</h1>
        {isActive ? <PawDogRed width={28} height={28} /> : false}
      </div>
    </a>
  );
};