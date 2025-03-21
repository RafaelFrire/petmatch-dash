
export type ProgressBarListProps = {
  data: {
    id: string;
    name: string;
    value: number;
  }[];
};

// const mockProgressBarList: ProgressBarListProps = {
//     data: [
//         { id: '1', name: 'Energia', value: 70 },
//         { id: '2', name: 'Tamanho', value: 50 },
//         { id: '3', name: 'Obdiência', value: 90 },
//         { id: '3', name: 'Tolerância com outros animais 3', value: 90 },
//     ],
// };

const ProgressBarList: React.FC<ProgressBarListProps> = ({
  data,
}) => {
    return(
        <div className="">
            {data.map((progressBar) => {
                return (
                  <div key={progressBar.id} className="py-4">
                    <div className="flex justify-between mb-2">
                      <span>{progressBar.name}</span>
                      <span>{progressBar.value}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="bg-green-500 h-full"
                        style={{ width: `${progressBar.value}%` }}
                      ></div>
                    </div>
                  </div>
                );
            })}
        </div>
    )
};

export default ProgressBarList;