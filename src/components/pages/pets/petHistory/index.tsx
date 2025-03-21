import PawDogRed from "@/icons/PawDogRed";

type petHistoryProps = {
    pet:{
        name: string;
        history: string
    }
}
export const PetHistory:React.FC<petHistoryProps> = ({pet}) =>{
    return (
      <div>
        <div className="flex items-center gap-2 mb-4">
          <h2 className="text-3xl font-bold text-primary100 mb-4">
            História do {pet.name}
          </h2>
          <PawDogRed width={30} height={30} className="mb-4" />
        </div>
        <p className="text-gray-500">{pet.history}</p>
      </div>
    );
}