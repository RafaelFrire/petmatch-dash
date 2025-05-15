/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useEffect, useState } from "react";
import { DynamicTable } from "@/components/pages/dashboard/dynamicTable";
import StatCardGrid from "@/components/pages/dashboard/statCardGrid";
import { ActionsMenu } from "@/components/pages/dashboard/actionMenu";
import HeaderInputSearch from "@/components/pages/dashboard/pages/adoption/headerInputSearch";
import {
  mapAdoptionByOngIdResponse,
  useGetAdoptonRequestByOngId,
} from "@/hooks/useGetAdoptionRequestsByOngId";
import { useSession } from "next-auth/react";
import SpinLoader from "@/components/spinLoader";
import { DeleteModal } from "@/components/deleteModal";
import { Adoption } from "@/interfaces/adoption";
import useDebounce from "@/hooks/useDebounce";
import { toast } from "react-toastify";
import { Pagination } from "@/components/pagination";
import { useFilters } from "@/hooks/useFilter";

type Status = "PENDING" | "APPROVED" | "REJECTED";

export default function AdoptionRequestPage() {
  const { searchParams } = useFilters();
  const { data: session } = useSession();
  const userId = session?.user?.id;
  const [selected, setSelected] = useState<string[]>([]);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [originalData, setOriginalData] = useState<Adoption[]>([]);
  const [filterData, setFilterData] = useState<Adoption[]>([]);

  const currentPage = Number(searchParams.get("page"));

  const [searchText, setSearchText] = useState("");
  const debouncedSearchText = useDebounce(searchText, 500);

  const { data, isError, isLoading } = useGetAdoptonRequestByOngId(
    userId!,
    currentPage,
    10
  );

  const columns = [
    { id: "id", label: "#Número" },
    { id: "name", label: "Solicitante" },
    { id: "species", label: "Tipo", render: (item: any) => item.pet.species },
    {
      id: "phone",
      label: "Telefone",
      render: (item: any) => item.phone || "Não informado",
    },
    { id: "email", label: "Email" },
    {
      id: "createdAt",
      label: "Data",
      render: (item: any) => {
        const date = new Date(item.createdAt);
        return (
          <span>
            {date.toLocaleDateString("pt-BR", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
            })}
          </span>
        );
      },
    },
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
            <span
              className={`w-2 h-2 rounded-full mr-2 ${currentStatus.dot}`}
            />
            {currentStatus.label}
          </span>
        );
      },
    },
    {
      id: "actions",
      label: "Ações",
      render: (item: any) => (
        <ActionsMenu
          onDelete={() => handleDelete(item.id)}
          onApprove={() => handleApprove(item.id)}
          onReject={() => handleReject(item.id)}
        />
      ),
    },
  ];

  useEffect(() => {
    if (debouncedSearchText.length === 0) {
      setFilterData(originalData);
      return;
    }

    const lowerSearch = debouncedSearchText.toLowerCase();

    const filteredRequests = originalData.filter((data) => {
      return (
        data.name?.toLowerCase().trim().includes(lowerSearch) ||
        data.id?.toLowerCase().trim().includes(lowerSearch) ||
        data.pet.species?.toLowerCase().trim().includes(lowerSearch) ||
        data.status?.toLowerCase().trim().includes(lowerSearch) ||
        data.email?.toLowerCase().trim().includes(lowerSearch) ||
        data.phone?.toLowerCase().trim().includes(lowerSearch)
      );
    });

    if (filteredRequests.length === 0) {
      toast.error("Nenhum evento encontrado");
    }

    setFilterData(
      filteredRequests.map((data) => ({
        ...data,
        date: new Date(data.createdAt), // Convert date string back to Date object
      }))
    );
  }, [debouncedSearchText]);

  useEffect(() => {
    if (data) {
      const { adoptions } = mapAdoptionByOngIdResponse(data);
      setOriginalData(adoptions);
      setFilterData(adoptions);
    }
  }, [data]);

  const handleDelete = (id: string) => {
    console.log("delete", id);
    setOpenDeleteModal(true);
  };

  function handleSearchInputChange(text: string) {
    setSearchText(text);
  }

  const handleApprove = (id: string) => {
    console.log("Aprovar", id);
  };
  const handleReject = (id: string) => {
    console.log("Rejeitar", id);
  };

  if (isLoading) {
    return (
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <SpinLoader />
      </div>
    );
  }

  if (isError) {
    return <div>Error loading requests</div>;
  }
  return (
    <div className="w-full h-full">
      <div className="h-14"></div>
      <div className="w-[98%] mx-auto">
        <h2 className="text-3xl text-primary80 font-semibold mb-4">
          Pedidos de Adoção
        </h2>
        <div className="">
          <StatCardGrid requests={filterData} />
          <HeaderInputSearch handleSerachEvent={handleSearchInputChange} />
          <div className="h-8"></div>
        </div>
        <DynamicTable
          columns={columns}
          data={filterData}
          setSelected={setSelected}
          selected={selected}
          selectDisabled={true}
        />
      </div>
      <DeleteModal
        setOpenModal={setOpenDeleteModal}
        isOpenModal={openDeleteModal}
        onDelete={() => {}}
      />

      <div className="h-6"></div>
      <Pagination
        totalPages={2}
        pageSize={10}
        currentPage={1}
        onPageChange={() => {}}
        baseurl="dashboard/adoption"
      />
      <div className="h-6"></div>

    </div>
  );
}
