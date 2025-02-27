'use client'
import { ListArticleCard } from "@/components/dashboard/blog/listArticleCard";
import Filters from "@/components/filters";
import { TitleWithPaw } from "@/components/TitleWithPaw";
import { useFilters } from "@/hooks/useFilter";
import { mapArticleListResponse, useGetArticleList } from "@/hooks/useGetArticleList";
import { useParams } from "next/navigation";

const filterOptions = [
  { path: "informacoes", categorie: "Informações" },
  { path: "passeio", categorie: "Passeio" },
  { path: "vacinacao", categorie: "Vacinação" },
  { path: "treinamento", categorie: "Treinamento" },
  { path: "encontro", categorie: "Encontro" },
  { path: "saude", categorie: "Saúde" },
];

export default function BlogPage() {
    const { searchParams } = useFilters();
    const params = useParams();
  
    const currentPage = Number(searchParams.get("page"));
    const categorie = Array.isArray(params.categorie) ? params.categorie[0] : params.categorie;
  
    console.log("categorie", categorie)
    console.log("currentPage", currentPage)

  const { data, error, isLoading } = useGetArticleList(currentPage, categorie);

  console.log("data", data)

  const articles = mapArticleListResponse(data?.articles ?? []);

  if (isLoading) {
    return <div className="text-xl">Loading...</div>;
  }

  if (error) {
    return <div>Error loading article</div>;
  }

  return (
    <div>
      <TitleWithPaw title="Artigos" />
      <div className="h-8"></div>
      <div className="max-w-[75%] mx-auto">
        <Filters options={filterOptions} />
      </div>
      <div className="h-14"></div>
      <div className="max-w-[75%] mx-auto">
        <ListArticleCard articles={articles} />
      </div>
    </div>
  );
}
