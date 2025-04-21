import { toast } from "react-toastify";
import { apiRequest } from "./useApi";
import { Event } from "@/interfaces/event";

async function postEvent(
    data:Partial<Event>
) {

  try {
    const formData = new FormData();
    console.log("formdata, data")

    Object.keys(data).forEach((key) => {
      formData.append(key, (data as never)[key]);
    });
  
    const res = await apiRequest(
      `/events/create`,
      {
        method: "POST",
        body: formData,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    if (res.status === 201) {
      toast.success("Evento criado com sucesso!");
    } else if (res.status === 409) {
      toast.error("Email já em uso.");
      throw new Error("Email já em uso.");
    } else {
      toast.error(`Erro inesperado: ${res.status}`);
      throw new Error(`Erro inesperado: ${res.status}`);
    }

    const responseData = await res.json();
    // toast.success("Pets carregados.");
    return responseData;
  } catch (err) {
    toast.error("Houve um problema na requisição.");
    console.error(err);
    return null;
  }
}

export default postEvent