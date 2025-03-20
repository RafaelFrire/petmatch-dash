'use client'
import Button from "@/components/pages/pets/buttonPet";
import { Card } from "@/components/pages/pets/petCard";
import PetHero from "@/components/pages/pets/petHero";
import ProgressBar from "@/components/progressBar";
import SpinLoader from "@/components/spinLoader";
import { useGetPetBySlug } from "@/hooks/useGetPetBySlug";
import { useParams } from "next/navigation";


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
            <div className="mt-8">
              <h2 className="text-xl font-bold text-red-500 mb-4">
                Visão Geral
              </h2>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span>Energia</span>
                    <span>80%</span>
                  </div>
                  <ProgressBar value={80} />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span>Obediência</span>
                    <span>90%</span>
                  </div>
                  <ProgressBar value={90} />
                </div>
              </div>
            </div>
          </main>
        </div>
      );

}