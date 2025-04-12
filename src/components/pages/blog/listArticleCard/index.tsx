"use client";
import { Pagination } from "@/components/pagination";
import { ArticleCard, articleCardProps } from "../articleCard";
import React from "react";

export type ListArticleCardProps = {
  articles: articleCardProps[];
};

export const ListArticleCard: React.FC<ListArticleCardProps> = ({
  articles,
}) => {
  const [currentPage, setCurrentPage] = React.useState(1);

  return (
    <div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {articles.length > 0 ? (
          articles.map((article, index) => (
            <ArticleCard key={index} {...article} />
          ))
        ) : (
          <div className="col-span-3 py-3 text-center">
            <h1 className="text-2xl text-primary100">
              Nenhum artigo encontrado..
            </h1>
          </div>
        )}
      </div>

      {articles.length > 0 ? (
        <div className="w-full flex justify-end py-4 px-4">
          <Pagination
            totalPages={5}
            pageSize={15}
            currentPage={currentPage}
            onPageChange={(page) => setCurrentPage(page)}
            baseurl="blog"
          />
        </div>
      ) : null}
    </div>
  );
};
