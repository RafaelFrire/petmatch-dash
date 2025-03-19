"use client";
import { EventFilter } from "@/components/pages/event/eventFilter";
import { ListEventCard } from "@/components/pages/event/listEventCard";
import { TitleWithPaw } from "@/components/TitleWithPaw";
import { mapEventListResponse, useGetEventList } from "@/hooks/useGetEventList";
import SpinLoader from "@/components/spinLoader";
import { useFilters } from "@/hooks/useFilter";
import { useParams } from "next/navigation";

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
  const { searchParams } = useFilters();
  const params = useParams();

  const currentPage = Number(searchParams.get("page"));
  const categorie = Array.isArray(params.categorie)
    ? params.categorie[0]
    : params.categorie;

  const { data, error, isLoading } = useGetEventList(
    currentPage,
    12,
    categorie
  );
  const events = mapEventListResponse(data);

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
        <div className="mx-auto w-[65%]">
          <ListEventCard events={events} />
        </div>
        <div className="w-[30%]">
          <EventFilter categories={filterCategories} />
        </div>
      </div>
    </div>
  );
}
