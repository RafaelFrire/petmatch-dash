"use client";
import { EventFilter } from "@/components/dashboard/event/eventFilter";
import { ListEventCard } from "@/components/dashboard/event/listEventCard";
import SpinLoader from "@/components/spinLoader";
import { TitleWithPaw } from "@/components/TitleWithPaw";
import { mapEventListResponse, useGetEventList } from "@/hooks/useGetEventList";
import { Event } from "@/interfaces/event";

// const filterOptions = [
//   { path: "informacoes", categorie: "Informações" },
//   { path: "passeio", categorie: "Passeio" },
//   { path: "vacinacao", categorie: "Vacinação" },
//   { path: "treinamento", categorie: "Treinamento" },
//   { path: "encontro", categorie: "Encontro" },
//   { path: "saude", categorie: "Saúde" },
// ];

export const eventsMock: Event[] = [
  {
    id: "123e4567-e89b-12d3-a456-426614174001",
    title: "Feira de Adoção de Pets",
    description:
      "Evento para adoção de cães e gatos resgatados por ONGs parceiras.",
    imageUrl: "https://empreendedor.com.br/wp-content/uploads/2015/09/pet-walking-1-768x578.jpg",
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
    imageUrl: "https://empreendedor.com.br/wp-content/uploads/2015/09/pet-walking-1-768x578.jpg",
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
    imageUrl: "https://empreendedor.com.br/wp-content/uploads/2015/09/pet-walking-1-768x578.jpg",
    slug: "palestra-posse-responsavel",
    categorie: "Educação",
    date: new Date("2025-06-20T18:30:00Z"),
    createdAt: new Date("2025-03-15T16:00:00Z"),
    updatedAt: new Date("2025-03-15T16:30:00Z"),
    ongId: "789e6543-e21b-45c6-b321-fedcba654321",
  },
];

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
        <div className="mx-auto w-[65%]">
          <ListEventCard events={events || []} />
        </div>
        <div className="w-[30%]">
          <EventFilter categories={filterCategories} />
        </div>
      </div>
    </div>
  );
}
