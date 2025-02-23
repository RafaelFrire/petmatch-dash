import { ArticleCard, articleCardProps } from "../articleCard";

export type ListArticleCardProps = {
  articles: articleCardProps[];
};

export const ListArticleCard: React.FC<ListArticleCardProps> = ({
  articles,
}) => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {articles.map((article, index) => (
        <ArticleCard key={index} {...article} />
      ))}
    </div>
  );
};
