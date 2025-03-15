

"use client";
import { Pagination } from "@/components/pagination";
import React from "react";
import { eventCardProps, EventCard } from "../eventCard";

export type ListArticleCardProps = {
  events: eventCardProps[];
};

export const ListEventCard: React.FC<ListArticleCardProps> = ({
  events,
}) => {
  const [currentPage, setCurrentPage] = React.useState(1);

  return (
    <div className="mx-auto">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2 mx-auto">
        {events.length > 0 ? (
          events.map((event, index) => (
            <EventCard key={index} {...event} />
          ))
        ) : (
          <div className="col-span-3 py-3 text-center">
            <h1 className="text-2xl text-primary100">
              Nenhum Evento encontrado..
            </h1>
          </div>
        )}
      </div>
      <div className="w-full flex justify-end py-4 px-4">
        <Pagination
          totalPages={5}
          pageSize={15}
          currentPage={currentPage}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
    </div>
  );
};
