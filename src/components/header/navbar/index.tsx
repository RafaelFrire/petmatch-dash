import NavLink, { navlinkProps } from "../navLink";

type navbarProps = {
navLinks: navlinkProps[];

} & React.PropsWithChildren<
  React.ComponentPropsWithRef<"nav">
>;

const Navbar:React.FC<navbarProps> = ({navLinks}:navbarProps) =>{
    return(
        <nav className="flex justify-between max-w-xl mx-auto">
            {navLinks.map((text, index) =>{
                return (
                  <div key={index} className="flex">
                    <NavLink text={text.text} path={text.path} />
                  </div>
                );   
            })}
        </nav>
    )
}

export default Navbar;