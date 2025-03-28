'use client'
import { useEffect, useState } from "react";
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
  { path: "/contact", text: "Contato" },
];

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);


  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize()

    // Adiciona o listener para detectar mudanças no tamanho da tela
    window.addEventListener("resize", handleResize);

    // Remove o listener ao desmontar o componente
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobile]); // Rodamos apenas uma vez ao montar o componente


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
