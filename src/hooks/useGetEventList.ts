/* eslint-disable @typescript-eslint/no-explicit-any */
import { toast } from "react-toastify";
import { apiRequest } from "./useApi";
import { useQuery } from "@tanstack/react-query";
import { Event } from "@/interfaces/event";

let successMessageShown = false;

async function getEventList(
  page: number,
  categorie?: string,
  limit?: number
): Promise<{ event: Event[]; page: number; limit: number } | null> {
  try {
    const res = await apiRequest(
      `/events?page=${page}&limit=${limit || 15}${
        categorie ? `&categorie=${categorie}` : ""
      }`,
      {
        method: "GET",
      }
    );

    if (!res.ok) {
      toast.error("Falha ao carregar eventos.");
      return null;
    }

    const data = await res.json();

    if (!successMessageShown) {
      toast.success("Eventos carregados.");
      successMessageShown = true;
    }

    return data.events;
  } catch (err) {
    toast.error("Houve um problema na requisição.");
    console.error(err);
    return null;
  }
}

export const mapEventListResponse = (response: any): Event[] => {
  if (!Array.isArray(response)) {
    return []; // Retorna um array vazio para evitar erros
  }
  return response.map(
    (event: any): Event => ({
      id: event?.id,
      title: event?.title,
      slug: event?.slug,
      categorie: event?.categorie,
      time: event?.time,
      location: event?.location,
      address: event?.address,
      city: event?.city,
      state: event?.state,
      description: event?.description,
      additionalInfo: event?.additionalInfo,
      imageUrl: event?.imageUrl,
      date: new Date(event?.date),
      createdAt: new Date(event?.createdAt),
      updatedAt: new Date(event?.updatedAt),
      status: true,
      ongId: event?.ongId,
    })
  );
};

export function useGetEventList(
  page: number,
  limit?: number,
  categorie?: string
) {
  return useQuery({
    queryKey: ["fetchEvents", page],
    queryFn: () => getEventList(page, categorie, limit),
  
  });
}
