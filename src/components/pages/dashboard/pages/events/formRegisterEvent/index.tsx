import InputCustom from "@/components/form/inputCustom";
import InputFiles from "@/components/form/inputFiles";
import eventSchema from "@/schemas/eventSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

export type FormValues = {
  title: string;
  slug: string;
  categorie: string;
  date: string;
  time: string;
  location: string;
  address: string;
  city: string;
  state: string;
  description: string;
  additionalInfo?: string;
  files: (File | undefined)[];

};


export const FormRegisterEvent = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(eventSchema),
  });

  const onSubmit = (data: FormValues) => {
    console.log("Form data:", data);
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid grid-cols-1 md:grid-cols-2 gap-4 min-w-[350px] md:max-w-[600px] overflow-y-auto max-h-[90vh]"
    >
      <InputCustom
        label="Título do evento*"
        name="title"
        error={"Campo obrigatório"}
        className="col-span-2 md:col-span-1 h-16 text-sm font-medium"
      />

      {/* <InputCustom
        label="Slug (ex: nome-do-evento)*"
        name="slug"
        error={"Campo obrigatório"}
        className="col-span-2 md:col-span-1 h-16 text-sm font-medium"
      /> */}

      <InputCustom
        label="Categoria*"
        name="categorie"
        error={"Campo obrigatório"}
        className="col-span-2 md:col-span-1 h-16 text-sm font-medium"
      />

      <InputCustom
        label="Data do Evento*"
        name="date"
        type="date"
        error={"Campo obrigatório"}
        className="col-span-2 md:col-span-1 h-16 text-sm font-medium"
      />

      <InputCustom
        label="Horário*"
        name="time"
        type="time"
        error={"Campo obrigatório"}
        className="col-span-2 md:col-span-1 h-16 text-sm font-medium"
      />

      <InputCustom
        label="Local (nome do local)*"
        name="location"
        error={"Campo obrigatório"}
        className="col-span-2 md:col-span- h-16 text-sm font-medium"
      />

      <InputCustom
        label="Endereço*"
        name="address"
        error={"Campo obrigatório"}
        className="col-span-2 md:col-span-2 h-16 text-sm font-medium"
      />

      <InputCustom
        label="Cidade*"
        name="city"
        error={"Campo obrigatório"}
        className="col-span-2 md:col-span-1 h-16 text-sm font-medium"
      />

      <InputCustom
        label="Estado*"
        name="state"
        error={"Campo obrigatório"}
        className="col-span-2 md:col-span-1 h-16 text-sm font-medium"
      />

      <InputCustom
        label="Descrição*"
        name="description"
        error={"Campo obrigatório"}
        className="col-span-2 text-sm font-medium resize-none"
      />

      <InputCustom
        label="Informações adicionais"
        name="additionalInfo"
        error={""}
        className="col-span-2 text-sm font-medium resize-none"
      />

      <InputFiles
        register={register}
        setValue={setValue}
        id="files"
        name="files"
        label="Imagem do Evento*"
        error={errors.files?.message as string}
        classname="col-span-2 md:col-span-2"
      />

      <div className="col-span-2 text-sm font-medium">
        <button className="bg-primary100 text-white rounded-md px-4 py-2 hover:bg-primary200 transition duration-300" type="submit">
          Cadastrar
        </button>
      </div>
    </form>
  );
};
