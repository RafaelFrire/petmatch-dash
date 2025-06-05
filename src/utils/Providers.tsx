"use client";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Banner from "@/components/pages/home/banner";
import { SessionProvider, useSession } from "next-auth/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode, useEffect, useState } from "react";
import { Bounce, ToastContainer } from "react-toastify";
import { usePathname, useRouter } from "next/navigation";


function SessionGuard({ children }: { children: ReactNode }) {
  const { data: session, status } = useSession();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      const isPendent = session?.user?.status === "PENDING";
      const isOng = session?.user?.role === "ONG";

      const isOnPendingPage = pathname === "/pending";

       if (isPendent && isOng && !isOnPendingPage) {
        router.push("/pending");
      }
    }
  }, [status, pathname, router]);


  return <>{children}</>;
}


export default function Provider({ children }: { children: ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());
  const pathname = usePathname();

  const hideBannerOn = ["/login", "/signup", "/dashboard", "/pending"];

  const hiddenfull = ["/dashboard", "/pending"];
  const dynamicRoutes = ["/dashboard"];

  const isDynamicRoute = dynamicRoutes.some((route) => pathname.startsWith(route));
  const shouldHideHeaderAndFooter = hiddenfull.some((route) => pathname.startsWith(route));
  const shouldHideBanner = hideBannerOn.includes(pathname) || isDynamicRoute;


  return (
    <SessionProvider>
      <QueryClientProvider client={queryClient}>
        <SessionGuard>
          {!shouldHideHeaderAndFooter && <Header />}
          {!shouldHideBanner && <Banner />}
          {children}
          {!shouldHideHeaderAndFooter && <Footer />}
        </SessionGuard>

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
