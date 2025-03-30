import React from "react";
import { HeartIcon } from "lucide-react";
import PawDogRed from "@/icons/PawDogRed";
const animals:animalCardProps[] = [
    {
        animal: {
            id: "1",
            name: "Ruby",
            breed: "Aussiedoodle",
            gender: "Male",
            age: "10 weeks",
            image: "/assets/Rectangle-17480.png",
        },
    },
    {
        animal: {
            id: "2",
            name: "Mauve",
            breed: "Aussiedoodle",
            gender: "Female",
            age: "10 weeks",
            image: "/assets/Rectangle-17480.png",
        },
    },
    {
        animal: {
            id: "3",
            name: "Elisa",
            breed: "Aussiedoodle",
            gender: "Male",
            age: "10 weeks",
            image: "/assets/Rectangle-17480.png",
        },
    },
    {
        animal: {
            id: "4",
            name: "Ollie",
            breed: "Aussiedoodle",
            gender: "Male",
            age: "10 weeks",
            image: "/assets/Rectangle-17480.png",
        },
    },
    {
        animal: {
            id: "5",
            name: "Ollie",
            breed: "Aussiedoodle",
            gender: "Male",
            age: "10 weeks",
            image: "/assets/Rectangle-17480.png",
        },
    },
    {
        animal: {
            id: "10",
            name: "Ollie",
            breed: "Aussiedoodle",
            gender: "Male",
            age: "10 weeks",
            image: "/assets/Rectangle-17480.png",
        },
    },
];

type animalCardProps = {
  animal: {
    id: string;
    name: string;
    image: string;
    breed: string;
    gender: string;
    age: string;
  };
};

const AnimalCard: React.FC<animalCardProps> = ({ animal }) => {
  return (
    <a href="#">
    <div className="h-[468px] border-2 border-primary100 rounded-[10px] overflow-hidden shadow-lg">
      <img
        className="w-full h-[326px] object-cover"
        src={animal.image}
        alt={animal.name}
      />
      <div className="p-3">
        <div className="flex justify-between items-center mt-4">
          <h3 className="font-bold text-xl text-primary100">{animal.name}</h3>
          <button className="w-[33px] h-[38px] flex items-center justify-center rounded-[20px] border-2 border-primary-100">
            <HeartIcon className="w-[21px] h-6 text-primary100" />
          </button>
        </div>
        <p className="text-xl text-primary100">{animal.breed}</p>
        <p className="text-xl text-primary100">
          {animal.gender} - {animal.age}
        </p>
      </div>
    </div>
    </a>
  );
};

type carouselProps = {
    animals: animalCardProps[]
}


const Carousel:React.FC<carouselProps> = ({ animals }) => {
  return (
    <div className="flex overflow-x-auto gap-4 p-4 scrollbar-hide">
      {animals.map((item) => (
        <div key={item.animal.id} className="min-w-[250px] md:w-1/4">
          <AnimalCard animal={item.animal} />
        </div>
      ))}
    </div>
  );
};

export const AvailableAnimalsSection = () => {
  return (
    <section className="w-full py-16">
      <div className="container mx-auto">
        <div className="flex items-center justify-center mx-auto ">
          <PawDogRed width={35} height={35} className="mb-10 mr-4" />
          <h2 className="text-4xl text-center font-semibold text-primary100 mb-12">
            Animais Disponíveis
          </h2>
          <PawDogRed width={35} height={35} className="mb-10 ml-4" />
        </div>
        <Carousel animals={animals} />
      </div>
    </section>
  );
};
