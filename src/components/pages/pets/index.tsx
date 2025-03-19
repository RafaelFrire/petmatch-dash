'use client';
import { PetsResponse } from '@/hooks/useGetPetsList';
import getImageUrl from '@/utils/getImageUrl';
import Image from 'next/image';
import React, { JSX } from "react";

type petCardProps = {
  image: string;
  slug: string;
}

const PetCard: React.FC<petCardProps> = ({ image, slug }) => {
  return (
    <div className="w-[90%] h-36 md:w-[300px] md:h-[326px] mx-auto overflow-hidden border rounded-md relative">
      <Image
        src={getImageUrl(image)}
        alt="Pet"
        layout="fill"
        objectFit="cover"
        className="rounded-md"
      />
      <div className="absolute bottom-5 right-5">
        <a href={`/pets/${slug}`}>
          <button className="h-[37px] w-[120px] rounded-full bg-primary100 hover:bg-primary40 text-white font-medium">
            Veja mais
          </button>
        </a>
      </div>
    </div>
  );
};

interface PetsGallerySectionProps {
  petsList: PetsResponse[];
}

export const PetsGallerySection:React.FC<PetsGallerySectionProps> = ({petsList}): JSX.Element => {
  return (
    <section className="w-full max-w-[941px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[68px] w-full mx-auto">
        {petsList.map((item: PetsResponse, index: number) => (
          <PetCard
            key={index}
            image={item.images[0].url || ""}
            slug={item.pet.slug}
          />
        ))}
      </div>
    </section>
  );
};


