'use client'
import { AvailableAnimalsSection } from "@/components/pages/ongs/avaliableAnimal";
import HeroCarousel from "@/components/pages/ongs/heroCarousel";
import HistoryOng from "@/components/pages/ongs/historyOng";
import VisitSection from "@/components/pages/pets/ongMap";
import SpinLoader from "@/components/spinLoader";
import { mapOngResponse, useGetOngBySlug } from "@/hooks/useGetOngBySlug";
import { useParams } from "next/navigation";
import { Suspense } from "react";

const ongImages = [
  "https://i0.wp.com/destinopet.com.br/wp-content/uploads/2024/06/creche-pra-cachorros-perto-de-mim.webp?resize=960%2C720&quality=80&ssl=1",
  "https://www.patasdacasa.com.br/sites/default/files/styles/article_detail_1200/public/2024-05/creche-legal-de-cachorro0.jpg.webp?itok=z0Ks85ga",
];

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
    return (
      <div>
        <div className="h-32"></div>
        <div className="w-[75%] mx-auto">
          <HeroCarousel images={ongImages} />
        </div>

        <div className="w-[75%] mx-auto">
          <HistoryOng />
          <VisitSection />
          <AvailableAnimalsSection />
        </div>
        
      </div>
    );
}

export default function PetsPage() {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <OngContent />
    </Suspense>
  );
}