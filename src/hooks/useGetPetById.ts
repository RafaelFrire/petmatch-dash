import { apiRequest } from "./useApi";
import { toast } from "react-toastify";
import { useQuery } from "@tanstack/react-query";
import { Pet } from "@/interfaces/pet";

type PetResponse = {
    pet: Pet;
    images: { url: string }[];
}

async function getPetById(id: string): Promise<PetResponse | null> {
  try {
    if(!id){
        console.error("ID não fornecido.");
        return null;
    }

    const res = await apiRequest(`/pets/${id}/id`, {
      method: "GET",
    });

    if (!res.ok) {
      toast.error("Falha ao carregar pet.");
      return null;
    }

    const data = await res.json();
    toast.success("pet encontrado!");
    return data;
  } catch (err) {
    toast.error("Houve um problema na requisição.");
    console.error(err);
    return null;
  }
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const mapPetResponse = (response: any): PetResponse => {
  return {
    pet: {
      id: response?.pet?.id,
      name: response?.pet?.name,
      species: response?.pet?.species,
      slug: response?.pet?.slug,
      breed: response?.pet?.breed,
      color: response?.pet?.color,
      size: response?.pet?.size,
      health: response?.pet?.health,
      temperament: response?.pet?.temperament,
      birthdate: response?.pet?.birthdate,
      status: response?.pet?.status,
      history: response?.pet?.history,
      ongId: response?.pet?.ongId,
      date: response?.pet?.date,
    },
    images: response?.images?.map((image: string) => ({ url: image })) || [],
  };
};

export function useGetPetById(slug: string) {
  return useQuery({
    queryKey: ["fetchPetId", slug],
    queryFn: () => getPetById(slug),
  });
}
