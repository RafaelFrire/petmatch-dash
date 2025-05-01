"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { MoreVertical } from "lucide-react";
import { DynamicTable } from "../../../dynamicTable";
import { TableHeader } from "../../../headerTable";
import Modal from "@/components/modal";
import { useEffect, useMemo, useState } from "react";
// import { FormRegisterEvent } from "../formRegisterEvent";
import { DeleteModal } from "@/components/deleteModal";
import useDeleteData from "@/hooks/useDeleteData";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { Pagination } from "@/components/pagination";
import { useFilters } from "@/hooks/useFilter";
import useDebounce from "@/hooks/useDebounce";
import SpinLoader from "@/components/spinLoader";
import { mapPetByOngResponse, useGetPetByOngId } from "@/hooks/useGetPetsByOngId";
import { Pet } from "@/interfaces/pet";

const columns = [
  { id: "id", label: "#Número" },
  { id: "name", label: "Nome" },
  { id: "species", label: "Espécie" },
  { id: "breed", label: "Raça" },
  { id: "size", label: "Tamanho" },
  { id: "health", label: "Saúde" },
  { id: "color", label: "Cor" },
  { id: "slug", label: "slug" },
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
    label: "",
    render: () => (
      <button className="p-2 rounded hover:bg-gray-100">
        <MoreVertical className="w-4 h-4" />
      </button>
    ),
  },
];
export const AnimalsTableSection = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [openDeleteModal, setDeleteModal] = useState(false);
  const { deleteData } = useDeleteData("events");
  const [selected, setSelected] = useState<string[]>([]);
  const [selectedEventEdit, setSelectedEventEdit] = useState<string>("");
  const { searchParams } = useFilters();
  const currentPage = Number(searchParams.get("page"));

  const { data, error, isLoading } = useGetPetByOngId(
    "0086a4c4-1a0c-40ec-8970-8d4c99f91b38",
    currentPage,
    12
  );
  const [filtersData, setFiltersData] = useState<Pet[]>([]);
  const [originalEvents, setOriginalEvents] = useState<Pet[]>([]);
  const [searchText, setSearchText] = useState("");

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

  const AnimalsMap = useMemo(() => {
    const mappedPets = mapPetByOngResponse(data || []);
    const pets: Pet[] = [];
    mappedPets.pets.forEach((item: any) => {
      pets.push({
        id: item?.pet?.id,
        name: item?.pet?.name,
        species: item?.pet?.species,
        breed: item?.pet?.breed,
        color: item?.pet?.size,
        size: item?.pet?.size,
        health: item?.pet?.health,
        temperament: item?.pet?.temperament,
        history: item?.pet?.history,
        ongId: item?.pet?.ongId,
        slug: item?.pet?.slug,
        status: item?.pet?.status, // Added the missing 'status' property
        birthdate: new Date(item.pet.birthdate),
      });
    });

    return pets;
  }, [data]);


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
  useEffect(() => {
    if (debouncedSearchText.length === 0) {
      setFiltersData(originalEvents);
      return;
    }

    const lowerSearch = debouncedSearchText.toLowerCase();

    const filteredEvents = AnimalsMap.filter((event) => {
      return (
        event.name?.toLowerCase().includes(lowerSearch) ||
        event.id?.toLowerCase().includes(lowerSearch) ||
        event.breed?.toLowerCase().includes(lowerSearch) ||
        event.size?.toLowerCase().includes(lowerSearch) ||
        event.health?.toLowerCase().includes(lowerSearch) ||
        event.species?.toLowerCase().includes(lowerSearch) ||
        String(event.id).includes(lowerSearch) // id é número -> converte pra string
      );
    });

    if (filteredEvents.length === 0) {
      toast.error("Nenhum evento encontrado");
    }

    setFiltersData(
      filteredEvents.map((event) => ({
        ...event,
        date: new Date(event.date), // Convert date string back to Date object
      }))
    );
  }, [debouncedSearchText]);

//   useEffect(() => {
//     if (data) {
//       const mappedEvents = mapPetByOngResponse(data);
//       setOriginalEvents(mappedEvents);
//       setFiltersData(mappedEvents);
//     }
//   }, [data]);


  if (isLoading) {
    return (
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <SpinLoader />
      </div>
    );
  }

  if (error) {
    return <div>Error loading event</div>;
  }
  return (
    <section className="p-4 w-full">
      <h2 className="text-3xl text-primary80 font-semibold mb-4">Animais</h2>

      <TableHeader
        register={handleRegisterEvent}
        handleDelete={handleDeleteEvent}
        handleEdit={editEvent}
        isEdit={selected.length === 1 ? true : false}
        handleSerachEvent={handleSearchInputChange}
      />

      <DynamicTable
        columns={columns}
        data={filtersData.length > 0 ? filtersData : AnimalsMap}
        setSelected={setSelected}
        selected={selected}
      />
      <Modal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(!isModalOpen)}
        title={selected.length === 1 ? "Editar Animal" : "Cadastrar Animal"}
      >
        {/* <FormRegisterEvent
          handleCloseModal={() => setModalOpen(false)}
          eventToEdit={eventData}
        /> */}
        <div> cadastro</div>
      </Modal>
      <DeleteModal
        isOpenModal={openDeleteModal}
        setOpenModal={setDeleteModal}
        onDelete={onDelete}
      />

      <div className="flex justify-end py-4">
        <Pagination
          baseurl={"dashboard/animals"}
          totalPages={2}
          pageSize={0}
          currentPage={currentPage}
          onPageChange={() => {}}
        />
      </div>
    </section>
  );
};
