import { FC } from "react";
import { EventCard } from "./EventCard";
import { TitleWithPaw } from "@/components/TitleWithPaw";

interface EventItem {
  id: number;
  title: string;
  description: string;
  logoSrc: string;
  logoAlt: string;
}

const events: EventItem[] = [
  {
    id: 1,
    title: "Feira de Adoção",
    description:
      "A ONG XX está promovendo uma feira de adoção especial de filhotes",
    logoSrc: "/group.png",
    logoAlt: "Grupo 1",
  },
  {
    id: 2,
    title: "Feira de Adoção",
    description:
      "A ONG XX está promovendo uma feira de adoção especial de filhotes",
    logoSrc: "/group-1.png",
    logoAlt: "Grupo 2",
  },
  {
    id: 3,
    title: "Feira de Adoção",
    description:
      "A ONG XX está promovendo uma feira de adoção especial de filhotes",
    logoSrc: "/group-2.png",
    logoAlt: "Grupo 3",
  },
  {
    id: 4,
    title: "Feira de Adoção",
    description:
      "A ONG XX está promovendo uma feira de adoção especial de filhotes",
    logoSrc: "/group-3.png",
    logoAlt: "Grupo 4",
  },
];

export const EventsSection: FC = () => {
  return (
    <section className="w-full py-16">
      <div className="text-3xl font-bold text-center mb-8">
        <TitleWithPaw title="Eventos" />
      </div>

      <div className="flex flex-wrap justify-center gap-5">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </section>
  );
};
