import EventHero from "@/components/dashboard/event/eventHero";
import { TitleWithPaw } from "@/components/TitleWithPaw";

const mockEvent = {
  title: "Feira de Adoção de Pets",
  type: "Adoção",
  date: "23 de Março de 2025",
  time: "10:00 - 16:00",
  location: "Parque Central",
  address: "Av. das Flores, 123",
  city: "São Paulo",
  state: "SP",
  organizer: "ONG Amigos dos Animais",
  description:
    "Venha participar da nossa feira de adoção e encontre um novo amigo de quatro patas!",
  additionalInfo:
    "Leve um documento de identificação e comprovante de residência para a adoção.",
  bannerImage:
    "https://empreendedor.com.br/wp-content/uploads/2015/09/pet-walking-1-768x578.jpg",
};

// Exemplo de uso:
// <EventPage event={mockEvent} />


export default function EventPage(){
  return (
    <div>
      <TitleWithPaw title="Evento" />
      <div className="w-[100%] md:w-[75%] mx-auto">
        <EventHero event={mockEvent} />
      </div>
    </div>
  );
}