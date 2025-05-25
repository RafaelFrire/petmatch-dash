import { useRouter } from "next/navigation";
import Button from "../buttonPet";
import { Card } from "../petCard";
import PetCarrousel from "../petCarrousel";
import calcAge from "@/utils/dateStrings";


export type petHeroProps = {
  pet: {
    id: string;
    name: string;
    species: string;
    breed: string;
    color: string;
    size: string;
    health: string;
    temperament: string;
    birthdate: Date;
    status: boolean;
    history: string;
    slug: string;
    ongId: string;
  };
  images: string[];
};

const PetHero: React.FC<petHeroProps> = ({ pet, images }) => {
  const router = useRouter()


  

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="space-y-4">
        <PetCarrousel images={images} />
      </div>

      {/* Pet Info */}
      <div className="md:col-span-2">
        <Card>
          <h1 className="text-2xl font-bold text-red-500">{pet.name}</h1>
          <p className="text-gray-500">Macho <span className="text-black font-bold">{calcAge(pet.birthdate)}</span></p>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <p className="">
              <span className="text-gray-500">Nascimento:</span>{" "}
              <span className="font-bold">
                {new Date(pet.birthdate).toLocaleDateString("pt-BR", {
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                })}
              </span>
            </p>
            <p>
              <span className="text-gray-500">Espécie:</span>{" "}
              <span className="font-bold">{pet.species}</span>
            </p>
            <p>
              <span className="text-gray-500">Raça:</span>{" "}
              <span className="font-bold">{pet.breed}</span>
            </p>
            <p>
              <span className="text-gray-500">Cor:</span>{" "}
              <span className="font-bold">{pet.color}</span>
            </p>
          </div>
          <div className="mt-4">
            <p className="text-gray-500">Temperamento:</p>
            <p className="font-bold">{pet.temperament}</p>
          </div>
          <div className="flex space-x-4 mt-6">
            <Button
              className="bg-red-500 text-white flex-1"
              onClick={() => router.push(`/adocao/${pet.id}`)}
            >
              Quero Adotar!
            </Button>
            <Button className="border border-red-500 text-red-500 flex-1">
              Pergunte sobre mim
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default PetHero;