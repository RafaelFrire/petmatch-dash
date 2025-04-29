"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { MoreVertical } from "lucide-react";
import { DynamicTable } from "../../../dynamicTable";
import { EventsHeader } from "./headerTable";
import Modal from "@/components/modal";
import { useEffect, useState } from "react";
import { FormRegisterEvent } from "../formRegisterEvent";
import { mapEventListResponse, useGetEventList } from "@/hooks/useGetEventList";
import { DeleteModal } from "@/components/deleteModal";
import useDeleteData from "@/hooks/useDeleteData";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { Pagination } from "@/components/pagination";
import { mapEventResponse, useGetEventById } from "@/hooks/useGetEventById";
import { useFilters } from "@/hooks/useFilter";
import { Event } from "@/interfaces/event";
import useDebounce from "@/hooks/useDebounce";


const columns = [
  { id: "id", label: "#Número" },
  { id: "title", label: "Campanha" },
  { id: "categorie", label: "Categoria" },
  { id: "city", label: "Cidade" },
  { id: "state", label: "Estado" },
  { id: "time", label: "Horário" },
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
export const EventsTableSection = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [openDeleteModal, setDeleteModal] = useState(false);
  const { deleteData } = useDeleteData("events");
  const [selected, setSelected] = useState<string[]>([]);
  const [selectedEventEdit, setSelectedEventEdit] = useState<string>("");
  const { data:event } = useGetEventById(selectedEventEdit);
  const { searchParams, getFiltersFromParams } = useFilters();
  const filters = getFiltersFromParams();
  const currentPage = Number(searchParams.get("page"));
  const { data, error, isLoading, refetch } = useGetEventList(currentPage, 12);

  const [filtersData, setFiltersData] = useState<Event[]>([]);
  const [searchText, setSearchText] = useState('');
  const debouncedSearchText = useDebounce(searchText, 500);
  
  const mutation = useMutation({
    mutationFn: (id: string) => deleteData(id),
    onSuccess: () => {
      if (!mutation.isSuccess) {
        toast.success("Evento deletado com sucesso!");
      }
    },
    onError: () => toast.error("Houve um problema."),
  });

  const originalEvents = mapEventListResponse(data);
  const eventMap = mapEventListResponse(data);
  const eventData = mapEventResponse(event);

 
  const handleRegisterEvent = () => {
    setModalOpen(true);
  };

  const handleDeleteEvent = () => {
    setDeleteModal(true);
  };

  function onDelete() {
    if (selected.length === 1) {
      mutation.mutate(selected[0]);
    }
  }

  function editEvent() {
    if (selected.length === 1) {
      setSelectedEventEdit(selected[0]);
      setModalOpen(true);
    }
  }


  function handleSearchInputChange(text: string) {
    setSearchText(text); // apenas atualiza o texto digitado
  }
  if (error || isLoading) {
  }

  
  useEffect(() => {
    if (debouncedSearchText.length === 0) {
      setFiltersData(originalEvents);
      return;
    }
    console.log("filtro", debouncedSearchText);

    const lowerSearch = debouncedSearchText.toLowerCase();

    const filteredEvents = eventMap.filter((event) => {
      return (
        event.title?.toLowerCase().includes(lowerSearch) ||
        event.categorie?.toLowerCase().includes(lowerSearch) ||
        event.city?.toLowerCase().includes(lowerSearch) ||
        event.state?.toLowerCase().includes(lowerSearch) ||
        String(event.id).includes(lowerSearch) // id é número -> converte pra string
      );
    });

    setFiltersData(filteredEvents);
  }, [debouncedSearchText]);

  useEffect(() => {
    refetch();
  }, [filters, refetch]);

  return (
    <section className="p-4 w-full">
      <h2 className="text-3xl text-primary80 font-semibold mb-4">Campanhas</h2>

      <EventsHeader
        register={handleRegisterEvent}
        handleDelete={handleDeleteEvent}
        handleEdit={editEvent}
        isEdit={selected.length === 1 ? true : false}
        handleSerachEvent={handleSearchInputChange}
      />

      <DynamicTable
        columns={columns}
        data={filtersData.length > 0 ? filtersData : eventMap}
        setSelected={setSelected}
        selected={selected}
      />
      <Modal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(!isModalOpen)}
        title={selected.length === 1 ? "Editar evento" : "Cadastrar evento"}
      >
        <FormRegisterEvent
          handleCloseModal={() => setModalOpen(false)}
          eventToEdit={eventData}
        />
      </Modal>
      <DeleteModal
        isOpenModal={openDeleteModal}
        setOpenModal={setDeleteModal}
        onDelete={onDelete}
      />

      <div className="flex justify-end py-4">
        <Pagination
          baseurl={"dashboard/events"}
          totalPages={2}
          pageSize={0}
          currentPage={currentPage}
          onPageChange={() => {}}
        />
      </div>
    </section>
  );
};

