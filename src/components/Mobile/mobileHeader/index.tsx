import HomeIcon from "@/icons/HomeIcon";
import Link from "./Link";
import SearchIcon from "@/icons/SearchIcon";
import UserIcon from "@/icons/UserIcon";
import PawDog from "@/icons/PawDog";
import ThreeDotIcon from "@/icons/ThreeDotIcon";



const MobileHeader = () =>{
    return (
      <div className="flex items-center justify-between px-2 py-2">
        <Link path={"/"} icon={<HomeIcon width={30} height={30} />} />
        <Link path={"#"} icon={<SearchIcon width={30} height={30} />} />
        <Link path={"/pets"} icon={<PawDog width={30} height={30} />} />
        <Link path={"/"} icon={<ThreeDotIcon width={30} height={30} />} />
        <Link path={"/login"} icon={<UserIcon width={30} height={30} />} />
      </div>
    );
}
export default MobileHeader;