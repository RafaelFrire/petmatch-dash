import { toast } from "react-toastify";
import { apiRequest } from "./useApi";
import { useQuery } from "@tanstack/react-query";
import { Article } from "@/interfaces/article";
import { articleCardProps } from "@/components/dashboard/blog/articleCard";

async function getArticleList(
  page: number,
  categorie?: string,
): Promise<{ articles: Article[]; page: number; limit: number } | null> {
  try {
    const res = await apiRequest(
      `/articles?page=${page}&limit=15${
        categorie ? `&categorie=${categorie}` : ""
      }`,
      {
        method: "GET",
      }
    );

    if (!res.ok) {
      toast.error("Falha ao carregar artigos.");
      return null;
    }

    const data = await res.json();
    toast.success("Artigos carregados.");
    return data;
  } catch (err) {
    toast.error("Houve um problema na requisição.");
    console.error(err);
    return null;
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const mapArticleListResponse = (response: any): articleCardProps[] => {
  if(!Array.isArray(response)){
    console.error("mapArticleListResponse: response não é um array", response);
    return []; // Retorna um array vazio para evitar erros
  }


  return response.map((article: any) => ({
    // id: article?.id,
    title: article?.title,
    categorie: article?.categorie,
    imageUrl: article?.thumbnail,
    date: article?.createdAt,
    slug: article?.slug,
    // content: article?.content,
    // updatedAt: article?.updatedAt,
  }));

};

  
  export function useGetArticleList(page: number, categorie?: string) {
    return useQuery({
      queryKey: ["fetchArticles", page],
      queryFn: () => getArticleList(page, categorie),
    });
  }
