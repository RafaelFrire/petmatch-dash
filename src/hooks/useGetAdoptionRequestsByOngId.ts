/* eslint-disable @typescript-eslint/no-explicit-any */
import { apiRequest } from "./useApi";
import { toast } from "react-toastify";
import { useQuery } from "@tanstack/react-query";
import { Adoption } from "@/interfaces/adoption";

export type AdoptionResponse = {
  adoptions: Adoption[];
  totalItems: number;
  totalPages: number;
  totalAprovado: number;
  totalReprovado: number;
  totalPendente: number;
};

async function getAdoptionRequestsByOngId(
  id: string,
  page: number,
  limit?: number
): Promise<AdoptionResponse | null> {
  try {
    if (!id) {
      toast.error("ID inválido.");
      return null;
    }
    const res = await apiRequest(
      `/adoptions_request/${id}/?page=${page}&limit=${limit || 15}`,
      {
        method: "GET",
      }
    );

    if (!res.ok) {
      const data = await res.json();
      console.log(data);
      if (data?.message === "Ong not found") {
        toast.error("Ong não encontrada.");
        return null;
      }
      toast.error("Falha ao carregar informações.");
      return null;
    }

    const data = await res.json();

    toast.success("dados encontrado!");
    return data;
  } catch (err) {
    toast.error("Houve um problema na requisição.");
    console.error(err);
    return null;
  }
}

export const mapAdoptionByOngIdResponse = (response: any): AdoptionResponse => {
  return {
    adoptions:
      response?.adoptions?.map(
        (item: any): Adoption => ({
          id: item.id,
          petId: item.petId,
          adopterId: item.adopterId,
          status: item.status,
          name: item.name,
          email: item.email,
          phone: item.phone,
          cpf: item.cpf,
          maritalStatus: item.maritalStatus,
          address: item.address,
          city: item.city,
          state: item.state,
          zipCode: item.zipCode,
          residenceType: item.residenceType,
          hasOtherPets: item.hasOtherPets,
          reasonForAdoption: item.reasonForAdoption,
          proofOfResidence: item.proofOfResidence,
          createdAt: item.createdAt,
          pet: {
            id: item.pet.id,
            name: item.pet.name,
            species: item.pet.species,
            breed: item.pet.breed,
            color: item.pet.color,
            size: item.pet.size,
            health: item.pet.health,
            temperament: item.pet.temperament,
            birthdate: item.pet.birthdate,
            status: item.pet.status,
            history: item.pet.history,
            slug: item.pet.slug,
            ongId: item.pet.ongId,
            date: item.pet.date,
          },
        })
      ) || [],
    totalItems: response?.totalItems || 0,
    totalPages: response?.totalPages || 0,
    totalAprovado: response?.totalAprovado || 0,
    totalReprovado: response?.totalReprovado || 0,
    totalPendente: response?.totalPendente || 0,
  };
};

export function useGetAdoptonRequestByOngId(
  id: string,
  page: number,
  limit?: number
) {
  return useQuery({
    queryKey: ["fetchAdoption", page],
    queryFn: () => getAdoptionRequestsByOngId(id, page, limit),
    enabled: !!id,
  });
}
