import React from "react";

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  path: string;
}

const NavItem = ({ icon, label, active = false, path }: NavItemProps) => {
  return (
    <a href={path || "/"}>
    <div
      className={`w-[253px] flex items-center px-2 rounded-md cursor-pointer hover:bg-gray-500 ${
        active ? "bg-gray-200" : "bg-white"
      }`}
    >
      <div className="flex items-center">
        <div className="p-2">{icon}</div>
        <div className="p-2">
          <span
            className={`text-sm tracking-wide ${
              active ? "font-semibold text-primary100" : "font-normal text-gray-700"
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
