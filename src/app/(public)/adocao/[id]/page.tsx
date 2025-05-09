"use client";
import { FormAdocao } from "@/components/adocao/form";
import { TitleWithPaw } from "@/components/TitleWithPaw";
import { FC } from "react";

interface CadastroPetPageProps {
  params: {
    id: string;
  };
}

const CadastroPetPage: FC<CadastroPetPageProps> = ({ params }) => {
  // const petId = params.id;

  return (
    <div className="p-4 max-w-3xl mx-auto">
      
      <div className="h-20"></div>
      <div>
        <TitleWithPaw title="Formulário De Adoção" />
      </div>

      <div className="bg-white min-h-[70vh] w-full md:max-w-[75%] p-8 mx-auto flex flex-col justify-center rounded-2xl border border-primary40 shadow-2xl">
        <FormAdocao />
      </div>

      <div className="h-12"></div>

    </div>
  );
};

export default CadastroPetPage;
