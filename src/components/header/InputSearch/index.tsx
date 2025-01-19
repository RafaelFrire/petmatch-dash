import React from "react";
import FilterHeader from "../filters";
import SearchIcon from "@/icons/SearchIcon";
import Line from "@/components/line";

type inputProps = {} & React.PropsWithChildren<
  React.ComponentPropsWithRef<"input">
>;

const InputSearch: React.FC<inputProps> = ({ ...props }: inputProps) => {
  return (
    <div
      className="w-full max-w-sm min-w-[300px] flex items-center justify-between
    bg-transparent placeholder:text-primary80 text-primary-100 text-sm border border-primary80 rounded-full px-3 py-3 transition duration-300 ease focus:outline-none focus:border-primary80 text-primary80 hover:border-primary60 shadow-sm focus:shadow
    "
    >
      <FilterHeader />
      <Line height={"25px"} width={"1px"} />
      <input
        className="w-full max-w-[50%] py-1 bg-transparent border-none placeholder:text-primary80 focus:outline-none"
        {...props}
      />
      <SearchIcon width={22} height={22} className="mx-2" />
    </div>
  );
};

export default InputSearch;
