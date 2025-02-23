"use client";
import { Pagination } from "@/components/pagination";
import { ArticleCard, articleCardProps } from "../articleCard";

export type ListArticleCardProps = {
  articles: articleCardProps[];
};

export const ListArticleCard: React.FC<ListArticleCardProps> = ({
  articles,
}) => {
  return (
    <div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((article, index) => (
          <ArticleCard key={index} {...article} />
        ))}
      </div>
      <div className="w-full flex justify-end py-4 px-4">
        <Pagination
          totalCount={10}
          pageSize={5}
          currentPage={0}
          onPageChange={() => {}}
        />
      </div>
    </div>
  );
};
