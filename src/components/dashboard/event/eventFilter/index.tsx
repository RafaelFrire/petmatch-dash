import { ButtonFilter } from "@/components/filters/buttonFilter";
import Line from "@/components/line";
import Text from "@/components/Text";

type eventFilterProps = {
  categories: { categorie: string; count: number }[];
};

type filterOptions = {
 label: string,
 value: string,
}

// const filterCategories:filterOptions[] = [
//     {label: "Feira de Adoção", value: "feira_de_adocao"},
//     {label: "Treinamento", value: "treinamento"},
//     {label: "Feira de Vacinação", value: "feira_de_vacinacao"},
//     {label: "Passeio Comunitário", value: "passeio_comunitario"},
//     {label: "Outros", value: "outros"},
// ]

const filterOptions = [
  { path: "/event/adocao", categorie: "Adoção" },
  { path: "/event/adocao", categorie: "passeio" },
  { path: "/event/adocao", categorie: "Vacinação" },
  { path: "/event/adocao", categorie: "Treinamento" },
  { path: "/event/adocao", categorie: "Encontro" },
  { path: "/event/adocao", categorie: "Madical" },
];

export const EventFilter:React.FC<eventFilterProps> = ({categories}) =>{
    return (
      <div className="min-w-[340px] max-h-[350px] border-2 rounded-md border-primary100">
        <div>
          <div className="px-2 py-2">
            <Text text="Categorias" className="font-bold " />
          </div>
          <div className="h-2"></div>
          <Line height="1.5px" width="full" classname="bg-sencondary60" />
          <div className="h-2"></div>
            {
                categories.map((item, index) =>{
                    return (
                      <div key={index} className="flex items-center justify-between px-2">
                        <p>{item.categorie}</p>
                        <p>{`(${item.count})`}</p>
                      </div>
                    );
                })
            }


          <div className="px-2 py-2">
            <Text text="Tags" />
          </div>
          <Line height="1.5px" width="full" classname="bg-sencondary60" />

          <div className="grid grid-cols-3 gap-3 w-[90%] mx-auto py-4">
            {filterOptions.map((item, index) =>{
                return (
                  <ButtonFilter
                    key={index}
                    categorie={{ path: item.path, categorie: item.categorie }}
                  />
                );
            })}
          
          </div>
        </div>
      </div>
    );
}