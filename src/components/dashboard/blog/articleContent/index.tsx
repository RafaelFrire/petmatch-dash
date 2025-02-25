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

export const ArticleContent: React.FC<ArticleContentProps> = ({
  article,
  sections,
}) => {
  return (
    <article className="p-6">
      {/* Cabeçalho do Artigo */}
      <header className="mb-8 ">
        <h1 className="text-4xl font-bold text-primary100">{article.title}</h1>
        <div className="h-12"></div>
        <p className="text-gray-700 text-lg">{sections[0].content}</p>
        <div className="h-12"></div>
      </header>

      {/* Seções do Artigo */}
      {sections.map((section) => (
        <section key={section.id} className="mb-8">
          <h1 className="text-4xl font-bold text-primary100">
            {section.title}
          </h1>

          {section.quote && (
            <>
              <div className="h-14"></div>
              <div className="bg-primary80 p-6 md:p-8 py-4 rounded-sm shadow-md">
                <blockquote className="relative  text-white text-2xl italic leading-relaxed">
                  <span className="text-white text-5xl font-bold absolute -top-4 left-4">
                    “
                  </span>
                  <span className="px-12">{section.quote}</span>
                  <span className="text-white text-5xl font-bold absolute -bottom-4 right-4">
                    ”
                  </span>
                </blockquote>
              </div>
              <div className="8"></div>
            </>
          )}

          <div className="h-12"></div>
          <p className="text-gray-700 text-lg">{section.content}</p>

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
