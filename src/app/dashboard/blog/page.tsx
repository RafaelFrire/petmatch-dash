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
      <Filters options={filterOptions} />
    </div>
  );
}
