'use client'
import VisitSection from "@/components/pages/pets/ongMap";
import PetHero from "@/components/pages/pets/petHero";
import { PetHistory } from "@/components/pages/pets/petHistory";
import ProgressBarList, { ProgressBarListProps } from "@/components/pages/pets/ProgressBarList";
import { SimilarPetsSection } from "@/components/pages/pets/similarPet";
import SpinLoader from "@/components/spinLoader";
import { mapPetResponse, useGetPetBySlug } from "@/hooks/useGetPetBySlug";
import { useParams } from "next/navigation";


const mockProgressBarList: ProgressBarListProps = {
  data: [
    { id: "1", name: "Energia", value: 70 },
    { id: "2", name: "Tamanho", value: 50 },
    { id: "3", name: "Obdiência", value: 90 },
    { id: "4", name: "Tolerância com outros animais", value: 90 },
  ],
};

export default function PetPage() {
      const params = useParams();
      const slug = params?.slug as string;
    
      const { data, error, isLoading } = useGetPetBySlug(slug);

      const { pet, images } = mapPetResponse(data);

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
          <main className="max-w-7xl mx-auto px-4 py-8">
            <PetHero pet={pet} images={images.map((image) => image.url)} />
            <div className="h-14"></div>
            <PetHistory
              pet={{
                name: pet.name,
                history: pet.history,
              }}
            />
            <div className="h-20"></div>

            {/* Visão Geral */}
            <div className="flex flex-wrap md:flex-nowrap items-center  w-full gap-12">
              <div className="space-y-4 w-[100%] md:w-[60%] ">
                <h2 className="flex text-3xl font-bold text-red-500 mb-4">
                  Visão Geral
                </h2>
                <ProgressBarList data={mockProgressBarList.data || []} />
              </div>
              <div className="w-[100%] md:w-[40%]  ">
                <SimilarPetsSection />
              </div>
            </div>
            <VisitSection />
          </main>
        </div>
      );

}