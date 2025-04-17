import {
    HomeIcon,
    ImageIcon,
    MessageCircleMore,
    SettingsIcon,
    SquarePenIcon,
  } from "lucide-react";
import NavItem from "../navItem";
import Logo from "../logo";
import LogoutButton from "../loginButton";
  
  const SideNavigation = () => {
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
        icon: <ImageIcon className="w-7 h-7 " />,
        label: "Campanhas",
        route: "/dashboard/events",
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
      <nav className="flex flex-col min-h-[100vh] justify-between px-6 py-8 bg-white shadow-md max-w-[310px]">
        <div className="flex flex-col items-start gap-10">
          <Logo />
  
          <div className="flex flex-col items-start gap-4">
            {navItems.map((item, index) => (
              <NavItem
                key={index}
                icon={item.icon}
                label={item.label}
                path={item.route}
              />
            ))}
          </div>
        </div>
  
        <LogoutButton />
      </nav>
    );
  };
  
  export default SideNavigation;
  