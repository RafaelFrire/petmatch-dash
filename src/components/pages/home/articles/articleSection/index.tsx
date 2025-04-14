import React, { JSX } from "react";
import { ArticleCard } from "../articleCard";
import { TitleWithPaw } from "@/components/TitleWithPaw";

interface Article {
  id: number;
  image: string;
  date: string;
  title: string;
  readMoreText: string;
}

export const ArticlesSection = (): JSX.Element => {
  const articles: Article[] = [
    {
      id: 1,
      image: "/assets/card_home.png",
      date: "August 10, 2022",
      title: "O que o seu animal pode comer",
      readMoreText: "Ler mais",
    },
    {
      id: 2,
      image: "/assets/card_home.png",
      date: "August 10, 2022",
      title:
        "Lobortis Pharetra In Necat Boi Risuse Osae That One Far This Fox.",
      readMoreText: "Ler mais",
    },
    {
      id: 3,
      image: "/assets/card_home.png",
      date: "August 10, 2022",
      title:
        "Lobortis Pharetra In Necat Boi Risuse Osae That One Far This Fox.",
      readMoreText: "Ler mais",
    },
    {
      id: 4,
      image: "/assets/card_home.png",
      date: "August 10, 2022",
      title:
        "Lobortis Pharetra In Necat Boi Risuse Osae That One Far This Fox.",
      readMoreText: "Ler mais",
    },
  ];

  return (
    <section className="w-full max-w-[1235px] mx-auto py-16">
      <header className="mb-2 flex items-center">
        <div className="w-7 h-[2.5px] bg-primary100">
        </div>
        <TitleWithPaw title="Artigos"/>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
        {articles.map((article) => (
          <ArticleCard key={article.id} {...article} />
        ))}
      </div>
    </section>
  );
};
