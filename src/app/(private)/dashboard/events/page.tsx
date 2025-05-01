'use client'
import { EventsTableSection } from "@/components/pages/dashboard/pages/events/eventsTableSection";

export default function eventsPage(){
    return (
      <div className="w-[90%] mx-auto">
        <div className="h-8"></div>
        <EventsTableSection />
      </div>
    );
}