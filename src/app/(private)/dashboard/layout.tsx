import { ReactNode } from "react";
import { redirect } from "next/navigation";
import { auth } from "@/auth";

type PrivateLayoutProps = {
  children: ReactNode;
};

export default async function PrivateLayout({ children }: PrivateLayoutProps) {
  const session = await auth();


  if (!session) {
    redirect("/login"); // redireciona para login se não estiver autenticado
  }
  if(session?.user?.role !== "ONG" || session?.user?.role !== "ADMIN"){
    redirect("/home"); // redireciona para login se não estiver autenticado
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Você pode adicionar um header, sidebar, etc. */}
      <header className="p-4 bg-white shadow">
        <h1 className="text-xl font-bold">Área Privada</h1>
      </header>

      <main className="p-6">{children}</main>
    </div>
  );
}
