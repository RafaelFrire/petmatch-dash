import { apiRequest } from "./useApi";
import { toast } from "react-toastify";
import { useQuery } from "@tanstack/react-query";
import { EventHeroProps } from "@/components/dashboard/event/eventHero";



async function getEventBySlug(slug: string): Promise<EventHeroProps | null> {
  try {
    const res = await apiRequest(`/event/${slug}/slug`, {
      method: "GET",
    });

     if (!res.ok) {
      toast.error("Falha ao carregar evento.");
      return null;
    }

    const data = await res.json();
    toast.success("Evento encontrado!");
    return data;
  } catch (err) {
    toast.error("Houve um problema na requisição.");
    console.error(err);
    return null;
  }
}
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
export const mapEventResponse = (response: any): Partial<EventHeroProps> => {
  return {
    event: {
        title: response?.title,
        slug: response?.slug,
        categorie: response?.categorie,
        imageUrl: response?.imageUrl,
        ongId: response?.ongId,
        date: response?.date,
        description: response?.description || "teste",
        type: "",
        time: "10h até 16h",
        location: "Rua da nobreza, 123",
        address: "Bairro Centro",
        city: "São Paulo",
        state: "SP",
        organizer: "patas amigas",
        additionalInfo: "",
        bannerImage: "",
        id: "",
    },
  };
};


export function useGetEventBySlug(slug: string) {
  return useQuery({
    queryKey: ["fetchEvent", slug],
    queryFn: () => getEventBySlug(slug), 
  });
}
