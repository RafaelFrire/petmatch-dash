import { FC } from "react";

export const SectionImages: FC = () => {
  return (
    <div className="w-full md:w-1/2 relative h-[428px]">
      <div className="relative w-full h-full">
        {/* Card 1 */}
        <div className="absolute right-0 top-0 w-[385px] h-[394px] overflow-hidden rounded-xl">
          <div className="w-full h-full bg-[url('/assets/card_home2.png')] bg-cover bg-center rounded-xl">
            <div className="h-full bg-black bg-opacity-30 rounded-xl" />
    
          </div>
          
        </div>

        {/* Card 2 */}
        <div className="absolute left-0 bottom-0 w-[319px] h-[326px] overflow-hidden">
          <img
            className="w-full h-full object-cover"
            alt="Animal rescue organization"
            src="/assets/card_home.png"
          />
        </div>
      </div>
    </div>
  );
};
