import { articleCardProps } from "../articleCard"
import { LastArticleCard } from "../lastArticleCard";

type LastArticlesList = {
    articles: articleCardProps[]
}

export const LastArticlesList: React.FC<LastArticlesList> = ({ articles }) => {
  return (
    <div className="space-y-4">
      {articles.map((article) => (
        <LastArticleCard key={article.slug} article={article} />
      ))}
    </div>
  );
};