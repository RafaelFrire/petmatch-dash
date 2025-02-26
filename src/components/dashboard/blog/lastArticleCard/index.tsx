import Image from "next/image";
import { articleCardProps } from "../articleCard";

type LastArticleCardProps = {
  article: articleCardProps;
};

export const LastArticleCard: React.FC<LastArticleCardProps> = ({
  article,
}) => {
  return (
    <a href={`/dashboard/blog/${article.categorie}/${article.slug}`}>
      <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow cursor-pointer">
        {/* Imagem do artigo */}
        <Image
          src={article.imageUrl}
          alt={article.title}
          className="w-32 h-24 object-cover rounded-md"
          width={200}
          height={200}
        />

        {/* Conteúdo do artigo */}
        <div className="flex flex-col justify-between">
          <span className="text-md text-gray-500">
            {new Date(article.date).toLocaleDateString("pt-BR")}
          </span>
          <h2 className="text-md font-semibold text-gray-800">
            {article.title}
          </h2>
        </div>
      </div>
    </a>
  );
};
