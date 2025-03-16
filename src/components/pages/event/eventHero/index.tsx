import Image from "next/image";
import { Calendar, Clock, MapPin, ArrowRight } from "lucide-react";
import { ReactNode } from "react";
import getImageUrl from "@/utils/getImageUrl";

export interface EventHeroProps {
  event: {
    id: string;
    ongId: string;
    slug: string;
    categorie: string;
    title: string;
    date: string;
    time: string;
    location: string;
    address: string;
    city: string;
    state: string;
    organizer: string;
    additionalInfo: string;
    description: string;
    imageUrl: string;
  };
}

// Componente de Badge
const Badge = ({ children }: { children: ReactNode }) => (
  <span className="px-3 py-1 text-sm font-medium text-white bg-primary100 rounded-full">
    {children}
  </span>
);

// Componente de Card
const Card = ({ children }: { children: ReactNode }) => (
  <div className="bg-white shadow-md rounded-lg p-6">{children}</div>
);

// Componente de Botão
const Button = ({ variant = "primary", children }: { variant?: "primary" | "outline" | "ghost"; children: ReactNode }) => {
  const baseStyles = "w-full px-4 py-2 rounded-md font-medium text-center";
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border border-gray-300 text-gray-700 hover:bg-gray-100",
    ghost: "text-gray-700 hover:bg-gray-100",
  };
  return (
    <button className={`${baseStyles} ${variants[variant]}`}>{children}</button>
  );
};


export default function EventHero({ event }: EventHeroProps) {

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="relative w-full h-80 md:h-96">
        <Image
          src={`${getImageUrl(event.imageUrl)}`} // A URL completa para a imagem
          alt={event.title}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full p-6 text-white">
          <Badge>{event.categorie}</Badge>
          <h1 className="text-3xl font-bold mt-2">{event.title}</h1>
          <p className="opacity-90">Organizado por {event.organizer}</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <Card>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InfoItem
                icon={<Calendar color="#B80000" />}
                title="Data"
                text={
                  new Date(event.date).toLocaleDateString() ||
                  "Data não informada"
                }
              />
              <InfoItem
                icon={<Clock color="#B80000" />}
                title="Horário"
                text={event.time || "Horário não informado"}
              />
              <InfoItem
                icon={<MapPin color="#B80000" />}
                title="Local"
                text={
                  event.location && event.address && event.city && event.state
                    ? `${event.location}, ${event.address}, ${event.city} - ${event.state}`
                    : "Localização não informada"
                }
              />
            </div>
          </Card>

          <Card>
            <h2 className="text-xl font-bold">Sobre o evento</h2>
            <p>{event?.description || ""}</p>
            <h3 className="text-lg font-semibold mt-4">
              Informações adicionais
            </h3>
            <p>{event?.additionalInfo || ""}</p>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <h2 className="text-xl font-bold">Localização</h2>
            <div className="relative w-full h-60 bg-gray-200 rounded-md overflow-hidden">
              <Image
                src="/assets/map.jpg"
                alt="Mapa"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-4 right-4">
                <Button variant="outline">
                  Ver no Google Maps{" "}
                  <ArrowRight className="inline-block ml-2" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

const InfoItem = ({ icon, title, text }: { icon: ReactNode; title: string; text: string }) => (
  <div className="flex items-start">
    <div className="h-6 w-6 mr-3 text-blue-600">{icon}</div>
    <div>
      <h3 className="font-medium">{title}</h3>
      <p className="text-gray-600">{text}</p>
    </div>
  </div>
);
