import Line from "../line";
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
  return (
    <header className="py-4">
      <div className="flex justify-center">
        <InputSearch placeholder="Encontre o seu pet" />
      </div>
      <Line width="100vw" height="1.5px" classname="my-4" />
      <Navbar navLinks={navLinks} />
    </header>
  );
};

export default Header;
