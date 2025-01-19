import Text from "@/components/Text";
import FilterIcon from "@/icons/FilterIcon";

const FilterHeader = () =>{
    return (
      <div className="flex items-center ">
        <FilterIcon width={25} height={25} className="mx-1" />
        <Text text="Filtros" />
      </div>
    );
}


export default FilterHeader;