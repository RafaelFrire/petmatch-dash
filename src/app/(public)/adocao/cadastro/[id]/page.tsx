'use client'
import { FormAdocao } from "@/components/adocao/form";
import { FC } from "react";

interface CadastroPetPageProps {
  params: {
    id: string;
  };
}

const CadastroPetPage: FC<CadastroPetPageProps> = ({ params }) => {
  const petId = params.id;

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-4">Formulário de Adoção</h1>
      <FormAdocao />
    </div>
  );
};

export default CadastroPetPage;
