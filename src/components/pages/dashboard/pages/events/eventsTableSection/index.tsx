'use client'
/* eslint-disable @typescript-eslint/no-explicit-any */
import { MoreVertical } from "lucide-react";
import { DynamicTable } from "../../../dynamicTable";
import { EventsHeader } from "./headerTable";
import Modal from "@/components/modal";
import { useState } from "react";
import { FormRegisterEvent } from "../formRegisterEvent";
import { mapEventListResponse, useGetEventList } from "@/hooks/useGetEventList";
import { DeleteModal } from "@/components/deleteModal";
import useDeleteData from "@/hooks/useDeleteData";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

export const EventsTableSection = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [openDeleteModal, setDeleteModal] = useState(false);
  const { data, error, isLoading } = useGetEventList(1, 12);
  const { deleteData } = useDeleteData("/events");

  const mutation = useMutation({
    mutationFn: (id: string) => deleteData(id),
    onSuccess: () => toast.success("Evento deletado com sucesso!"),
    onError: ()=> toast.error("Houve um problema.")
  })



  const eventMap = mapEventListResponse(data)

  const columns = [
    { id: "number", label: "#Número" },
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

  const handleRegisterEvent = () =>{
    setModalOpen(true)
  }

  const handleDeleteEvent = () =>{
    setDeleteModal(true)
    mutation.mutate("1")
  }

  if (error || isLoading) {
  }


  return (
    <section className="p-4 w-full">
      <h2 className="text-3xl text-primary80 font-semibold mb-4">Campanhas</h2>

      <EventsHeader
        register={handleRegisterEvent}
        handleDelete={handleDeleteEvent}
      />
      <DynamicTable columns={columns} data={eventMap} />
      <Modal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(!isModalOpen)}
        title="Cadastrar evento"
      >
        <FormRegisterEvent handleCloseModal={() => setModalOpen(false)} />
      </Modal>
       <DeleteModal
       isOpenModal={openDeleteModal}
       setOpenModal={setDeleteModal}
       />
    </section>
  );
};
