import DogIcon from "@/icons/DogIcon";
import EnergyIcon from "@/icons/EnergyIcon";
import SizePetIcon from "@/icons/SizeIcon";
import StartRedIcon from "@/icons/StarRedIcon";

export type ProgressBarListProps = {
  data: {
    id: string;
    name: string;
    value: number;
  }[];
};

const ProgressBarList: React.FC<ProgressBarListProps> = ({ data }) => {
  const ChooseIcon = (label: string) => {
    switch (label) {
      case "Energia":
        return <EnergyIcon width={60} height={60} />;
      case "Tamanho":
        return <SizePetIcon width={60} height={60} />;
      case "Obdiência":
        return <StartRedIcon width={60} height={60} />;
      case "Tolerância com outros animais":
        return <DogIcon width={60} height={60} />;
    }
  };

  return (
    <div className="">
      {data.map((progressBar) => {
        return (
          <div key={progressBar.id} className="py-4 flex items-center gap-4">
            {ChooseIcon(progressBar.name)}
            <div className="w-full md:w-[600px]">
              <div className="flex justify-between mb-2">
                <span className="text-primary100 text-xl">{progressBar.name}</span>
                <span>{progressBar.value}%</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="bg-green-500 h-full"
                  style={{ width: `${progressBar.value}%` }}
                ></div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProgressBarList;
