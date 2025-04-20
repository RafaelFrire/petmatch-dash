'use client'
/* eslint-disable @typescript-eslint/no-explicit-any */
import { MoreVertical } from "lucide-react";
import { DynamicTable } from "../../../dynamicTable";
import { EventsHeader } from "./headerTable";
import Modal from "@/components/modal";
import { useState } from "react";
import { FormRegisterEvent } from "../formRegisterEvent";

export const EventsTableSection = () => {
  const [isModalOpen, setModalOpen] = useState(false);


  const columns = [
    { id: "number", label: "#Número" },
    { id: "campaign", label: "Campanha" },
    { id: "description", label: "Descrição" },
    { id: "startDate", label: "Início" },
    { id: "endDate", label: "Término" },
    {
      id: "status",
      label: "Status",
      render: (item: any) => (
        <span
          className={`inline-flex items-center px-2 py-1 text-xs font-medium rounded-full ${
            item.status === "Ativo"
              ? "bg-green-100 text-green-700"
              : "bg-gray-200 text-gray-600"
          }`}
        >
          <span
            className={`w-2 h-2 rounded-full mr-2 ${
              item.status === "Ativo" ? "bg-green-500" : "bg-gray-500"
            }`}
          />
          {item.status}
        </span>
      ),
    },
    { id: "location", label: "Local" },
    {
      id: "actions",
      label: "",
      render: () => (
        <button className="p-2 rounded hover:bg-gray-100">
          <MoreVertical className="w-4 h-4" />
        </button>
      ),
    },
  ];

  const tableData = [
    {
      id: 1,
      number: "#555555",
      campaign: "Vacina para Todos",
      description: "Campanha de vacinação",
      startDate: "10/10/2024",
      endDate: "20/10/2024",
      status: "Ativo",
      location: "São Paulo, SP",
    },
    {
      id: 2,
      number: "#666666",
      campaign: "Adote um Amigo",
      description: "Feira de adoção",
      startDate: "15/10/2024",
      endDate: "25/10/2024",
      status: "Inativo",
      location: "Campinas, SP",
    },
  ];

  const handleRegisterEvent = () =>{
    setModalOpen(true)
  }
  return (
    <section className="p-4 w-full">
      <h2 className="text-3xl text-primary80 font-semibold mb-4">Campanhas</h2>

      <EventsHeader register={handleRegisterEvent} />
      <DynamicTable columns={columns} data={tableData} />
      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(!isModalOpen)}>
        <FormRegisterEvent />
      </Modal>
    </section>
  );
};
