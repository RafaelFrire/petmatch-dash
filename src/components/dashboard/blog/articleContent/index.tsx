import Image from "next/image";

interface Article {
  title: string;
  slug: string;
  categorie: string;
  thumbnail: string;
  createdAt: string;
}

interface Section {
  id: string;
  title: string;
  content: string;
  quote?: string;
  image?: string;
}

interface ArticleContentProps {
  article: Article;
  sections: Section[];
}

export const ArticleContent: React.FC<ArticleContentProps> = ({ article, sections }) => {
  return (
    <article className="p-6">
      {/* Cabeçalho do Artigo */}
      <header className="mb-8 ">
        <h1 className="text-4xl font-bold text-primary100">{article.title}</h1>
        <div className="h-12"></div>
        <p className="text-gray-700 text-lg">{sections[0].content}</p>
        <div className="h-12"></div>

        <div className="mt-4">
          <Image
            src={article.thumbnail}
            alt={article.title}
            width={800}
            height={400}
            className="rounded-lg object-cover"
          />
        </div>
      </header>

      {/* Seções do Artigo */}
      {sections.map((section) => (
        <section key={section.id} className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">{section.title}</h2>
          <p className="text-gray-700 text-xl">{section.content}</p>

          {section.quote && (
            <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-600 my-4">
              {section.quote}
            </blockquote>
          )}

          {section.image && (
            <div className="mt-4">
              <Image
                src={section.image}
                alt={section.title}
                width={800}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
          )}
        </section>
      ))}
    </article>
  );
};
