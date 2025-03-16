import PhoneIcon from "@/icons/PhoneIcon";
import Line from "../line";
import Contact from "./contact";
import LinkList from "./linkList";
import { listItemProps } from "./ListItem";
import { textWithIconProps } from "./textWithIcon";
import EmailIcon from "@/icons/EmailIcon";

const navLinks: listItemProps[] = [
  { path: "/", text: "Home" },
  { path: "/ongs", text: "ONGs" },
  { path: "/pets", text: "Pets" },
  { path: "/sobre", text: "Sobre nós" },
  { path: "/event", text: "Eventos" },
  { path: "/blog", text: "Artigos" },
  { path: "/contato", text: "Contato" },
];

const ContactInfo: textWithIconProps[] = [
  { text: "email@example.com", icon: <EmailIcon width={20} height={20} /> },
  { text: "(00) 99999-9999", icon: <PhoneIcon width={20} height={20} /> },
];

const Footer = () => {
  return (
    <footer className="relative h-32 py-6 ">
      <Line width="100%" height="1.5px" classname="my-4" />
      <div className="flex justify-around flex-wrap items-center py-12">
        <div className="max-w-[300px]">
          <p>
            Proin ullamcorper pretium orci. Donec nec scelerisque leo. Nam massa
            dolor imperdiet nec consequa tacon uedisem.
          </p>
        </div>
        <div className="w-[100%] md:w-[300px] py-2">
          <LinkList linkItems={navLinks} />
        </div>
        <div className="">
          <h1 className="font-semibold text-lg text-primary80 py-2">
            Entre em contato
          </h1>
          <Contact items={ContactInfo} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
