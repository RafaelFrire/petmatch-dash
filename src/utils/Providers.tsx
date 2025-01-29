"use client";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode, useState } from "react";
import { Toaster } from "sonner";

export default function Provider({ children }: { children: ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      {children}
      <Footer />
      <Toaster
      style={{ background: "#FF5733" }}
      position="top-right"
      />
    </QueryClientProvider>
  );
}
