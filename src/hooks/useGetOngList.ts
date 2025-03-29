import { toast } from "react-toastify";
import { apiRequest } from "./useApi";
import { useQuery } from "@tanstack/react-query";
import { Ong } from "@/interfaces/ong";

export type OngResponse = {
  ong: Ong;
}

async function getOngList(
  page: number,
  queryString ?: string,
  limit?: number
): Promise<{ ong: OngResponse[]; page: number; limit: number } | null> {
  try {
    const res = await apiRequest(
      `/ongs?page=${page}&limit=${limit || 15}${
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
    // toast.success("Pets carregados.");
    return data;
  } catch (err) {
    toast.error("Houve um problema na requisição.");
    console.error(err);
    return null;
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const mapOngListResponse = (response: any): Ong[] => {
  if (!Array.isArray(response)) {
    return []; // Retorna um array vazio para evitar erros
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return response.map((ong: any) => ({
    id: ong.id,
    name: ong.name || "",
    slug: ong.slug || "",
    cnpj: ong.cnpj || "",
    phone: ong.phone || "",
    address: ong.address || "",
    zipcode: ong.zipcode || "",
    state: ong.state || "",
    city: ong.city || "",
    userId: ong.userId || "",
  }));
};

export function useGetOngList(
  page: number,
  limit?: number,
  categorie?: string
) {
  return useQuery({
    queryKey: ["fetchPetList", page],
    queryFn: () => getOngList(page, categorie, limit),
  });
}
