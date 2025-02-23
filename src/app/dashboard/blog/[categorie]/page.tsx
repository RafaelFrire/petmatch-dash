import Filters from "@/components/filters";
import { TitleWithPaw } from "@/components/TitleWithPaw";

const filterOptions = [
  { path: "informacoes", categorie: "Informações" },
  { path: "passeio", categorie: "Passeio" },
  { path: "vacinacao", categorie: "Vacinação" },
  { path: "treinamento", categorie: "Treinamento" },
  { path: "encontro", categorie: "Encontro" },
  { path: "saude", categorie: "Saúde" },
];

export default function BlogPage() {
  return (
    <div>
      <TitleWithPaw title="Artigos" />
      <div className="h-8"></div>
      <div className="max-w-[75%] mx-auto">
        <Filters options={filterOptions} />
      </div>
    </div>
  );
}
