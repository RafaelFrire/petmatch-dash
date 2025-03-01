"use client";
import { ListArticleCard } from "@/components/dashboard/blog/listArticleCard";
import Filters from "@/components/filters";
import SpinLoader from "@/components/spinLoader";
import { TitleWithPaw } from "@/components/TitleWithPaw";
import { useFilters } from "@/hooks/useFilter";
import {
  mapArticleListResponse,
  useGetArticleList,
} from "@/hooks/useGetArticleList";
import { useParams } from "next/navigation";
import { Suspense } from "react";

const filterOptions = [
  { path: "informacoes", categorie: "Informações" },
  { path: "passeio", categorie: "Passeio" },
  { path: "vacinacao", categorie: "Vacinação" },
  { path: "treinamento", categorie: "Treinamento" },
  { path: "encontro", categorie: "Encontro" },
  { path: "saude", categorie: "Saúde" },
];

function BlogContent() {
  const { searchParams } = useFilters();
  const params = useParams();

  const currentPage = Number(searchParams.get("page"));
  const categorie = Array.isArray(params.categorie)
    ? params.categorie[0]
    : params.categorie;

  console.log("categorie", params);
  console.log("currentPage", currentPage);

  const { data, error, isLoading } = useGetArticleList(currentPage, 12, categorie);
  const articles = mapArticleListResponse(data?.articles ?? []);

  if (isLoading) {
    return (
      <div className="py-10">
        <SpinLoader />
      </div>
    );
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

export default function BlogPage() {
  return (
    <Suspense fallback={<div>Carregando artigos...</div>}>
      <BlogContent />
    </Suspense>
  );
}
