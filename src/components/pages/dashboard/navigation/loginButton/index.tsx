import { LogOutIcon } from "lucide-react";
import { signOut } from "next-auth/react";

type LogoutButtonProps = {
  toggle?: boolean; // true = sidebar fechado
};

const LogoutButton: React.FC<LogoutButtonProps> = ({ toggle = false }) => {
  return (
    <button
      onClick={() => signOut()}
      className={`flex items-center px-2 py-2 rounded-md transition-all duration-300 bg-primary100 hover:bg-primary100/90 text-white ${
        toggle ? "justify-center w-[50px]" : "w-[253px]"
      }`}
    >
      <div className="p-1">
        <LogOutIcon className="w-6 h-6" />
      </div>
      {!toggle && (
        <span className="text-sm font-semibold tracking-wide ml-2">Sair</span>
      )}
    </button>
  );
};

export default LogoutButton;
