/* eslint-disable @typescript-eslint/no-explicit-any */
import { apiRequest } from "./useApi";
import { toast } from "react-toastify";
import { useQuery } from "@tanstack/react-query";
import { Pet } from "@/interfaces/pet";

type PetResponse = {
  pets: { pet: Pet; images: { url: string }[] }[];
};

async function getPetsByOngSlug(slug: string): Promise<PetResponse | null> {
  try {
    const res = await apiRequest(`/pets/${slug}/ong`, {
      method: "GET",
    });

    if (!res.ok) {
      toast.error("Falha ao carregar pets.");
      return null;
    }

    const data = await res.json();


    toast.success("pets encontrado!");
    return data;
  } catch (err) {
    toast.error("Houve um problema na requisição.");
    console.error(err);
    return null;
  }
}
export const mapPetByOngResponse = (response: any): PetResponse => {
  return {
    pets: response?.pets?.map((item: any) => ({
      pet: {
        id: item?.pet?.id,
        name: item?.pet?.name,
        species: item?.pet?.species,
        slug: item?.pet?.slug,
        breed: item?.pet?.breed,
        color: item?.pet?.color,
        size: item?.pet?.size,
        health: item?.pet?.health,
        temperament: item?.pet?.temperament,
        birthdate: item?.pet?.birthdate,
        status: item?.pet?.status,
        history: item?.pet?.history,
        ongId: item?.pet?.ongId,
      },
      images: item?.images?.map((image: string) => ({ url: image })) || [],
    })) || [],
  };
};

export function useGetPetByOngSlug(slug: string) {
  return useQuery({
    queryKey: ["petsByOngSlug", slug],
    queryFn: () => getPetsByOngSlug(slug),
  });
}
