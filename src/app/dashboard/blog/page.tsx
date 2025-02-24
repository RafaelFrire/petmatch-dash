import {
  ListArticleCard,
  ListArticleCardProps,
} from "@/components/dashboard/blog/listArticleCard";
import Filters from "@/components/filters";
import { TitleWithPaw } from "@/components/TitleWithPaw";
import { Suspense } from "react";

const filterOptions = [
  { path: "informacoes", categorie: "Informações" },
  { path: "passeio", categorie: "Passeio" },
  { path: "vacinacao", categorie: "Vacinação" },
  { path: "treinamento", categorie: "Treinamento" },
  { path: "encontro", categorie: "Encontro" },
  { path: "saude", categorie: "Saúde" },
];

const mockArticles: ListArticleCardProps = {
  articles: [
    {
      title: "Como cuidar de um cachorro",
      date: "10 de agosto de 2024",
      slug:"como_cuidar_de_um_cachorro",
      categorie: "informacoes",
      imageUrl:
        "https://akc.org/wp-content/uploads/2017/11/How-to-train-your-dog-for-new-owners.png",
    },
    {
      title: "FAZ O M!",
      date: "10 de agosto de 2024",
      slug:"como_cuidar_de_um_cachorro",
      categorie: "informacoes",
      imageUrl:
        "https://akc.org/wp-content/uploads/2017/11/How-to-train-your-dog-for-new-owners.png",
    },
    {
      title: "ANO NOVO VIDA NOVA 360°",
      date: "10 de agosto de 2024",
      slug:"como_cuidar_de_um_cachorro",
      categorie: "informacoes",
      imageUrl:
        "https://akc.org/wp-content/uploads/2017/11/How-to-train-your-dog-for-new-owners.png",
    },
  ],
};

function BlogContent() {
  return (
    <div>
      <TitleWithPaw title="Artigos" />
      <div className="h-8"></div>
      <div className="max-w-[75%] mx-auto">
        <Filters options={filterOptions} />
      </div>
      <div className="h-14"></div>
      <div className="max-w-[75%] mx-auto">
        <ListArticleCard articles={mockArticles.articles} />
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