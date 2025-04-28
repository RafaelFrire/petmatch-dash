import { Search, Trash2, Filter, Download, Plus } from "lucide-react";

type eventsHeaderProps = {
  register?: () => void;
  handleDelete?: () => void;
  handleEdit?: () => void;
  isEdit?: boolean;
}

export const EventsHeader:React.FC<eventsHeaderProps> = ({register, handleDelete, isEdit, handleEdit}) => {


  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 p-6 border-b border-[#eaecf0] bg-white">
      {/* Input de pesquisa */}
      <div className="w-full md:w-1/2">
        <div className="relative max-w-md w-full">
          <input
            type="text"
            placeholder="Pesquisar"
            className="w-full pl-6 pr-10 py-2.5 border border-primary100 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-primary20"
          />
          <Search className="absolute right-3 top-2.5 w-5 h-5 text-primary80" />
        </div>
      </div>

      {/* Botões de ação */}
      <div className="flex flex-wrap justify-end gap-2">
        <button className="flex items-center gap-2 px-4 py-2 rounded-md text-sm text-gray-700 hover:bg-gray-100 transition" onClick={handleDelete}>
          <Trash2 className="w-4 h-4" />
          Excluir
        </button>

        <button className="flex items-center gap-2 px-4 py-2 rounded-md text-sm text-gray-700 hover:bg-gray-100 transition">
          <Filter className="w-4 h-4" />
          Filtros
        </button>

        <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-50 transition">
          <Download className="w-4 h-4" />
          Exportar
        </button>

        <button className="flex items-center gap-2 px-4 py-2 bg-primary80 text-white rounded-md text-sm hover:bg-primary-600 transition"
        onClick={isEdit ? handleEdit : register}
        >
          <Plus className="w-4 h-4" />
          {isEdit ? "Editar" : "Cadastrar"}
        </button>
      </div>
    </div>
  );
};
