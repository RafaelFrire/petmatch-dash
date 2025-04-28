"use client";
import { PetsGallerySection } from "@/components/pages/pets";
import FilterSidebar from "@/components/pages/pets/filterPets";
import { Pagination } from "@/components/pagination";
import SpinLoader from "@/components/spinLoader";
import { TitleWithPaw } from "@/components/TitleWithPaw";
import { useFilters } from "@/hooks/useFilter";
import { mapPetListResponse, useGetPetList } from "@/hooks/useGetPetsList";
import { Suspense, useEffect, useMemo } from "react";

function PetsContent() {
  const { searchParams, getFiltersFromParams } = useFilters();
  const filters = getFiltersFromParams();
  const currentPage = Number(searchParams.get("page"));

  const { data, isLoading, error, refetch } = useGetPetList(
    currentPage,
    12
  );

  const petsList = useMemo(() => {
    return mapPetListResponse(data?.pets || []);
  }, [data]);

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
    <div className="min-h-screen w-full">
      <div className="h-6"></div>
      <TitleWithPaw title="Pets" />
      <div className="h-10"></div>
      <div className="flex justify-end w-[90%] md:w-[75%] mx-auto">
        <Pagination
          totalPages={5}
          pageSize={15}
          currentPage={currentPage}
          onPageChange={() => {}}
          baseurl="pets"
        />
      </div>
      <div className="h-10"></div>
      {petsList.length == 0 ? (
        <div className="text-center text-3xl text-primary100">
          Nenhum Pet disponivel
        </div>
      ) : null}
      <div className="flex flex-wrap flex-row md:flex-nowrap md:justify-center md:gap-1 md:w-[75%] mx-auto">
        <div className="w-[95%] md:w-[25%]  mx-auto">
          <FilterSidebar />
        </div>
        <div className="w-[95%] md:w-full mx-auto">
          <PetsGallerySection petsList={petsList} />
        </div>
      </div>
    </div>
  );
}

export default function PetsPage() {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <PetsContent />
    </Suspense>
  );
}
