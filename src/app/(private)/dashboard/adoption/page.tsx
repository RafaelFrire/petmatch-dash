/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useState } from "react";
import { DynamicTable } from "@/components/pages/dashboard/dynamicTable";
import StatCardGrid from "@/components/pages/dashboard/statCardGrid";
import { ActionsMenu } from "@/components/pages/dashboard/actionMenu";
import HeaderInputSearch from "@/components/pages/dashboard/pages/adoption/headerInputSearch";

type Status = "PENDING" | "APPROVED" | "REJECTED";

const columns = [
  { id: "id", label: "#Número" },
  { id: "name", label: "Solicitante" },
  { id: "type", label: "Tipo" },
  { id: "phone", label: "Telefone" },
  { id: "email", label: "Email" },
  { id: "data", label: "Data" },
  {
    id: "status",
    label: "Status",
    render: (item: { status: Status }) => {
      const statusColors: Record<
        Status,
        { bg: string; dot: string; label: string }
      > = {
        PENDING: {
          bg: "bg-yellow-100 text-yellow-700",
          dot: "bg-yellow-500",
          label: "Pendente",
        },
        APPROVED: {
          bg: "bg-green-100 text-green-700",
          dot: "bg-green-500",
          label: "Aprovado",
        },
        REJECTED: {
          bg: "bg-red-100 text-red-700",
          dot: "bg-red-500",
          label: "Rejeitado",
        },
      };

      const currentStatus = statusColors[item.status] || {
        bg: "bg-gray-200 text-gray-600",
        dot: "bg-gray-500",
        label: item.status,
      };

      return (
        <span
          className={`inline-flex items-center px-2 py-1 text-xs font-medium rounded-full ${currentStatus.bg}`}
        >
          <span className={`w-2 h-2 rounded-full mr-2 ${currentStatus.dot}`} />
          {currentStatus.label}
        </span>
      );
    },
  },
  {
    id: "actions",
    label: "Ações",
    render: () => <ActionsMenu />,
  },
];

const data = [
  {
    id: "1234",
    name: "João da Silva",
    phone: "(11) 98765-4321",
    type: "Cachorro",
    email: "joao@email.com",
    tipoResidencia: "Apartamento",
    data: "10/05/2025",
    status: "PENDING" as Status,
  },
  {
    id: "1235",
    name: "Maria Souza",
    phone: "(21) 91234-5678",
    type: "Cachorro",
    email: "maria@email.com",
    tipoResidencia: "Casa",
    data: "10/05/2025",
    status: "APPROVED" as Status,
  },
  {
    id: "1236",
    name: "Maria Souza",
    phone: "(21) 91234-5678",
    type: "Cachorro",
    email: "maria@email.com",
    tipoResidencia: "Casa",
    data: "10/05/2025",
    status: "REJECTED" as Status,
  },
];

export default function AdoptionRequestPage() {
  const [selected, setSelected] = useState<string[]>([]);

  return (
    <div className="w-full h-full">
      <div className="h-14"></div>
      <div className="w-[98%] mx-auto">
        <h2 className="text-3xl text-primary80 font-semibold mb-4">
          Pedidos de Adoção
        </h2>
        <div className="">
          <StatCardGrid requests={data} />
          <HeaderInputSearch />
          <div className="h-8"></div>
        </div>
        <DynamicTable
          columns={columns}
          data={data}
          setSelected={setSelected}
          selected={selected}
        />
        
      </div>
    </div>
  );
}
