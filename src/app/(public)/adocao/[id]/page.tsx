"use client";
import { FormAdocao } from "@/components/adocao/form";
import { TitleWithPaw } from "@/components/TitleWithPaw";
import { useGetAccountById, mapUserResponse } from "@/hooks/useGetAccountById";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { useParams, useRouter } from "next/navigation";

let sendMenssage = false;

export default function CadastroPetPage() {
  const params = useParams();
  const router = useRouter();
  const { data: session, status } = useSession();

  const petId = params?.id as string;

  const { data } = useGetAccountById(session?.user.id as string);

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

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <div className="h-20"></div>
      <div>
        <TitleWithPaw title="Formulário De Adoção" />
      </div>

      <div className="bg-white min-h-[70vh] w-full md:max-w-[75%] p-8 mx-auto flex flex-col justify-center rounded-2xl border border-primary40 shadow-2xl">
        <FormAdocao userData={userData.user} />
      </div>

      <div className="h-12"></div>
    </div>
  );
}
