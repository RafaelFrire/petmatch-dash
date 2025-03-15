import { toast } from "react-toastify";
import { apiRequest } from "./useApi";
import { useQuery } from "@tanstack/react-query";
import { Article } from "@/interfaces/article";
import { eventCardProps } from "@/components/dashboard/event/eventCard";

async function getEventList(
  page: number,
  categorie?: string,
  limit?: number,
): Promise<{ articles: Article[]; page: number; limit: number } | null> {
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
    toast.success("Eventos carregados.");
    return data.events;
  } catch (err) {
    toast.error("Houve um problema na requisição.");
    console.error(err);
    return null;
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const mapEventListResponse = (response: any): eventCardProps[] => {
  if(!Array.isArray(response)){
    return []; // Retorna um array vazio para evitar erros
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return response.map((article: any) => ({
    id: article?.id,
    title: article?.title,
    categorie: article?.categorie,
    imageUrl: article?.imageUrl,
    // thumbnail: article?.thumbnail,
    date: article?.createdAt,
    slug: article?.slug,
  }));

};

  

  export function useGetEventList(
    page: number,
    limit?: number,
    categorie?: string,
  ) {
    return useQuery({
      queryKey: ["fetchEvents", page],
      queryFn: () => getEventList(page, categorie, limit),
    });
  }
