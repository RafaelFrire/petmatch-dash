import { apiRequest } from "./useApi";
import { toast } from "react-toastify";
import { useQuery } from "@tanstack/react-query";
import { Ong } from "@/interfaces/ong";

type OngResponse = {
    ong: Ong;
    images: { url: string }[];

}

async function getOngById(id: string): Promise<OngResponse | null> {
  try {
    const res = await apiRequest(`/ong/${id}/id`, {
      method: "GET",
    });

    if (!res.ok) {
      toast.error("Falha ao carregar pet.");
      return null;
    }

    const data = await res.json();
      toast.success("ong encontrado!");
    return data;
  } catch (err) {
    toast.error("Houve um problema na requisição.");
    console.error(err);
    return null;
  }
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const mapOngResponse = (response: any):Ong => {
  return {
      id: response?.id,
      name: response?.name,
      slug: response?.slug,
      cnpj: response?.cnpj,
      phone: response?.phone,
      address: response?.address,
      zipcode: response?.zipcode,
      state: response?.state,
      city: response?.city,
      userId: response?.userId,
  };
};

export function useGetOngById(slug: string) {
  return useQuery({
    queryKey: ["fetchPetId", slug],
    queryFn: () => getOngById(slug),
  });
}
