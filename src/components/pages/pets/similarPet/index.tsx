import React, { ReactNode } from "react";

const pets = [
  { id: 1, name: "Lincoln", gender: "Macho", image: "/rectangle-17511.png", isMale: true },
  { id: 2, name: "Mauve", gender: "Fêmea", image: "/rectangle-17512.png", isMale: false },
  { id: 3, name: "Kenzie", gender: "Macho", image: "/rectangle-17513.png", isMale: true },
];

const Card = ({ children }: { children: ReactNode }) => (
  <div className="border-2 border-solid border-primary-100 rounded-[20px] bg-white overflow-hidden">
    {children}
  </div>
);

const CardHeader = ({ title }: { title: string }) => (
  <div className="p-4">
    <h2 className="font-semibold text-primary-100 text-[27px] leading-[51.1px] tracking-[0.60px]">
      {title}
    </h2>
  </div>
);

const CardContent = ({ children }: { children: ReactNode }) => (
  <div className="p-0">{children}</div>
);

const CardFooter = ({ children }: { children: ReactNode }) => <div className="flex justify-center py-6">{children}</div>;

const Separator = () => <hr className="w-full h-px bg-gray-300" />;

const PetCard = ({ pet }: { pet: any }) => (
  <div className="px-6 py-4 flex gap-4">
    <img
      className="w-[133px] h-[111px] object-cover"
      alt={pet.name}
      src={pet.image}
    />
    <div className="flex flex-col justify-center">
      <div className="font-semibold text-black text-2xl mb-[31px]">
        {pet.name}
      </div>
      <div className="flex items-center gap-[7px]">
        <img
          className="w-5 h-5"
          alt={pet.isMale ? "Male icon" : "Female icon"}
          src={pet.isMale ? "/vector.svg" : "/group.png"}
        />
        <div className="font-medium text-black text-base">{pet.gender}</div>
      </div>
    </div>
  </div>
);

const Button = ({ children }: { children: ReactNode }) => (
  <button className="rounded-[30px] border border-solid border-primary-100 h-14 px-6 text-primary-100 font-medium text-base">
    {children}
  </button>
);

export const SimilarPetsSection = () => (
  <div className="w-full max-w-[449px]">
    <Card>
      <CardHeader title="Conheça Outros Parecidos" />
      <CardContent>
        {pets.map((pet, index) => (
          <React.Fragment key={pet.id}>
            <PetCard pet={pet} />
            {index < pets.length - 1 && <Separator />}
          </React.Fragment>
        ))}
      </CardContent>
      <CardFooter>
        <Button>Veja mais</Button>
      </CardFooter>
    </Card>
  </div>
);
