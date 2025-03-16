import { ButtonFilter } from "@/components/filters/buttonFilter";
import Line from "@/components/line";

type eventFilterProps = {
  categories: { categorie: string; count: number }[];
};

type filterOptions = {
  label: string;
  value: string;
};

const filterOptions = [
  { path: "adocao", categorie: "Adoção" },
  { path: "passeio", categorie: "Passeio" },
  { path: "vacinacao", categorie: "Vacinação" },
  { path: "treinamento", categorie: "Treinamento" },
  { path: "encontro", categorie: "Encontro" },
  { path: "saude", categorie: "Saúde" },
];

export const EventFilter: React.FC<eventFilterProps> = ({ categories }) => {
  return (
    <div className="min-w-[200px] max-h-[350px] mx-auto border-2 rounded-md border-primary100 py-2">
      <div>
        <div className="px-4 py-2">
          <h1 className="text-md text-primary80 font-bold">Categorias</h1>
        </div>
        <div className="h-2"></div>
        <Line height="1.5px" width="full" classname="bg-sencondary60" />
        <div className="h-2"></div>
        {Array.isArray(categories) &&
          categories.map((item, index) => {
            return (
              <div
                key={index}
                className="flex items-center justify-between px-2"
              >
                <p>{item.categorie}</p>
                <p>{`(${item.count})`}</p>
              </div>
            );
          })}

        <div className="hidden md:block">
          <div className=" px-4 py-2">
            <h1 className="text-md text-primary80 font-bold">Tags</h1>
          </div>
          <Line height="1.5px" width="full" classname=" bg-sencondary60" />
          <div className="grid grid-cols-3 gap-3 w-[90%] mx-auto py-4">
            {filterOptions.map((item, index) => {
              return (
                <ButtonFilter
                  key={index}
                  categorie={{
                    path: item.path,
                    categorie: item.categorie,
                    basepath: "event",
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
