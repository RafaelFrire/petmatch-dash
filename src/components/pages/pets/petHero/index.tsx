import Button from "../buttonPet";
import { Card } from "../petCard";
import PetCarrousel from "../petCarrousel";

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
  
  }
}

const PetHero: React.FC<petHeroProps> = ({ pet }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="space-y-4">
        <PetCarrousel />
      </div>

      {/* Pet Info */}
      <div className="md:col-span-2">
        <Card>
          <h1 className="text-2xl font-bold text-red-500">Jorlan All day</h1>
          <p className="text-gray-500">Macho • 2 Anos</p>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <p>
              <span className="text-gray-500">Nascimento:</span> {"10/10/2021"}
            </p>
            <p>
              <span className="text-gray-500">Espécie:</span> {pet.species}
            </p>
            <p>
              <span className="text-gray-500">Raça:</span> {pet.breed}
            </p>
            <p>
              <span className="text-gray-500">Cor:</span> {pet.color}
            </p>
          </div>
          <div className="mt-4">
            <p className="text-gray-500">Temperamento:</p>
            <p>{pet.temperament}</p>
          </div>
          <div className="flex space-x-4 mt-6">
            <Button className="bg-red-500 text-white flex-1">
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