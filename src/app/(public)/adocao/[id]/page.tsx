'use client';
import { FormAdocao } from "@/components/adocao/form";
import { TitleWithPaw } from "@/components/TitleWithPaw";
import { useGetAccountById, mapUserResponse } from "@/hooks/useGetAccountById";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function CadastroPetPage() {
  const { data: session } = useSession();

  if (!session?.user?.id) {
    redirect("/login");
  }
  const { data } = useGetAccountById(session?.user.id as string);

  const userData = mapUserResponse(data);

  console.log("userData", userData.user);

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
}
