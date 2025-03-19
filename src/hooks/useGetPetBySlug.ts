import { apiRequest } from "./useApi";
import { toast } from "react-toastify";
import { useQuery } from "@tanstack/react-query";
import { Pet } from "@/interfaces/pet";

type PetResponse = {
    pet: Pet;
    images: { url: string }[];

}

async function getPetBySlug(slug: string): Promise<PetResponse | null> {
  try {
    const res = await apiRequest(`/pets/${slug}/slug`, {
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
    },
    images: response?.images.map((image: string) => ({ url: image })),
  };
};

export function useGetPetBySlug(slug: string) {
  return useQuery({
    queryKey: ["fetchPet", slug],
    queryFn: () => getPetBySlug(slug),
  });
}
