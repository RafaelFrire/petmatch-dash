"use client";
import { useFilters } from "@/hooks/useFilter";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

type ButtonFilterProps = {
  categorie: { path: string; categorie: string, basepath: string};
} & React.HTMLAttributes<HTMLButtonElement>;

export const ButtonFilter: React.FC<ButtonFilterProps> = ({
  categorie,
}) => {
  const pathname = usePathname();
  const { setFilters } = useFilters();

  const [isActive, setActive] = useState(false);

  const handleSelect = () => {
    const formatCategorie = categorie.path.toLowerCase();
    setFilters({ basepath: categorie.basepath, categorie: formatCategorie });
  };

  useEffect(() => {
    const splitPath = pathname.split("/");
    setActive(splitPath.includes(categorie.path.toLowerCase()));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]); // Adicionando dependências corretas

  return (
    <div
      className={`text-sm md:text-sm flex justify-center items-center min-h-10 font-semibold cursor-pointer border-primary100 border-2 transition-colors duration-200 ${
        isActive ? "bg-primary100 text-white" : ""
      }`}
      onClick={handleSelect}
    >
      <h1>{categorie.categorie}</h1>
    </div>
  );
};
