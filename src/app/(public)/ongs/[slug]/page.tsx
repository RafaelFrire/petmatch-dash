'use client'
import SpinLoader from "@/components/spinLoader";
import { mapOngResponse, useGetOngBySlug } from "@/hooks/useGetOngBySlug";
import { useParams } from "next/navigation";
import { Suspense } from "react";

function OngContent(){
    const params = useParams();
    const slug = params?.slug as string;
  
    const { data, error, isLoading } = useGetOngBySlug(slug);

    const { ong, images } = mapOngResponse(data);

    console.log("ong", ong)


    if (isLoading) {
      return (
        <div className="py-10">
          <SpinLoader />
        </div>
      );
    }
  
    if (error) {
      return <div>Error loading page</div>;
    }
    return(
        <div>
            <h1>ong</h1>
        </div>
    )
}

export default function PetsPage() {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <OngContent />
    </Suspense>
  );
}