"use client";
import { articleCardProps } from "@/components/dashboard/blog/articleCard";
import { ArticleContent } from "@/components/dashboard/blog/articleContent";
import { HeroArticle } from "@/components/dashboard/blog/heroArticle";
import { LastArticlesList } from "@/components/dashboard/blog/lastArticlesList";
import { Ong } from "@/interfaces/ong";
// import { useParams } from "next/navigation";

export const mockOng: Ong = {
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
};

const mockArticle = {
  title:
    "Cuidados Essenciais com Pets: Como Garantir uma Vida Saudável e Feliz para Seu Animal de Estimação",
  slug: "impacto-tecnologia",
  categorie: "Tecnologia",
  thumbnail:
    "https://www.science.org/do/10.1126/science.abi5787/full/main_puppies_1280p-1710959220337.jpg", // Imagem fictícia
  createdAt: "2025-02-24T12:00:00Z",
};

const mockSections = [
  {
    id: "1",
    title: "Cuidados Essenciais com Pets: ",
    content:
      "Ter um pet é uma responsabilidade que exige dedicação e carinho. Cuidar bem do seu animal de estimação não só garante sua saúde e bem-estar, mas também fortalece o vínculo entre dono e pet. Abaixo, listamos os principais cuidados que você deve ter para proporcionar uma vida longa e feliz ao seu companheiro.",
    quote:
      "Uma alimentação equilibrada e adequada é essencial para a saúde e o bem-estar dos animais - Ezekiel Miles ",
    image:
      "https://akc.org/wp-content/uploads/2017/11/How-to-train-your-dog-for-new-owners.png",
  },
  {
    id: "2",
    title: "Alimentação Adequada",
    content:
      "Uma alimentação equilibrada é essencial para a saúde do seu pet. Ofereça rações de qualidade, adequadas para a idade e espécie do animal. Evite alimentos industrializados e temperados, pois muitos podem ser tóxicos para os bichinhos.",
  },
  {
    id: "3",
    title: "Hidratação Constante",
    content:
      "Mantenha sempre água fresca e limpa à disposição do seu pet. A hidratação adequada é fundamental para o funcionamento do organismo e previne diversas doenças.",
    // image: "https://www.science.org/do/10.1126/science.abi5787/full/main_puppies_1280p-1710959220337.jpg", // Imagem fictícia
  },
  {
    id: "4",
    title: "Conclusão",
    content:
      "Cuidar de um animal de estimação vai muito além de oferecer comida e abrigo. Proporcionar uma alimentação adequada, manter a hidratação constante e garantir uma rotina de cuidados são atitudes essenciais para garantir uma vida saudável e feliz ao seu pet. Ao seguir essas dicas, você estará contribuindo para o bem-estar do seu companheiro de quatro patas!",
    // image: "https://www.science.org/do/10.1126/science.abi5787/full/main_puppies_1280p-1710959220337.jpg", // Imagem fictícia
  },
];

export const mockArticles: articleCardProps[] = [
  {
    title: "Cuidados Essenciais com Pets",
    date: "2025-02-24T12:00:00Z",
    categorie: "Pets",
    slug: "cuidados-essenciais-pets",
    imageUrl:
      "https://www.science.org/do/10.1126/science.abi5787/full/main_puppies_1280p-1710959220337.jpg",
  },
  {
    title: "Tecnologia no Dia a Dia",
    date: "2025-02-23T10:30:00Z",
    categorie: "Tecnologia",
    slug: "tecnologia-dia-a-dia",
    imageUrl:
      "https://www.science.org/do/10.1126/science.abi5787/full/main_puppies_1280p-1710959220337.jpg",
  },
  {
    title: "Dicas para Programadores Iniciantes",
    date: "2025-02-22T14:15:00Z",
    categorie: "Programação",
    slug: "dicas-programadores-iniciantes",
    imageUrl:
      "https://www.science.org/do/10.1126/science.abi5787/full/main_puppies_1280p-1710959220337.jpg",
  },
];

export default function Blog() {
  // const params = useParams();
  // const slug = params?.slug as string;
  // const categorie = params?.categorie as string;
  return (
    <>
      <div className="h-32"></div>
      <div className="flex gap-6 w-full px-6">
        <div className="w-[80%] p-4 rounded-lg">
          <div className="w-[90%] h-[400px] mx-auto flex justify-center">
            <HeroArticle
              srcImage="https://www.science.org/do/10.1126/science.abi5787/full/main_puppies_1280p-1710959220337.jpg"
              publishedDate={new Date()}
              ong={mockOng}
            />
          </div>

          <div className="h-12"></div>
          <div className="mt-4 w-[90%] mx-auto">
            <ArticleContent article={mockArticle} sections={mockSections} />
          </div>
        </div>

        {/* Sidebar com os últimos artigos */}
        <div className="w-[20%] bg-gray-100 p-4 rounded-lg shadow-md">
          <h2 className="text-lg text-primary100 font-bold mb-4">
            Novos Artigos
          </h2>
          <LastArticlesList articles={mockArticles} />
        </div>
      </div>
    </>
  );
}
