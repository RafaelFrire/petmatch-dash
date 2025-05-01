"use client";

import { EventFilter } from "@/components/pages/event/eventFilter";
import { ListEventCard } from "@/components/pages/event/listEventCard";
import { Pagination } from "@/components/pagination";
import SpinLoader from "@/components/spinLoader";
import { TitleWithPaw } from "@/components/TitleWithPaw";
import { useFilters } from "@/hooks/useFilter";
import { mapEventListResponse, useGetEventList } from "@/hooks/useGetEventList";
import { useEffect, useMemo } from "react";

type FilterCategory = {
  categorie: string;
  count: number;
};

const filterCategories: FilterCategory[] = [
  { categorie: "Feira de Adoção", count: 10 },
  { categorie: "Treinamento", count: 10 },
  { categorie: "Feira de Vacinação", count: 10 },
  { categorie: "Passeio Comunitário", count: 10 },
  { categorie: "Outros", count: 10 },
];
  
export default function EventPage() {
  const { searchParams, getFiltersFromParams } = useFilters();
  const filters = getFiltersFromParams();
  const currentPage = Number(searchParams.get("page"));

  const { data, error, isLoading, refetch } = useGetEventList(currentPage, 12);
  const events = mapEventListResponse(data);


  const eventList = useMemo(() => {
    return mapEventListResponse(data || []).map(event => ({
      ...event,
      date: event.date.toISOString(), // Convert Date to string
    }));
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
    <div>
      <TitleWithPaw title="Eventos" />
      <div className="h-8"></div>
      <div className="flex flex-wrap-reverse lg:flex-wrap max-w-[80%] mx-auto">
        <div className=" w-[100%] mx-auto md:w-[65%]">
          <ListEventCard events={eventList || []} />
          {events.length > 0 ? (
        <div className="w-full flex justify-end py-4 px-4">
          <Pagination
            totalPages={5}
            pageSize={15}
            currentPage={currentPage}
            onPageChange={() => {}}
            baseurl="event"
          />
        </div>
      ) : null}
        </div>
        <div className="h-8"></div>
        {events.length > 0 ? (
          <div className="w-[100%]  mx-auto md:w-[30%]  py-4">
            <EventFilter categories={filterCategories} />
          </div>
        ) : null}
      </div>
    </div>
  );
}
