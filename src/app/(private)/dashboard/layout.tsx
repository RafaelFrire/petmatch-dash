import { ReactNode } from "react";
import { redirect } from "next/navigation";
import { auth } from "@/auth";
import ProviderDashboard from "@/utils/ProvidersDashboard";

type PrivateLayoutProps = {
  children: ReactNode;
};

export default async function PrivateLayout({ children }: PrivateLayoutProps) {
  const session = await auth();

  if (!session) {
    redirect("/login");
  }

  if (session?.user?.role !== "ONG" && session?.user?.role !== "ADMIN") {
    redirect("/");
  }

  return (
    <html lang="pt-BR">
      <body className="bg-[#FCFCFD]">
        <ProviderDashboard>{children}</ProviderDashboard>
      </body>
    </html>
  );
}
