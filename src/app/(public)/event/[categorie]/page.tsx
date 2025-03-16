"use client";
import { EventFilter } from "@/components/pages/event/eventFilter";
import { ListEventCard } from "@/components/pages/event/listEventCard";
import { TitleWithPaw } from "@/components/TitleWithPaw";
import { filterCategories } from "../page";
import { Event } from "@/interfaces/event";
import { mapEventListResponse, useGetEventList } from "@/hooks/useGetEventList";
import SpinLoader from "@/components/spinLoader";
import { useFilters } from "@/hooks/useFilter";
import { useParams } from "next/navigation";

export const eventsMock: Event[] = [
  {
    id: "123e4567-e89b-12d3-a456-426614174001",
    title: "Feira de Adoção de Pets",
    description:
      "Evento para adoção de cães e gatos resgatados por ONGs parceiras.",
    imageUrl: "",
    slug: "feira-de-adocao-de-pets",
    categorie: "Adoção",
    date: new Date("2025-04-15T10:00:00Z"),
    createdAt: new Date("2025-03-10T12:00:00Z"),
    updatedAt: new Date("2025-03-10T12:30:00Z"),
    ongId: "987e6543-e21b-45c6-b321-123456789abc",
  },
  {
    id: "223e4567-e89b-12d3-a456-426614174002",
    title: "Mutirão de Castração",
    description:
      "Campanha de castração gratuita para cães e gatos de famílias de baixa renda.",
    imageUrl: "",
    slug: "mutirao-de-castracao",
    categorie: "Saúde Animal",
    date: new Date("2025-05-10T09:00:00Z"),
    createdAt: new Date("2025-03-12T14:00:00Z"),
    updatedAt: new Date("2025-03-12T14:30:00Z"),
    ongId: "567e6543-e21b-45c6-b321-abcdef987654",
  },
  {
    id: "323e4567-e89b-12d3-a456-426614174003",
    title: "Palestra sobre Posse Responsável",
    description:
      "Evento educativo sobre os cuidados necessários para adotar um pet.",
    imageUrl: "",
    slug: "palestra-posse-responsavel",
    categorie: "Educação",
    date: new Date("2025-06-20T18:30:00Z"),
    createdAt: new Date("2025-03-15T16:00:00Z"),
    updatedAt: new Date("2025-03-15T16:30:00Z"),
    ongId: "789e6543-e21b-45c6-b321-fedcba654321",
  },
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

  console.log(events);

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
