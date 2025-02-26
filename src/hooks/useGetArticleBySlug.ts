import { Article } from "@/interfaces/article";
import { apiRequest } from "./useApi";
import { toast } from "react-toastify";
import { useQuery } from "@tanstack/react-query";

interface ArticleContent {
  article: Article;

}

async function getArticleBySlug(slug: string): Promise<ArticleContent | null> {
  try {
    const res = await apiRequest(`/article/${slug}/slug`, {
      method: "GET",
    });

     if (!res.ok) {
      toast.error("Falha ao carregar artigo.");
      return null;
    }

    const data = await res.json();
    toast.success("Artigo encontrado!");
    return data;
  } catch (err) {
    toast.error("Houve um problema na requisição.");
    console.error(err);
    return null;
  }
}
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
export const mapArticleResponse = (response: any): Article => {
  return {
    title: response.title,
    slug: response.slug,
    categorie: response.categorie,
    thumbnail: response.thumbnail,
    createdAt: response.createdAt,
    updatedAt: response.updatedAt, // Adicionando updatedAt
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    sections: response.sections.map((section: any) => ({
      id: section.id, // Mapeando 'id' para 'articleId' se necessário
      title: section.title,
      content: section.content,
      quote: section.quote,
      image: section.image,
    })),
  };
};


export function useGetArticleBySlug(slug: string) {
  return useQuery({
    queryKey: ["fetchArticle", slug],
    queryFn: () => getArticleBySlug(slug), 
  });
}
