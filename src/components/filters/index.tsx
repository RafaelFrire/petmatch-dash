import { ButtonFilter } from "./buttonFilter";

type filterProps = {
    options: {path: string, categorie: string}[];
    
}

export default function Filters({ options }: filterProps) {
  return (
    <div className="max-w-[70%] mx-auto border-2 rounded-lg border-primary100">
      <div className="h-4"></div>
      <h1>Tags</h1>
      <div className="grid grid-cols-3 gap-4 max-w-[85%] mx-auto">
        {options.map((categorie, index) => (
          <ButtonFilter categorie={categorie} key={index} />
        ))}
      </div>
      <div className="h-4"></div>
    </div>
  );
}
