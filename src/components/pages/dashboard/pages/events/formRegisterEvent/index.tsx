'use client'

import InputCustom from "@/components/form/inputCustom";
import InputFiles from "@/components/form/inputFiles";
import eventSchema from "@/schemas/eventSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

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
  files?: (File | undefined);
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
        id="files"
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
          Cadastrar
        </button>
      </div>
    </form>
  );
};
