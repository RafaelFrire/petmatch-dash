'use client'
import { AvailableAnimalsSection } from "@/components/pages/ongs/avaliableAnimal";
import HeroCarousel from "@/components/pages/ongs/heroCarousel";
import HistoryOng from "@/components/pages/ongs/historyOng";
import VisitSection from "@/components/pages/pets/ongMap";
import SpinLoader from "@/components/spinLoader";
import { mapOngResponse, useGetOngBySlug } from "@/hooks/useGetOngBySlug";
import { mapPetByOngResponse, useGetPetByOngSlug } from "@/hooks/useGetPetsByOngSlug";
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

    const { data:petsData } = useGetPetByOngSlug(slug);

    const { ong } = mapOngResponse(data);
    const { pets } = mapPetByOngResponse(petsData);


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
          <VisitSection 
          ong={{
            city: "",
            state: ong.state,
            zipcode: ong.zipcode,
            another: "",
            time: "09:00 às 17:00",
            phone: ong.phone,
            email: "email",
          }}
          />
          {
            pets.length > 0 && (
              <AvailableAnimalsSection
              animals={pets.map((item) => ({
                animal: {
                  id: item.pet.id,
                  name: item.pet.name,
                  image: item.images[0]?.url,
                  breed: item.pet.breed,
                  slug: item.pet.slug,
                  gender: "Não informado", // se tiver esse dado, substitua
                  age: "10",
                },
              }))}
            />
            )

          }
         
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