import { ButtonFilter } from "./buttonFilter";

type filterProps = {
  options: { path: string; categorie: string, basepath: string }[];
};

export default function Filters({ options }: filterProps) {
  return (
    <div className="border-2 rounded-lg border-primary100">
      <div className="h-4"></div>
      <div className="grid grid-cols-3 gap-4 max-w-[85%] mx-auto">
        {options.map((categorie, index) => (
          <ButtonFilter categorie={categorie} key={index} />
        ))}
      </div>
      <div className="h-4"></div>
    </div>
  );
}
