import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  path: string;
}

const NavItem = ({ icon, label, path }: NavItemProps) => {
  const pathname = usePathname();
  const [isActive, setActive] = useState(false);

  useEffect(() =>{
    if(pathname === path){
      setActive(true)
    }
    else{
      setActive(false)
    }
  }, [pathname])
  return (
    <a href={path || "/"}>
    <div
      className={`w-[253px] flex items-center px-2 rounded-md cursor-pointer hover:bg-gray-500 ${
        isActive ? "bg-gray-200 text-primary100" : "bg-white"
      }`}
    >
      <div className="flex items-center">
        <div className="p-2">{icon}</div>
        <div className="p-2">
          <span
            className={`text-sm tracking-wide ${
              isActive ? "font-semibold text-primary100" : "font-normal text-gray-700"
            }`}
          >
            {label}
          </span>
        </div>
      </div>
    </div>
    </a>

  );
};

export default NavItem;
