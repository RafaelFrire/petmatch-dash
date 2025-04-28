import InputCustom from "@/components/form/inputCustom";
import InputFiles from "@/components/form/inputFiles";
import SpinLoader from "@/components/spinLoader";
import { apiRequest } from "@/hooks/useApi";
import { Event } from "@/interfaces/event";
import eventSchema from "@/schemas/eventSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

export type FormValues = {
  title: string;
  categorie: string;
  date: string;
  time: string;
  location: string;
  address: string;
  city: string;
  state: string;
  description: string;
  additionalInfo?: string;
  files: File;
};

type formRegisterEventProps = {
  handleCloseModal?: () => void;
  isEdit?: boolean;
  eventToEdit?: Partial<Event>;
};

export const FormRegisterEvent:React.FC<formRegisterEventProps> = ({handleCloseModal, eventToEdit}) => {
  const { data: session } = useSession()

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(eventSchema),
    defaultValues: {
      title: "",
      categorie: "",
      date: "",
      time: "",
      location: "",
      address: "",
      city: "",
      state: "",
      description: "",
      additionalInfo: "",
      files: undefined,
    }, // Define o valor padrão como undefined para o campo files
  });


  const { mutate, isPending, isError, isSuccess } = useMutation({
    mutationFn: (formData: FormData) =>
      apiRequest("/events/create", {
        method: "POST",
        body: formData,
      }),
    onSuccess: () => toast.success("Evento criado com sucesso!"),
    onError: () => toast.error("Erro ao criar evento."),
  });

  const onSubmit = async (data: FormValues) => {
    const formData = new FormData();

    const slug = `${data.title}-${data.date}`.replace(/\s+/g, "-").toLowerCase();

    formData.append("ongId", session?.user.id || "");
    formData.append("slug", slug);

    // Todos os campos exceto o arquivo
    Object.entries(data).forEach(([key, value]) => {
      if (key !== "files") {
        formData.append(key, value);
      }
    });

    // Adiciona o arquivo
    if (data.files) {
      formData.append("files", data.files); 
    }
    mutate(formData);
  };


  useEffect(() => {
    if (eventToEdit) {
      reset({
        ...eventToEdit,
        date: eventToEdit.date ? new Date(eventToEdit.date).toISOString().split('T')[0] : "", // formato yyyy-MM-dd para input type="date"
        files: undefined, // não traz arquivos antigos
      });
    } else {
      reset(); // se não tiver nada para editar, reseta para vazio
    }
  }, [eventToEdit, reset]);

  if (isPending) {
    return (
      <div className="py-10">
        <SpinLoader />
      </div>
    );
  }

  if(isSuccess){
    reset()
    if (handleCloseModal) {
      handleCloseModal();
    }
  }

  
  if (isError) {
    return (
      <div className="py-10 text-center text-primary100 text-3xl">
        <h1>Houve um problema.</h1>
      </div>
    );
  }



  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid grid-cols-1 md:grid-cols-2 gap-4 min-w-[350px] md:max-w-[600px] overflow-y-auto py-2  max-h-[80vh]"
    >
      <InputCustom
        label="Título do evento*"
        error={errors?.title?.message}
        {...register("title")}
        className="col-span-2 md:col-span-1 h-16 text-sm font-medium"
      />

      <InputCustom
        label="Categoria*"
        error={errors?.categorie?.message}
        {...register("categorie")}
        className="col-span-2 md:col-span-1 h-16 text-sm font-medium"
      />

      <InputCustom
        label="Data do Evento*"
        type="date"
        error={errors?.date?.message}
        {...register("date")}
        className="col-span-2 md:col-span-1 h-16 text-sm font-medium"
      />

      <InputCustom
        label="Horário*"
        type="time"
        error={errors?.time?.message}
        {...register("time")}
        className="col-span-2 md:col-span-1 h-16 text-sm font-medium"
      />

      <InputCustom
        label="Local (nome do local)*"
        error={errors?.location?.message}
        {...register("location")}
        className="col-span-2 md:col-span- h-16 text-sm font-medium"
      />

      <InputCustom
        label="Endereço*"
        error={errors?.address?.message}
        {...register("address")}
        className="col-span-2 md:col-span-2 h-16 text-sm font-medium"
      />

      <InputCustom
        label="Cidade*"
        error={errors?.city?.message}
        {...register("city")}
        className="col-span-2 md:col-span-1 h-16 text-sm font-medium"
      />

      <InputCustom
        label="Estado*"
        error={errors?.state?.message}
        {...register("state")}
        className="col-span-2 md:col-span-1 h-16 text-sm font-medium"
      />

      <InputCustom
        label="Descrição*"
        error={errors?.description?.message}
        {...register("description")}
        className="col-span-2 text-sm font-medium resize-none"
      />

      <InputCustom
        label="Informações adicionais"
        error={errors?.additionalInfo?.message}
        {...register("additionalInfo")}
        className="col-span-2 text-sm font-medium resize-none"
      />

      <InputFiles
        register={register}
        setValue={setValue}
        name="files"
        label="Imagem do Evento*"
        error={errors.files?.message as string}
        classname="col-span-2 md:col-span-2"
      />

      <div className="col-span-2 text-sm font-medium">
        <button
          className="bg-primary100 text-white rounded-md px-4 py-2 hover:bg-primary200 transition duration-300"
          type="submit"
        >
          {eventToEdit ? "Salvar Alterações" : "Cadastrar"}

        </button>
      </div>
    </form>
  );
};
