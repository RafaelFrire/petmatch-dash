import React from "react";

const Banner = () => {
  return (
    <div className="relative w-full h-[100px] md:h-[100px] lg:h-[450px]">
      <img 
        src="/adocao.png"
        alt="Banner de adoção" 
        className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-white bg-opacity-30 flex flex-col 
      items-center justify-center text-white text-center p-4">

    </div>
    </div>
  );
};

export default Banner;