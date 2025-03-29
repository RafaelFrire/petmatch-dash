import { apiRequest } from "./useApi";
import { toast } from "react-toastify";
import { useQuery } from "@tanstack/react-query";
import { Ong } from "@/interfaces/ong";

type OngResponse = {
    ong: Ong;
    images: { url: string }[];

}

async function getOngBySlug(slug: string): Promise<OngResponse | null> {
  try {
    const res = await apiRequest(`/ong/${slug}/slug`, {
      method: "GET",
    });

    if (!res.ok) {
      toast.error("Falha ao carregar pet.");
      return null;
    }

    const data = await res.json();
    console.log(data)
    toast.success("pet encontrado!");
    return data;
  } catch (err) {
    toast.error("Houve um problema na requisição.");
    console.error(err);
    return null;
  }
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const mapOngResponse = (response: any): {ong: Ong, images: string[]} => {
  return {
    ong: {
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
    },
    images: response?.images?.map((image: string) => ({ url: image })) || [],
  };
};

export function useGetOngBySlug(slug: string) {
  return useQuery({
    queryKey: ["fetchPet", slug],
    queryFn: () => getOngBySlug(slug),
  });
}
