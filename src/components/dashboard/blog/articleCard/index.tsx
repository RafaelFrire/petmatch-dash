import Image from "next/image";
import { Calendar } from "lucide-react";

export type articleCardProps = {
  title: string;
  date: string;
  categorie: string;
  slug: string;
  imageUrl: string;
};

export const ArticleCard: React.FC<articleCardProps> = ({
  title,
  date,
  imageUrl,
  categorie,
  slug
}) => {
  return (
    <a href={`/dashboard/blog/${categorie}/${slug}`}>
    <div className="flex flex-col items-center w-full h-[350px] border-t-2 border-r-2 border-l-2 rounded-lg cursor-pointer border-primary100 bg-gray-200 overflow-hidden"
    >
      <div className="w-full h-[80%]">
        <Image
          src={imageUrl}
          alt="article"
          width={500}
          height={300}
          className="w-full h-full object-cover"
        />
      </div>
      {/* Container do texto */}
      <div className="w-full h-[35%] flex flex-col justify-center p-2 text-start px-4 rounded-t-none rounded-b-lg rounded-l-md rounded-r-md border-2 border-primary100">
        <div className="flex items-center gap-1">
          <Calendar width={20} height={20} color="#B80000" />
          <h1 className="text-sm text-gray-600 font-semibold">{date}</h1>
        </div>
        <h1 className="text-xl font-bold text-primary100">{title}</h1>
      </div>
    </div>
    </a>

  );
};
