/* eslint-disable @typescript-eslint/no-explicit-any */
import { apiRequest } from "./useApi";
import { toast } from "react-toastify";
import { useQuery } from "@tanstack/react-query";
import { Adoption } from "@/interfaces/adoption";

export type AdoptionResponse = {
  adoption: Adoption;
};

async function getAdoptionRequestsById(
  id: string,
): Promise<AdoptionResponse | null> {
  try {
    if (!id) {
      toast.error("ID inválido.");
      return null;
    }
    const res = await apiRequest(
      `/adoptions/${id}/id`,
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

export const mapAdoptionByIdResponse = (response: any): Adoption => {
  return {
    id: response.id,
    petId: response.petId,
    adopterId: response.adopterId,
    status: response.status,
    name: response.name,
    lastname: response.lastname,
    email: response.email,
    phone: response.phone,
    cpf: response.cpf,
    maritalStatus: response.maritalStatus,
    address: response.address,
    city: response.city,
    state: response.state,
    zipCode: response.zipCode,
    residenceType: response.residenceType,
    hasOtherPets: response.hasOtherPets,
    reasonForAdoption: response.reasonForAdoption,
    proofOfResidence: response.proofOfResidence,
    createdAt: response.createdAt,
    pet: {
      id: response.pet.id,
      name: response.pet.name,
      species: response.pet.species,
      breed: response.pet.breed,
      color: response.pet.color,
      size: response.pet.size,
      health: response.pet.health,
      temperament: response.pet.temperament,
      birthdate: response.pet.birthdate,
      status: response.pet.status,
      history: response.pet.history,
      slug: response.pet.slug,
      ongId: response.pet.ongId,
      date: response.pet.date,
    },
  };
};

export function useGetAdoptionRequestById(
  id: string,
) {
  return useQuery({
    queryKey: ["adoptionById"],
    queryFn: () => getAdoptionRequestsById(id),
    enabled: !!id,
  });
}
