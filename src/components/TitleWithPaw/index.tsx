import PawDogRed from "@/icons/PawDogRed";

type TitleWithPawProps = { 
    title: string;
 }

export const TitleWithPaw:React.FC<TitleWithPawProps> = ({title}) => {
    return (
      <div className="flex items-center gap-2 justify-center py-10">
        <h1 className="text-4xl font-semibold text-primary100">{title}</h1>
        <PawDogRed width={35} height={35} className="mt-2"/>
      </div>
    );

}