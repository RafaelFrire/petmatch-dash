"use client";
import { FormAdocao } from "@/components/pages/adocao/form";
import { TitleWithPaw } from "@/components/TitleWithPaw";
import { useGetAccountById, mapUserResponse } from "@/hooks/useGetAccountById";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { useParams, useRouter } from "next/navigation";
import SpinLoader from "@/components/spinLoader";

let sendMenssage = false;

export default function CadastroPetPage() {
  const params = useParams();
  const router = useRouter();
  const { data: session, status } = useSession();

  const petId = params?.id as string;

  const { data, isSuccess, isLoading, isError } = useGetAccountById(
    session?.user.id as string
  );

  const userData = mapUserResponse(data);

  useEffect(() => {
    if (status === "loading") return;

    if (!session?.user?.id && sendMenssage) {
      sessionStorage.setItem("formAdocaoPetId", petId);
      toast.error("Você precisa estar logado para acessar esta página.");
      router.push("/login");
      sendMenssage = true;
    }
  }, [status, session, petId, router]);


    if(isSuccess){
      // toast.success("Formulário cadastrado com sucesso!")
    }
    if(isError){
      toast.success("Ops, houve um problema!")
    }
  
    if (isLoading) {
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <SpinLoader />
      </div>;
    }


  return (
    <div className="p-4 max-w-3xl mx-auto">
      <div className="h-20"></div>
      <div>
        <TitleWithPaw title="Formulário De Adoção" />
      </div>

      <div className="bg-white min-h-[70vh] w-full md:max-w-[75%] p-8 mx-auto flex flex-col justify-center rounded-2xl border border-primary40 shadow-2xl">
        <FormAdocao petId={petId} userData={userData.user} />
      </div>

      <div className="h-12"></div>
    </div>
  );
}
