/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useState } from "react";
import { DynamicTable } from "@/components/pages/dashboard/dynamicTable";
import StatCardGrid from "@/components/pages/dashboard/statCardGrid";
import { ActionsMenu } from "@/components/pages/dashboard/actionMenu";

const columns = [
  { id: "id", label: "#Número" },
  { id: "name", label: "Solicitante" },
  { id: "type", label: "Tipo" },
  { id: "date", label: "Data" },
  {
    id: "status",
    label: "Status",
    render: (item: any) => (
      <span
        className={`inline-flex items-center px-2 py-1 text-xs font-medium rounded-full ${
          item.status === true
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
  {
    id: "actions",
    label: "Ações",
    render: () => <ActionsMenu />,
  },
];

const data = [
  {
    nome: "João da Silva",
    telefone: "(11) 98765-4321",
    email: "joao@email.com",
    tipoResidencia: "Apartamento",
    estadoCivil: "Solteiro",
  },
  {
    nome: "Maria Souza",
    telefone: "(21) 91234-5678",
    email: "maria@email.com",
    tipoResidencia: "Casa",
    estadoCivil: "Casada",
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
