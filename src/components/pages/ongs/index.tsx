import HeartIcon from "@/icons/HeartIcon";
import { StarIcon } from "lucide-react";
import React from "react";

const FilterSelect = ({ placeholder }: { placeholder: string }) => (
  <select className="border border-primary100 h-[46px] px-5 text-primary100 rounded-sm">
    <option>{placeholder}</option>
  </select>
);

interface Ong {
  image: string;
  state: string;
  city: string;
  name: string;
}

const OngCard = ({ ong }: { ong: Ong }) => (
  <div className="rounded-[10px] overflow-hidden shadow-md border">
    <div className="relative">
      <div className="absolute top-3.5 left-0 bg-primary100 text-white text-sm px-3 py-1 rounded-md">
        {ong.state}
      </div>
      <div className="absolute top-12 left-0 bg-primary100 text-white text-sm px-3 py-1 rounded-md">
        {ong.city}
      </div>
      <button className="absolute top-3.5 right-3 bg-transparent border-2 border-red-600 rounded-full p-2">
        <HeartIcon 
        width={25}
        height={25}
        />
      </button>
      <img src={"/assets/imageOngs.png"} alt="ONG" className="w-full h-[294px] object-cover mt-6" />
    </div>
    <div className="p-4 text-center">
      <div className="flex justify-center mb-2">
        {Array(5).fill(0).map((_, i) => (
        //   <img key={i} src="/ic-baseline-star.svg" alt="Star" className="w-5 h-5 mx-1" />
          <StarIcon key={i}  color="#00B878"/>
        ))}
      </div>
      <h3 className="font-bold text-lg">{ong.name}</h3>
    </div>
    <div className="flex justify-center p-4">
      <button className="text-primary100 underline font-medium">Saiba mais</button>
    </div>
  </div>
);

export const OngsListSection = () => {
  const ongCards = Array(16).fill({
    image: "/image-16.png",
    state: "SÃO PAULO",
    city: "ITU",
    name: "Xx",
  });

  return (
    <section className="container mx-auto px-4 py-8 md:w-[80%] ">
          <div className="bg-white rounded-[10px] border-primary100 border-2 border-primary-100 shadow-md p-6 mb-12 md:w-[80%] mx-auto">
        <h2 className="text-lg text-primary100 mb-4">Filtros</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  ">
          {[...Array(6)].map((_, i) => (
            <FilterSelect key={i} placeholder={i % 2 === 0 ? "Estado" : "Cidade"} />
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {ongCards.map((ong, index) => (
          <OngCard key={index} ong={ong} />
        ))}
      </div>
    </section>
  );
};
