import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="relative w-full h-[150px] md:h-[350px] lg:h-[450px]">
      <Image
        src={"/adocao.png"}
        width={1200}
        height={350}
        alt="Banner de adoção"
        className="w-full h-full object-cover"
        loading="lazy"
      />

      <div
        className="absolute inset-0 bg-white bg-opacity-20 flex flex-col 
      items-center justify-center text-white text-center p-4"
      ></div>
    </div>
  );
};

export default Banner;