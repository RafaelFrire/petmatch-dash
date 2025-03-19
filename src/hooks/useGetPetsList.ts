import { toast } from "react-toastify";
import { apiRequest } from "./useApi";
import { useQuery } from "@tanstack/react-query";
import { Pet } from "@/interfaces/pet";

export type PetsResponse = {
  pet: Pet;
  images: { url: string }[];

}

async function getPetList(
  page: number,
  queryString ?: string,
  limit?: number
): Promise<{ pets: PetsResponse[]; page: number; limit: number } | null> {
  try {
    const res = await apiRequest(
      `/pets?page=${page}&limit=${limit || 15}${
        queryString ? `${queryString}` : ""
      }`,
      {
        method: "GET",
      }
    );

    if (!res.ok) {
      toast.error("Falha ao carregar Pets.");
      return null;
    }

    const data = await res.json();
    toast.success("Pets carregados.");
    return data;
  } catch (err) {
    toast.error("Houve um problema na requisição.");
    console.error(err);
    return null;
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const mapPetListResponse = (response: any): PetsResponse[] => {
  if (!Array.isArray(response)) {
    return []; // Retorna um array vazio para evitar erros
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return response.map((pet: any) => ({
    pet: {
      id: pet.id,
      name: pet.name,
      species: pet.species,
      breed: pet.breed,
      color: pet.color,
      size: pet.size,
      health: pet.health,
      temperament: pet.temperament,
      birthdate: pet.birthdate,
      status: pet.status,
      history: pet.history,
      slug: pet.slug,
      ongId: pet.ongId,
    },
    images: pet.images || [],
  }));
};

export function useGetPetList(
  page: number,
  limit?: number,
  categorie?: string
) {
  return useQuery({
    queryKey: ["fetchPetList", page],
    queryFn: () => getPetList(page, categorie, limit),
  });
}
