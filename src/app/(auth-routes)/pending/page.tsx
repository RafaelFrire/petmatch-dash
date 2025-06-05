'use client'
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";


export default function PendingPage() {
  const router = useRouter();
  const handleSignout = () =>{
    signOut()
    router.replace("/")
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-100">
      <h1 className="text-2xl font-bold text-primary100">Conta Pendente</h1>
      <p className="text-primary100 mt-2">
        Sua conta está aguardando aprovação. Você receberá um e-mail assim que
        for aprovada.
      </p>
      <form className="mt-6">
        <button
          className="px-4 py-2 bg-primary100 text-white rounded hover:bg-primary200 transition"
          onClick={handleSignout}
        >
          Sair
        </button>
      </form>
    </div>
  );
}
