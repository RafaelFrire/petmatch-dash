import InputCustom from "@/components/form/inputCustom";
import InputFiles from "@/components/form/inputFiles";
import SpinLoader from "@/components/spinLoader";
import { apiRequest } from "@/hooks/useApi";
import { Pet } from "@/interfaces/pet";
import PetSchema from "@/schemas/PetSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

export type FormValues = {
  name: string;
  species: string;
  breed: string;
  color: string;
  size: string;
  health: string;
  temperament: string;
  birthdate: Date;
  history: string;
  files: File;
};

type formRegisterPetProps = {
  handleCloseModal?: () => void;
  isEdit?: boolean;
  petToEdit?: Partial<Pet>;
};

export const FormRegisterPet: React.FC<formRegisterPetProps> = ({
  handleCloseModal,
  petToEdit,
}) => {
  const { data: session } = useSession();

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(PetSchema),
    defaultValues: {
      name: "",
      species: "",
      breed: "",
      color: "",
      size: "",
      health: "",
      temperament: "",
      birthdate: new Date(),
      history: "",
    },
  });

  const { mutate, isPending, isError, isSuccess } = useMutation({
    mutationFn: (formData: FormData) =>
      apiRequest("/pets/create", {
        method: "POST",
        body: formData,
      }),
    onSuccess: () => toast.success("Pet cadastrado com sucesso!"),
    onError: () => toast.error("Erro ao cadastrar pet."),
  });

  const onSubmit = async (data: FormValues) => {
    const formData = new FormData();

    const slug = `${data.name}-${data.birthdate}`
      .replace(/\s+/g, "-")
      .toLowerCase();

    formData.append("ongId", session?.user.id || "");
    formData.append("slug", slug);

    formData.append("status", "true");

    // Todos os campos exceto o arquivo
    Object.entries(data).forEach(([key, value]) => {
      if (key !== "files") {
        formData.append(
          key,
          typeof value === "object" && value instanceof Date
            ? value.toISOString()
            : String(value)
        );
      }
    });

    // Adiciona o arquivo
    if (data.files) {
      formData.append("files", data.files);
    }
    mutate(formData);
  };

  useEffect(() => {
    if (petToEdit) {
      reset({
        ...petToEdit,
        files: undefined, // não traz arquivos antigos
      });
    } else {
      reset(); // se não tiver nada para editar, reseta para vazio
    }
  }, [petToEdit, reset]);

  if (isPending) {
    return (
      <div className="py-10">
        <SpinLoader />
      </div>
    );
  }

  if (isSuccess) {
    reset();
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
      className="grid grid-cols-1 md:grid-cols-2 gap-4 min-w-[350px] md:max-w-[600px] overflow-y-auto py-2 max-h-[80vh]"
    >
      <InputCustom
        label="Nome do Pet*"
        error={errors?.name?.message}
        {...register("name")}
        className="col-span-2 md:col-span-1 h-16 text-sm font-medium"
      />

      <InputCustom
        label="Espécie*"
        error={errors?.species?.message}
        {...register("species")}
        className="col-span-2 md:col-span-1 h-16 text-sm font-medium"
      />

      <InputCustom
        label="Raça*"
        error={errors?.breed?.message}
        {...register("breed")}
        className="col-span-2 md:col-span-1 h-16 text-sm font-medium"
      />

      <InputCustom
        label="Cor*"
        error={errors?.color?.message}
        {...register("color")}
        className="col-span-2 md:col-span-1 h-16 text-sm font-medium"
      />

      <InputCustom
        label="Tamanho*"
        error={errors?.size?.message}
        {...register("size")}
        className="col-span-2 md:col-span-1 h-16 text-sm font-medium"
      />

      <InputCustom
        label="Saúde*"
        error={errors?.health?.message}
        {...register("health")}
        className="col-span-2 md:col-span-1 h-16 text-sm font-medium"
      />

      <InputCustom
        label="Temperamento*"
        error={errors?.temperament?.message}
        {...register("temperament")}
        className="col-span-2 md:col-span-1 h-16 text-sm font-medium"
      />

      <InputCustom
        label="Data de Nascimento*"
        type="date"
        error={errors?.birthdate?.message}
        {...register("birthdate")}
        className="col-span-2 md:col-span-1 h-16 text-sm font-medium"
      />

      <InputCustom
        label="Histórico*"
        error={errors?.history?.message}
        {...register("history")}
        className="col-span-2 text-sm font-medium resize-none"
      />

      <InputFiles
        register={register}
        setValue={setValue}
        name="files"
        label="Imagem do Pet*"
        error={errors.files?.message as string}
        classname="col-span-2 md:col-span-2"
      />

      <div className="col-span-2 text-sm font-medium">
        <button
          className="bg-primary100 text-white rounded-md px-4 py-2 hover:bg-primary200 transition duration-300"
          type="submit"
        >
          {petToEdit ? "Salvar Alterações" : "Cadastrar"}
        </button>
      </div>
    </form>
  );
};
