interface FilterAccordionProps {
  name: string;
}

const filterOptions = [
    { id: "estado", name: "Estado", options: ["São Paulo", "Rio de Janeiro", "Minas Gerais"] },
    { id: "cidade", name: "Cidade", options: ["São Paulo", "Campinas", "Belo Horizonte"] },
    { id: "especie", name: "Espécie", options: ["Cachorro", "Gato", "Pássaro"] },
    { id: "raca", name: "Raça", options: ["Labrador", "Persa", "Calopsita"] },
    { id: "porte", name: "Porte", options: ["Pequeno", "Médio", "Grande"] },
    { id: "genero", name: "Gênero", options: ["Macho", "Fêmea"] },
    { id: "saude", name: "Saúde", options: ["Vacinado", "Castrado", "Doente"] },
  ];

  const FilterSelect: React.FC<FilterAccordionProps> = ({ name }) => {
    const filter = filterOptions.find((filter) => filter.name === name);
    return (
      <div className="border border-primary100 rounded-[20px] overflow-hidden p-2">
        <select className="w-full md:p-2 font-montserrat text-primary100 text-base bg-white border-none outline-none">
          <option value="">{name}</option>
          {filter?.options.map((option, index) => (
            <option key={index} value={option}>{option}</option>
          ))}
        </select>
      </div>
    );
  };

// components/FilterSidebar.tsx

const FilterSidebar: React.FC = () => {
  return (
    <div className="w-[95%] md:w-[300px] md:mr-10 px-2 mx-auto">
      <div className="w-full border-2 border-primary100 rounded-[10px] shadow-md p-6">
        <h2 className="text-lg font-montserrat font-normal text-primary100 mb-5">
          Filtros
        </h2>
        <div className="space-y-3 hidden sm:block">
          {filterOptions.map((option) => (
            <FilterSelect key={option.id} name={option.name} />
          ))}
        </div>
        {/* Exibindo apenas os selects de Espécie, Porte e Gênero no mobile */}
        <div className="flex sm:hidden space-x-3">
          <FilterSelect name="Espécie" />
          <FilterSelect name="Porte" />
          <FilterSelect name="Gênero" />
        </div>
      </div>
    </div>
  );
}
export default FilterSidebar;
