'use client';

import Image from 'next/image';
import React, { JSX } from 'react';

const petImages = [
  '/assets/Rectangle-17480.png',
  '/assets/Rectangle-17480.png',
  '/assets/Rectangle-17480.png',
  '/assets/Rectangle-17480.png',
  '/assets/Rectangle-17480.png',
  '/assets/Rectangle-17480.png',
];

const PetCard = ({ image }: { image: string }) => {
  return (
    <div className="w-[90%] h-36 md:w-[300px] md:h-[326px] mx-auto overflow-hidden border rounded-md relative">
      <Image src={image} alt="Pet" layout="fill" objectFit="cover" className="rounded-md" />
      <div className="absolute bottom-5 right-5">
        <button className="h-[37px] w-[120px] rounded-full bg-primary100 hover:bg-primary40 text-white font-medium">
          Veja mais
        </button>
      </div>
    </div>
  );
};

export const PetsGallerySection = (): JSX.Element => {
  return (
    <section className="w-full max-w-[941px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[68px] w-full mx-auto">
        {petImages.map((image, index) => (
          <PetCard key={index} image={image} />
        ))}
      </div>
    </section>
  );
};
