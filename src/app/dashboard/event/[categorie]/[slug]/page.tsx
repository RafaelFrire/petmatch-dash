'use client'
import EventHero from "@/components/dashboard/event/eventHero";
import SpinLoader from "@/components/spinLoader";
import { TitleWithPaw } from "@/components/TitleWithPaw";
import { mapEventResponse, useGetEventBySlug } from "@/hooks/useGetEventBySlug";
import { useParams } from "next/navigation";

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