"use client";
import { SessionProvider } from "next-auth/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode, useState } from "react";
import { Bounce, ToastContainer } from "react-toastify";
import SideNavigation from "@/components/pages/dashboard/navigation/sideNavigation";

export default function ProviderDashboard({ children }: { children: ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());


  return (
    <SessionProvider>
      <QueryClientProvider client={queryClient}>
        <div className="flex">
          <SideNavigation />
          {children}
        </div>

        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Bounce}
        />
      </QueryClientProvider>
    </SessionProvider>
  );
}
