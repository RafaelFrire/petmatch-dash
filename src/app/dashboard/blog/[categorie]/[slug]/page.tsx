"use client";
import { BannerImage } from "@/components/Banner";
import { useParams } from "next/navigation";

export default function Blog() {
  const params = useParams();
  const slug = params?.slug as string;
  const categorie = params?.categorie as string;
  console.log("slug>", slug);
  return (
    <>
      <div className="h-32"></div>
      <div className="flex gap-6 w-full px-6">
        {/* Área principal (Imagem + Conteúdo) */}
        <div className="w-[80%] p-4 rounded-lg">
          {/* Imagem no topo */}
          <div className="w-[90%] h-[400px] mx-auto flex justify-center">
            <BannerImage
              width={900}
              height={300}
              className="w-full h-full object-cover rounded-lg"
              src="https://www.science.org/do/10.1126/science.abi5787/full/main_puppies_1280p-1710959220337.jpg"
            />
          </div>

          {/* Conteúdo do post */}
          <div className="mt-4">
            <h1 className="text-xl font-bold">Título da Publicação</h1>
            <p className="text-gray-700 mt-2">
              Aqui ficará o conteúdo do post...
            </p>
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
