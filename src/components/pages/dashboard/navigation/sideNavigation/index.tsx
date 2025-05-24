'use client';

import {
  HomeIcon,
  ImageIcon,
  MessageCircleMore,
  SettingsIcon,
  SquarePenIcon,
  UserPlus,
  MenuIcon,
  XIcon,
} from "lucide-react";
import { useState } from "react";
import NavItem from "../navItem";
import Logo from "../logo";
import LogoutButton from "../loginButton";

const SideNavigation = () => {
  const [isOpen, setIsOpen] = useState(true);

  const navItems = [
    {
      icon: <HomeIcon className="w-7 h-7" />,
      label: "Dashboard",
      route: "/dashboard",
    },
    {
      icon: <SquarePenIcon className="w-7 h-7" />,
      label: "Animais",
      route: "/dashboard/animals",
    },
    {
      icon: <ImageIcon className="w-7 h-7" />,
      label: "Campanhas",
      route: "/dashboard/events",
    },
    {
      icon: <UserPlus className="w-7 h-7" />,
      label: "Pedidos de adoção",
      route: "/dashboard/adoption",
    },
    {
      icon: <MessageCircleMore className="w-7 h-7" />,
      label: "Mensagens",
      route: "/dashboard/chat",
    },
    {
      icon: <SettingsIcon className="w-7 h-7" />,
      label: "Configurações",
      route: "/dashboard/settings",
    },
  ];

  return (
    <nav
      className={`relative flex flex-col min-h-[100vh] justify-between px-6 py-8 bg-white shadow-md transition-all duration-300 ${
        isOpen ? "max-w-[310px] w-[310px]" : "max-w-[80px] w-[80px]"
      }`}
    >
      {/* Botão de toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="absolute top-4 right-4 z-10 p-1 rounded hover:bg-gray-200"
      >
        {isOpen ? (
          <XIcon className="w-5 h-5" />
        ) : (
          <MenuIcon className="w-5 h-5" />
        )}
      </button>

      <div className="flex flex-col items-start gap-10">
        {isOpen && (
          <div className={`${!isOpen && "mx-auto"}`}>
            <Logo />
          </div>
        )}

        <div
          className={`flex flex-col items-start gap-4 w-full ${
            !isOpen ? "py-24" : "mx-auto"
          }`}
        >
          {navItems.map((item, index) => (
            <NavItem
              key={index}
              icon={item.icon}
              label={isOpen ? item.label : ""} // esconde o texto
              path={item.route}
              toggle={!isOpen} // passa o valor do toggle
            />
          ))}
        </div>
      </div>

      <div className={`${!isOpen && "mx-auto"}`}>
        <LogoutButton
          toggle={!isOpen} // passa o valor do toggle
        />
      </div>
    </nav>
  );
};

export default SideNavigation;
