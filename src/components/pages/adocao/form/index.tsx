"use client";
import Button from "@/components/form/Button";
import InputFiles from "@/components/form/inputFiles";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import AdoptionSchema from "@/schemas/adoptionSchema";
import { useMutation } from "@tanstack/react-query";
import Input from "@/components/form/input";
import AcceptTerms from "@/components/form/acceptTerms";
import { cepMask, phoneMask, rgMask } from "@/utils/MaskStrings";
import SelectInput from "@/components/form/inputSelect";
import { Account } from "@/interfaces/account";
import { useEffect } from "react";
import { apiRequest } from "@/hooks/useApi";
import { toast } from "react-toastify";
import SpinLoader from "@/components/spinLoader";

export type AdoptionInputs = {
  name: string;
  lastname: string;
  email: string;
  phone: string;
  zipcode: string;
  address: string;
  state: string;
  city: string;
  document: string;
  maritalStatus: "SINGLE" | "MARRIED" | "DIVORCED" | "WIDOWED";
  residenceType: "HOUSE" | "APARTMENT" | "OTHER";
  hasOtherPets: boolean;
  reasonForAdoption: string;
  files: File;
  termsPrivacity: boolean;
  termsAdopter: boolean;
};

type formAdocaoProps = {
  petId: string;
  userData: Account;
};

export const FormAdocao: React.FC<formAdocaoProps> = ({ petId, userData }) => {
  const {
    register,
    handleSubmit,
    setValue,
    control,
    reset,
    formState: { errors },
  } = useForm<AdoptionInputs>({
    resolver: yupResolver(AdoptionSchema),
    defaultValues: {
      name: "",
      lastname: "",
      email: "",
      phone: "",
      zipcode: "",
      address: "",
      state: "",
      city: "",
      document: "",
      maritalStatus: "SINGLE", // valor padrão dentro dos permitidos
      residenceType: "HOUSE", // idem acima
      hasOtherPets: false,
      reasonForAdoption: "",
      files: undefined as unknown as File, // placeholder vazio compatível
      termsPrivacity: false,
      termsAdopter: false,
    },
  });

  const {mutate, isSuccess, isPending, isError} = useMutation({
    mutationFn: (formData: FormData) =>
      apiRequest(`/adoption/${petId}/${userData.adopter?.id}`, {
        method: "POST",
        body: formData,
      }),
    onSuccess() {
      toast.success("Formulário enviado com sucesso!");
    },
  });

  const onSubmit: SubmitHandler<AdoptionInputs> = (data) => {
    const formData = new FormData();

    Object.entries(data).forEach(([key, value]) => {
      if (!["files", "ongId", "slug", "status", "date"].includes(key)) {
        formData.append(
          key,
          typeof value === "object" && value instanceof Date
            ? value.toISOString()
            : String(value)
        );
      }
    });

    if (data.files) {
      formData.append("files", data.files);
    }
    mutate(formData);
  };

  useEffect(() => {
    if (userData) {
      reset({
        ...userData,
        phone: userData.adopter?.phone,
        zipcode: userData.adopter?.zipcode,
        state: userData.adopter?.state,
        city: userData.adopter?.city,
        document: userData.adopter?.document,
        address: userData.adopter?.address,
        files: undefined, // não traz arquivos antigos
      });
      return;
    }
    reset(); 
  }, [userData, reset]);


  if(isSuccess){
    toast.success("Formulário cadastrado com sucesso!")
  }
  if(isError){
    toast.success("Ops, houve um problema!")
  }

  if(isPending){
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <SpinLoader />
    </div>;
  }


  return (
    <form
      className="grid w-[90%] md:w-[100%] mx-auto grid-cols-1 md:grid-cols-2 gap-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        label="Digite seu primeiro nome*"
        className="col-span-2 md:col-span-1 h-16 text-sm font-medium"
        {...register("name")}
        name="name"
        error={errors?.name?.message}
      />
      <Input
        label="Digite seu sobrenome*"
        className="col-span-2 md:col-span-1 h-16 text-sm font-medium"
        {...register("lastname")}
        name="lastname"
        error={errors?.lastname?.message}
      />
      <Input
        label="Email*"
        className="col-span-2 h-16 text-sm font-medium"
        {...register("email")}
        name="email"
        error={errors?.email?.message}
      />
      <Input
        label="Telefone*"
        {...register("phone")}
        name="phone"
        className="col-span-2 md:col-span-1 h-16 text-sm font-medium"
        error={errors?.phone?.message}
        onChange={(e) => {
          const mask = phoneMask(e.target.value);
          setValue("phone", mask);
        }}
        maxLength={15}
      />
      <Input
        label="CEP*"
        {...register("zipcode")}
        name="zipcode"
        className="col-span-2 md:col-span-1 h-16 text-sm font-medium"
        error={errors?.zipcode?.message}
        onChange={(e) => {
          const mask = cepMask(e.target.value);
          setValue("zipcode", mask);
        }}
        maxLength={9}
      />
      <Input
        label="Endereço*"
        {...register("address")}
        name="address"
        className="col-span-2 h-16 text-sm font-medium"
        error={errors?.address?.message}
      />
      <Input
        label="Estado*"
        {...register("state")}
        name="state"
        className="col-span-2 md:col-span-1 h-16 text-sm font-medium"
        error={errors?.state?.message}
      />
      <Input
        {...register("city")}
        label="Cidade*"
        name="city"
        error={errors?.city?.message}
        className="col-span-2 md:col-span-1 h-16 text-sm font-medium"
      />
      <Input
        label="Documento de identificação*"
        {...register("document")}
        name="document"
        error={errors?.document?.message}
        className="col-span-2 h-16 text-sm font-medium"
        onChange={(e) => {
          const mask = rgMask(e.target.value);
          setValue("document", mask);
        }}
        maxLength={12}
      />
      <div className="col-span-2 md:col-span-1">
        <SelectInput
          label="Estado Civil*"
          options={[
            { value: "", label: "Selecione" },
            { value: "SINGLE", label: "Solteiro(a)" },
            { value: "MARRIED", label: "Casado(a)" },
            { value: "DIVORCED", label: "Divorciado(a)" },
            { value: "WIDOWED", label: "Viúvo(a)" },
          ]}
          {...register("maritalStatus")}
          error={errors.maritalStatus?.message}
          className="h-16 text-sm font-medium"
        />
      </div>
      <div className="col-span-2 md:col-span-1">
        <SelectInput
          label="Tipo de Residência*"
          options={[
            { value: "", label: "Selecione" },
            { value: "HOUSE", label: "Casa" },
            { value: "APARTMENT", label: "Apartamento" },
            { value: "OTHER", label: "Outro" },
          ]}
          {...register("residenceType")}
          error={errors.residenceType?.message}
          className="h-16 text-sm font-medium"
        />
      </div>
      <Input
        label="Motivo para adoção*"
        {...register("reasonForAdoption")}
        name="reasonForAdoption"
        className="col-span-2 h-16 text-sm font-medium"
        error={errors?.reasonForAdoption?.message}
      />
      <div className="col-span-2 md:col-span-1"></div>
      <div className="col-span-2">
        <label className="block text-sm font-medium mb-2">
          Possui outros pets?*
        </label>
        <input type="checkbox" {...register("hasOtherPets")} className="mr-2" />
        {errors.hasOtherPets && (
          <p className="text-red-500 text-sm">{errors.hasOtherPets.message}</p>
        )}
      </div>

      <InputFiles
        register={register}
        setValue={setValue}
        name="files"
        label="Anexar*"
        error={errors?.files?.message}
        classname="col-span-2 md:col-span-1"
      />
      <div className="h-4"></div>
      <div className="flex flex-col gap-5">
        <Controller
          name="termsPrivacity"
          control={control}
          render={({ field }) => (
            <AcceptTerms
              text="Li e Aceito a Política de Privacidade"
              value={field.value}
              onChange={field.onChange}
              classname="max-w-xs"
              error={errors.termsPrivacity?.message}
            />
          )}
          rules={{ required: "Você deve aceitar os termos para continuar" }}
        />
        <Controller
          name="termsAdopter"
          control={control}
          render={({ field }) => (
            <AcceptTerms
              text="Li e Aceito os Termos de Responsabilidade de Adoção"
              value={field.value}
              onChange={field.onChange}
              error={errors.termsAdopter?.message}
              classname="max-w-xs"
            />
          )}
          rules={{ required: "Você deve aceitar os termos para continuar" }}
        />
      </div>
      <div className="h-4"></div>
      <Button text="Cadastrar" classname="col-span-2" />
      <div className="h-8"></div>
    </form>
  );
};
