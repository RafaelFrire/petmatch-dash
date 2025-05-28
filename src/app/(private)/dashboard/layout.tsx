"use client";

import { ReactNode, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import ProviderDashboard from "@/utils/ProvidersDashboard";

type PrivateLayoutProps = {
  children: ReactNode;
};

export default function PrivateLayout({ children }: PrivateLayoutProps) {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      if (session?.user?.role !== "ONG" && session?.user?.role !== "ADMIN") {
        router.push("/");
      }
    } else if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, session, router]);

  if (status === "loading") return null;

  return (
    <ProviderDashboard>{children}</ProviderDashboard>
  );
}
