

"use client";
import { Pagination } from "@/components/pagination";
import React from "react";
import { eventCardProps, EventCard } from "../eventCard";

export type ListArticleCardProps = {
  articles: eventCardProps[];
};

export const ListEventCard: React.FC<ListArticleCardProps> = ({
  articles,
}) => {
  const [currentPage, setCurrentPage] = React.useState(1);

  return (
    <div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2">
        {articles.length > 0 ? (
          articles.map((article, index) => (
            <EventCard key={index} {...article} />
          ))
        ) : (
            <div className="col-span-3 py-3 text-center">
            <h1 className="text-2xl text-primary100">Nenhum Evento encontrado..</h1>
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
