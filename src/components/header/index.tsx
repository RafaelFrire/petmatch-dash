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
  { path: "/sobre", text: "Sobre nós" },
  { path: "/eventos", text: "Eventos" },
  { path: "/artigos", text: "Artigos" },
  { path: "/contato", text: "Contato" },
];

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 768);
  }, [isMobile]);

  return (
    <header className="py-4">
      {isMobile ? (
        <MobileHeader />
      ) : (
        <>
          <div className="flex justify-center items-center gap-10">
            <InputSearch placeholder="Encontre o seu pet" />
            <ButtonLogin text="Login" />
          </div>
          <Line width="100%" height="1.5px" classname="my-4" />
          <Navbar navLinks={navLinks} />
        </>
      )}
    </header>
  );
};

export default Header;
