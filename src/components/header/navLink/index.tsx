
export type navlinkProps = {
  text: string;
  path: string;
};


const NavLink = ({text, path}:navlinkProps) =>{
    return(
        <a href={`${path}`} className="font-normal text-primary100">
            {text}
        </a>
    );
}

export default NavLink