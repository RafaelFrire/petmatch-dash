import { toast } from "react-toastify";
import { Event } from "@/interfaces/event";
// import api from "@/utils/api";
import { apiRequest } from "./useApi";

async function postEvent(ongId: string, data: Partial<Event>, files: File[]) {
  try {
    const formData = new FormData();

    const formatSlug = `${data.title}-${data.date}`;
    formatSlug.replace(" ", "-").trim();

    formData.append("ongId", ongId);
    formData.append("slug", formatSlug);
    formData.append("files", files[0]);

    Object.keys(data).forEach((key) => {
      formData.append(key, (data as never)[key]);
    });

    // const res = await api.post<Response>("/events/create", formData, {
    //   headers: { "Content-Type": "multipart/form-data" },
    // });

    const res = await apiRequest("/events/create", {
      method: "POST",
      body: formData,
    });

    if (res.status === 201) {
      toast.success("Evento criado com sucesso!");
    } else {
      toast.error(`Erro inesperado: ${res.status}`);
      throw new Error(`Erro inesperado: ${res.status}`);
    }

    // const responseData = await res.json();
    // return responseData;
  } catch (err) {
    toast.error("Houve um problema na requisição.");
    console.error(err);
    return null;
  }
}

export default postEvent