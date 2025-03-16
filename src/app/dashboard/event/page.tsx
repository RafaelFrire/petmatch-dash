"use client";

import { EventFilter } from "@/components/dashboard/event/eventFilter";
import { ListEventCard } from "@/components/dashboard/event/listEventCard";
import SpinLoader from "@/components/spinLoader";
import { TitleWithPaw } from "@/components/TitleWithPaw";
import { mapEventListResponse, useGetEventList } from "@/hooks/useGetEventList";


export const filterCategories = [
  { categorie: "Feira de Adoção", count: 10 },
  { categorie: "Treinamento", count: 10 },
  { categorie: "Feira de Vacinação", count: 10 },
  { categorie: "Passeio Comunitário", count: 10 },
  { categorie: "Outros", count: 10 },
];

export default function EventPage() {
  const { data, error, isLoading } = useGetEventList(1, 12);
  const events = mapEventListResponse(data);

  console.log("events", events);
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
          <ListEventCard events={events || []} />
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
