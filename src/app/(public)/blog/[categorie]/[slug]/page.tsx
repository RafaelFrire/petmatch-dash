"use client";
import { ArticleContent } from "@/components/pages/blog/articleContent";
import { HeroArticle } from "@/components/pages/blog/heroArticle";
import { LastArticlesList } from "@/components/pages/blog/lastArticlesList";
import SpinLoader from "@/components/spinLoader";
import {
  mapArticleResponse,
  useGetArticleBySlug,
} from "@/hooks/useGetArticleBySlug";
import {
  mapArticleListResponse,
  useGetArticleList,
} from "@/hooks/useGetArticleList";
import getImageUrl from "@/utils/getImageUrl";

import { useParams } from "next/navigation";

export default function Blog() {
  const params = useParams();
  const slug = params?.slug as string;

  const { data, error, isLoading } = useGetArticleBySlug(slug);

  const article = data ? mapArticleResponse(data) : null;
  const { data: lastArticleList } = useGetArticleList(1, 9);

  const articles = mapArticleListResponse(lastArticleList?.articles);

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
    <>
      <div className="h-32"></div>
      <div className="flex gap-6 w-full px-6">
        <div className="w-[80%] p-4 rounded-lg">
          <div className="w-[90%] h-[400px] mx-auto flex justify-center">
            <HeroArticle
              srcImage={getImageUrl(article?.thumbnail || "")}
              publishedDate={new Date()}
              ong={{
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
              }}
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

          <LastArticlesList articles={articles || []} />
        </div>
      </div>
    </>
  );
}
