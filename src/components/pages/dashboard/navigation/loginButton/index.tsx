import { LogOutIcon } from "lucide-react";

const LogoutButton = () => {
  return (
    <button className="w-[253px] h-[44px] bg-primary-100 rounded-md flex items-center px-2 hover:bg-primary-100/90">
      <div className="flex items-center">
        <div className="p-2">
          <LogOutIcon className="w-7 h-7 text-white" />
        </div>
        <div className="p-2">
          <span className="text-sm font-semibold text-white tracking-wide">
            Sair
          </span>
        </div>
      </div>
    </button>
  );
};

export default LogoutButton;
