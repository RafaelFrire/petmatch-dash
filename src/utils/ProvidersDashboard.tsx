'use client';
import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";
import SideNavigation from "@/components/pages/dashboard/navigation/sideNavigation";

export default function ProviderDashboard({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <SessionProvider>
      <div className="flex">
        <SideNavigation />
        {children}
      </div>
    </SessionProvider>
  );
}
