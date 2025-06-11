"use client";
import Line from "../line";
import MobileHeader from "../Mobile/mobileHeader";
import ButtonLogin from "./buttonLogin";
import InputSearch from "./InputSearch";
import Navbar from "./navbar";
import { navlinkProps } from "./navLink";

const navLinks: navlinkProps[] = [
  { path: "/", text: "Home" },
  { path: "/ongs", text: "ONGs" },
  { path: "/pets", text: "Pets" },
  { path: "/about", text: "Sobre nós" },
  { path: "/event", text: "Eventos" },
  { path: "/blog", text: "Artigos" },
];

const Header = () => {
  return (
    <header className="py-4">
      <div className="md:hidden">
        <MobileHeader />
      </div>

      <div className="hidden md:block">
        <div className="flex justify-center items-center gap-10">
          <InputSearch placeholder="Encontre o seu pet" />
          <ButtonLogin text="Login" />
        </div>
        <Line width="100%" height="1.5px" classname="my-4" />
        <Navbar navLinks={navLinks} />
      </div>
    </header>
  );
};

export default Header;
