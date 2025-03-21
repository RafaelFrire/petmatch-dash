'use client'
import PetHero from "@/components/pages/pets/petHero";
import ProgressBarList, { ProgressBarListProps } from "@/components/pages/pets/ProgressBarList";
import { SimilarPetsSection } from "@/components/pages/pets/similarPet";
import SpinLoader from "@/components/spinLoader";
import { useGetPetBySlug } from "@/hooks/useGetPetBySlug";
import { useParams } from "next/navigation";


const mockProgressBarList: ProgressBarListProps = {
    data: [
        { id: '1', name: 'Energia', value: 70 },
        { id: '2', name: 'Tamanho', value: 50 },
        { id: '3', name: 'Obdiência', value: 90 },
        { id: '3', name: 'Tolerância com outros animais 3', value: 90 },
    ],
};

export default function PetPage() {
      const params = useParams();
      const slug = params?.slug as string;
    
      const { data, error, isLoading } = useGetPetBySlug(slug);

      console.log("data", data);

      if (isLoading) {
        return (
          <div className="py-10">
            <SpinLoader />
          </div>
        );
      }
    
      if (error) {
        return <div>Error loading article</div>;
      }
      return (
        <div>
          <main className="max-w-7xl mx-auto px-4 py-8">
            <PetHero />

            {/* Visão Geral */}
            <div className="flex  items-center w-full gap-12">
              <div className="space-y-4 w-[60%]">
                <h2 className="text-3xl font-bold text-red-500 mb-4">
                  Visão Geral
                </h2>
                <ProgressBarList data={mockProgressBarList.data || []} />
              </div>
              <div className="w-[50%]  flex justify-center">
                <SimilarPetsSection />
              </div>
            </div>
          </main>
        </div>
      );

}