"use client";
import { ArticleContent } from "@/components/dashboard/blog/articleContent";
import { HeroArticle } from "@/components/dashboard/blog/heroArticle";
import { Ong } from "@/interfaces/ong";
import { useParams } from "next/navigation";

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
  title: "Cuidados Essenciais com Pets: Como Garantir uma Vida Saudável e Feliz para Seu Animal de Estimação",
  slug: "impacto-tecnologia",
  categorie: "Tecnologia",
  thumbnail: "https://www.science.org/do/10.1126/science.abi5787/full/main_puppies_1280p-1710959220337.jpg", // Imagem fictícia
  createdAt: "2025-02-24T12:00:00Z",
};

const mockSections = [
  {
    id: "1",
    title: "Cuidados Essenciais com Pets: ",
    content: "Ter um pet é uma responsabilidade que exige dedicação e carinho. Cuidar bem do seu animal de estimação não só garante sua saúde e bem-estar, mas também fortalece o vínculo entre dono e pet. Abaixo, listamos os principais cuidados que você deve ter para proporcionar uma vida longa e feliz ao seu companheiro.",
    quote: "A tecnologia move o mundo. - Steve Jobs",
    image: "https://www.science.org/do/10.1126/science.abi5787/full/main_puppies_1280p-1710959220337.jpg", // Imagem fictícia
  },
  {
    id: "2",
    title: "Alimentação Adequada",
    content: "Uma alimentação equilibrada é essencial para a saúde do seu pet. Ofereça rações de qualidade, adequadas para a idade e espécie do animal. Evite alimentos industrializados e temperados, pois muitos podem ser tóxicos para os bichinhos.",
  },
  {
    id: "3",
    title: "Hidratação Constante",
    content: "Mantenha sempre água fresca e limpa à disposição do seu pet. A hidratação adequada é fundamental para o funcionamento do organismo e previne diversas doenças.",
    image: "https://www.science.org/do/10.1126/science.abi5787/full/main_puppies_1280p-1710959220337.jpg", // Imagem fictícia
  },
];

export default function Blog() {
  const params = useParams();
  const slug = params?.slug as string;
  const categorie = params?.categorie as string;
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
            <ArticleContent 
            article={mockArticle}
            sections={mockSections}
            />
          </div>
        </div>

        {/* Sidebar com os últimos artigos */}
        <div className="w-[20%] bg-gray-100 p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">Últimos Artigos</h2>
          <ul className="space-y-2">
            <li className="border-b pb-2">Artigo 1</li>
            <li className="border-b pb-2">Artigo 2</li>
            <li className="border-b pb-2">Artigo 3</li>
          </ul>

          {/* Informações adicionais */}
          <div className="mt-6">
            <h3 className="text-md font-medium">Blog: {slug}</h3>
            <h3 className="text-md font-medium">Categoria: {categorie}</h3>
          </div>
        </div>
      </div>
    </>
  );
}
