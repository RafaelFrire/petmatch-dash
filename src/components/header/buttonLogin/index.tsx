import Text from "@/components/Text";
import UserIcon from "@/icons/UserIcon";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";


type buttonProps = {
  text: string;
} & React.PropsWithChildren<React.ComponentPropsWithRef<"button">>;

const ButtonLogin: React.FC<buttonProps> = ({ text }: buttonProps) => {
  const { data: session, status } = useSession();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const router = useRouter()

  if (status === "loading") return <div className="w-20 h-8 bg-white animate-pulse rounded-md"></div>;


  return (
    <div className="relative">
      <div
        className="flex items-center gap-2 cursor-pointer"
        onClick={() => setDropdownOpen(!dropdownOpen)}
      >
        <UserIcon width={30} height={30} />
        {session ? (
          <Text text={`Olá, ${session.user?.name}`} className="text-md" />
        ) : (
          <a
            href="/login"
            className="text-primary100 font-semibold hover:text-primary-20"
          >
            {text}
          </a>
        )}
      </div>

      {/* Dropdown Menu */}
      {dropdownOpen && session && (
        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg">
          <button
            onClick={() => router.push("/dashboard")}
            className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100"
          >
            dashboard
          </button>
          <button
            onClick={() => signOut()}
            className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100"
          >
            Sair
          </button>
        </div>
      )}
    </div>
  );
};
export default ButtonLogin;
