'use client';
import SpinLoader from '@/components/spinLoader';
import { useFilters } from '@/hooks/useFilter';
import { mapPetListResponse, useGetPetList } from '@/hooks/useGetPetsList';
import getImageUrl from '@/utils/getImageUrl';
import Image from 'next/image';
import React, { JSX, useEffect, useMemo } from 'react';

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

export const PetsGallerySection = (): JSX.Element => {
  const { searchParams, getFiltersFromParams } = useFilters();
  const filters = getFiltersFromParams();
  const currentPage = Number(searchParams.get("page"));

  
  const queryString = new URLSearchParams(filters).toString();


  const {data, isLoading, error, refetch} = useGetPetList(currentPage, 12, queryString);

  const petsList = useMemo(() => {
    return mapPetListResponse(data?.pets || []);
  }, [data]);

console.log(petsList);

  useEffect(() => {
    refetch(); // Refaz a requisição toda vez que filters mudar
  }, [filters, refetch]);

  if (isLoading) {
    return (
      <div className="py-10">
        <SpinLoader />
      </div>
    );
  }

  if (error) {
    return <div>Error loading article</div>;
  }


  return (
    <section className="w-full max-w-[941px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[68px] w-full mx-auto">
        {petsList.map((item, index) => (
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


