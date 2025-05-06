import { apiRequest } from "./useApi";
import { toast } from "react-toastify";
import { useQuery } from "@tanstack/react-query";
import { Pet } from "@/interfaces/pet";

type PetResponse = {
    pet: Pet;
}

async function getPetById(id: string): Promise<PetResponse | null> {
  try {
    if (!id) {
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
export const mapPetResponse = (response: any): Pet => {
  return {
    id: response?.id,
    name: response?.name,
    species: response?.species,
    slug: response?.slug,
    breed: response?.breed,
    color: response?.color,
    size: response?.size,
    health: response?.health,
    temperament: response?.temperament,
    birthdate: response?.birthdate,
    status: response?.status,
    history: response?.history,
    ongId: response?.ongId,
    date: response?.date,
  };
};

export function useGetPetById(slug: string) {
  return useQuery({
    queryKey: ["fetchPetId", slug],
    queryFn: () => getPetById(slug),
  });
}
