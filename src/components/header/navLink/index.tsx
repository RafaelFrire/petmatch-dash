'use client'
import { usePathname } from "next/navigation";
export type navlinkProps = {
  text: string;
  path: string;
};


const NavLink = ({text, path}:navlinkProps) =>{
  const pathname = usePathname();
  const isSelected = pathname === path;

  console.log("path", pathname)
  console.log("select", path)
  return (
    <a
      href={`${path}`}
      className={`font-normal ${
        isSelected ? "text-primary60 underline decoration-2 underline-offset-4 " : "text-primary100"
      }`}
    >
      {text}
    </a>
  );
}

export default NavLink