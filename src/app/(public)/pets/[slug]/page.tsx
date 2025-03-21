'use client'
import PetHero, { petHeroProps } from "@/components/pages/pets/petHero";
import { PetHistory } from "@/components/pages/pets/petHistory";
import ProgressBarList, { ProgressBarListProps } from "@/components/pages/pets/ProgressBarList";
import { SimilarPetsSection } from "@/components/pages/pets/similarPet";
import SpinLoader from "@/components/spinLoader";
import { useGetPetBySlug } from "@/hooks/useGetPetBySlug";
import { useParams } from "next/navigation";


const mockProgressBarList: ProgressBarListProps = {
  data: [
    { id: "1", name: "Energia", value: 70 },
    { id: "2", name: "Tamanho", value: 50 },
    { id: "3", name: "Obdiência", value: 90 },
    { id: "4", name: "Tolerância com outros animais 3", value: 90 },
  ],
};

const petMock: petHeroProps = {
  pet: {
    id: "1",
    name: "Bolt",
    species: "Cachorro",
    breed: "Vira-lata",
    color: "Caramelo",
    size: "Médio",
    health: "Vacinado e castrado",
    temperament: "Brincalhão e dócil",
    birthdate: new Date("2022-06-15"),
    status: true,
    history: "A história do Akira começou muito antes de ele nascer. Sua mãe foi resgatada pela XX quando, grávida, vagava pelas ruas em busca de abrigo e comida. Ela estava em uma situação desesperadora, sem saber onde encontrar ajuda. A ONG a acolheu e deu todo o suporte necessário, mas a mãe do Akira ainda enfrentava muitos desafios. Ela era uma cadela forte e corajosa, mas também estava assustada e vulnerável. A ONG fez o possível para cuidar dela, mas a vida na rua havia deixado suas marcas.",
    slug: "bolt-caramelo-vira-lata",
    ongId: "ong-123"
  }
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
        return <div>Error loading page</div>;
      }
      return (
        <div>
          <main className="max-w-7xl mx-auto px-4 py-8">
            <PetHero pet={petMock.pet} />
            <div className="h-14"></div>
            <PetHistory
              pet={{
                name: petMock.pet.name,
                history: petMock.pet.history,
              }}
            />
            <div className="h-20"></div>

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