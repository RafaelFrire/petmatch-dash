'use client'
import EventHero from "@/components/dashboard/event/eventHero";
import SpinLoader from "@/components/spinLoader";
import { TitleWithPaw } from "@/components/TitleWithPaw";
import { mapEventResponse, useGetEventBySlug } from "@/hooks/useGetEventBySlug";
import { useParams } from "next/navigation";

// const mockEvent = {
//   title: "Feira de Adoção de Pets",
//   type: "Adoção",
//   date: "23 de Março de 2025",
//   time: "10:00 - 16:00",
//   location: "Parque Central",
//   address: "Av. das Flores, 123",
//   city: "São Paulo",
//   state: "SP",
//   organizer: "ONG Amigos dos Animais",
//   description:
//     "Venha participar da nossa feira de adoção e encontre um novo amigo de quatro patas!",
//   additionalInfo:
//     "Leve um documento de identificação e comprovante de residência para a adoção.",
//   bannerImage:
//     "https://empreendedor.com.br/wp-content/uploads/2015/09/pet-walking-1-768x578.jpg",
// };

// Exemplo de uso:
// <EventPage event={mockEvent} />


export default function EventPage(){
    const params = useParams();
    const slug = params?.slug as string;

    const { data, error, isLoading } = useGetEventBySlug(slug);

    const event = mapEventResponse(data);

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
      <TitleWithPaw title="Evento" />
      <div className="w-[100%] md:w-[75%] mx-auto">
        {event?.event && <EventHero event={event.event} />}
      </div>
    </div>
  );
}