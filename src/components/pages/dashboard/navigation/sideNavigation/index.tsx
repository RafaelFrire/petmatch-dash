import {
    HomeIcon,
    ImageIcon,
    SettingsIcon,
    SquarePenIcon,
  } from "lucide-react";
import NavItem from "../navItem";
import Logo from "../logo";
import LogoutButton from "../loginButton";
  
  const SideNavigation = () => {
    const navItems = [
      { icon: <HomeIcon className="w-7 h-7" />, label: "Dashboard", active: false, route: "/dashboard" },
      { icon: <SquarePenIcon className="w-7 h-7" />, label: "Animais", active: false, route: "/dashboard/animals" },
      { icon: <ImageIcon className="w-7 h-7 text-primary100" />, label: "Eventos", active: true, route: "/dashboard/events"},
      { icon: <SettingsIcon className="w-7 h-7" />, label: "Controle ONG", active: false, route: "/dashboard/ongs"},
      { icon: <SettingsIcon className="w-7 h-7" />, label: "Controle Usuários", active: false, route: "/"},
    ];
  
    return (
      <nav className="flex flex-col h-[977px] justify-between px-6 py-8 bg-white shadow-md max-w-[310px]">
        <div className="flex flex-col items-start gap-10">
          <Logo />
  
          <div className="flex flex-col items-start gap-4">
            {navItems.map((item, index) => (
              <NavItem
                key={index}
                icon={item.icon}
                label={item.label}
                active={item.active}
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
  