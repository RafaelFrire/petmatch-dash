"use client";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Banner from "@/components/pages/home/banner";
import { SessionProvider } from "next-auth/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode, useState } from "react";
import { Bounce, ToastContainer } from "react-toastify";
import { usePathname } from "next/navigation";

export default function Provider({ children }: { children: ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());
  const pathname = usePathname();


  const hideBannerOn = ["/login", "/signup", "/dashboard"];

  const dynamicRoutes = ["*"];

  const isDynamicRoute = dynamicRoutes.some((route) => pathname.startsWith(route));


  return (
    <SessionProvider>
      <QueryClientProvider client={queryClient}>
        <Header />
        {!hideBannerOn.includes(pathname) && !isDynamicRoute && <Banner />}
        {children}
        <Footer />

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
