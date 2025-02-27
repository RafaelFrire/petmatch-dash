"use client";
import { articleCardProps } from "@/components/dashboard/blog/articleCard";
import { ArticleContent } from "@/components/dashboard/blog/articleContent";
import { HeroArticle } from "@/components/dashboard/blog/heroArticle";
import { LastArticlesList } from "@/components/dashboard/blog/lastArticlesList";
import {
  mapArticleResponse,
  useGetArticleBySlug,
} from "@/hooks/useGetArticleBySlug";
import { Ong } from "@/interfaces/ong";
import { useParams } from "next/navigation";

export const mockOng: Ong = {
  id: "1",
  name: "Patas Felizes",
  slug: "patas-felizes",
  cnpj: "12.345.678/0001-99",
  phone: "(11) 98765-4321",
  address: "Rua das Esperanças, 123",
  zipcode: "01010-000",
  state: "SP",
  city: "São Paulo",
  userId: "user-123",
};

export const mockArticles: articleCardProps[] = [
  {
    title: "Cuidados Essenciais com Pets",
    date: "2025-02-24T12:00:00Z",
    categorie: "Pets",
    slug: "cuidados-essenciais-pets",
    imageUrl:
      "https://www.science.org/do/10.1126/science.abi5787/full/main_puppies_1280p-1710959220337.jpg",
  },
  {
    title: "Tecnologia no Dia a Dia",
    date: "2025-02-23T10:30:00Z",
    categorie: "Tecnologia",
    slug: "tecnologia-dia-a-dia",
    imageUrl:
      "https://www.science.org/do/10.1126/science.abi5787/full/main_puppies_1280p-1710959220337.jpg",
  },
  {
    title: "Dicas para Programadores Iniciantes",
    date: "2025-02-22T14:15:00Z",
    categorie: "Programação",
    slug: "dicas-programadores-iniciantes",
    imageUrl:
      "https://www.science.org/do/10.1126/science.abi5787/full/main_puppies_1280p-1710959220337.jpg",
  },
];

export default function Blog() {
  const params = useParams();
  const slug = params?.slug as string;

  const { data, error, isLoading } = useGetArticleBySlug(slug);

  const article = data ? mapArticleResponse(data) : null;

  if (isLoading) {
    return <div className="text-xl">Loading...</div>;
  }

  if (error) {
    return <div>Error loading article</div>;
  }

  return (
    <>
      <div className="h-32"></div>
      <div className="flex gap-6 w-full px-6">
        <div className="w-[80%] p-4 rounded-lg">
          <div className="w-[90%] h-[400px] mx-auto flex justify-center">
            <HeroArticle
              srcImage={article?.thumbnail || ""}
            publishedDate={new Date()}
              ong={mockOng}
            />
          </div>

          <div className="h-12"></div>
          <div className="mt-4 w-[90%] mx-auto">
            <ArticleContent article={article || null} />
          </div>
        </div>

        {/* Sidebar com os últimos artigos */}
        <div className="w-[28%] max-h-[400px] rounded-lg shadow-md">
          <h2 className="text-lg text-primary100 font-bold mb-4">
            Novos Artigos
          </h2>
          {/* <div className="h-3 bg-primary100"></div> */}

          <LastArticlesList articles={mockArticles} />
        </div>
      </div>
    </>
  );
}
