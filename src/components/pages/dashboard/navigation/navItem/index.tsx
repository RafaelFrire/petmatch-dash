import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  path: string;
  toggle?: boolean; // true = sidebar fechado
}

const NavItem = ({ icon, label, path, toggle = false }: NavItemProps) => {
  const pathname = usePathname();
  const [isActive, setActive] = useState(false);

  useEffect(() => {
    setActive(pathname === path);
  }, [pathname, path]);

  return (
    <a href={path || "/"}>
      <div
        className={`flex items-center gap-2 px-2 py-2 rounded-md cursor-pointer transition-all duration-300 hover:bg-gray-100 ${
          isActive ? "bg-gray-200 text-primary100" : "bg-white"
        } ${toggle ? "justify-center w-[50px]" : "w-[253px]"}`}
      >
        <div className="p-1">{icon}</div>
        {!toggle && (
          <span
            className={`text-sm tracking-wide ${
              isActive ? "font-semibold text-primary100" : "font-normal text-gray-700"
            }`}
          >
            {label}
          </span>
        )}
      </div>
    </a>
  );
};

export default NavItem;
