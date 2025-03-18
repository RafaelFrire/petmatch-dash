'use client';

import Image from 'next/image';
import React, { JSX } from 'react';

const petImages: petCardProps[] = [
  { image: '/assets/Rectangle-17480.png', slug: 'pet-1' },
  { image: '/assets/Rectangle-17480.png', slug: 'pet-2' },
  { image: '/assets/Rectangle-17480.png', slug: 'pet-3' },
  { image: '/assets/Rectangle-17480.png', slug: 'pet-4' },
  { image: '/assets/Rectangle-17480.png', slug: 'pet-5' },
  { image: '/assets/Rectangle-17480.png', slug: 'pet-6' },
];

type petCardProps = {
  image: string;
  slug: string;
}

const PetCard: React.FC<petCardProps> = ({ image, slug }) => {
  return (
    <div className="w-[90%] h-36 md:w-[300px] md:h-[326px] mx-auto overflow-hidden border rounded-md relative">
      <Image
        src={image}
        alt="Pet"
        layout="fill"
        objectFit="cover"
        className="rounded-md"
      />
      <div className="absolute bottom-5 right-5">
        <a href={`/pets/${slug}/filtros`}>
          <button className="h-[37px] w-[120px] rounded-full bg-primary100 hover:bg-primary40 text-white font-medium">
            Veja mais
          </button>
        </a>
      </div>
    </div>
  );
};

export const PetsGallerySection = (): JSX.Element => {
  return (
    <section className="w-full max-w-[941px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[68px] w-full mx-auto">
        {petImages.map((item, index) => (
          <PetCard key={index} image={item.image} slug={item.slug} />
        ))}
      </div>
    </section>
  );
};
