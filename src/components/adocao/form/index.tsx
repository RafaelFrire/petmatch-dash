'use client'
import Button from "@/components/form/Button";
import InputFiles from "@/components/form/inputFiles";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import AdoptionSchema from "@/schemas/adoptionSchema";
import { useMutation } from "@tanstack/react-query";
import Input from "@/components/form/input";
import AcceptTerms from "@/components/form/acceptTerms";
import { cepMask, phoneMask, rgMask } from "@/utils/MaskStrings";
import { signup } from "@/hooks/useAuth";

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
    maritalStatus: 'SINGLE' | 'MARRIED' | 'DIVORCED' | 'WIDOWED';
    residenceType: 'HOUSE' | 'APARTMENT' | 'OTHER';
    hasOtherPets: boolean;
    reasonForAdoption: string;
    files: File ;
    termsPrivacity: boolean;
    termsAdopter: boolean;
};

export const FormAdocao = () => {
    const {
      register,
      handleSubmit,
      setValue,
      control,
      formState: { errors },
    } = useForm<AdoptionInputs>({
      resolver: yupResolver(AdoptionSchema),
    });
    const router = useRouter();

    const mutation = useMutation({
        mutationFn: (data: AdoptionInputs) => signup({ ...data, password: "", confirmPassword: "" }),
        onSuccess() {
            router.push("/login");
        },
    });

    const onSubmit: SubmitHandler<AdoptionInputs> = (data) => {
        if (data.files) {
            mutation.mutate(data);
        }
    };

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
          className="col-span-2 md:col-span-1 h-16 text-sm font-medium"
          onChange={(e) => {
            const mask = rgMask(e.target.value);
            setValue("document", mask);
          }}
          maxLength={12}
        />
        <div className="col-span-2 md:col-span-1">
          <label className="block text-sm font-medium mb-2">
            Estado Civil*
          </label>
          <select
            {...register("maritalStatus")}
            className="w-full h-16 text-sm font-medium border rounded"
          >
            <option value="SINGLE">Solteiro(a)</option>
            <option value="MARRIED">Casado(a)</option>
            <option value="DIVORCED">Divorciado(a)</option>
            <option value="WIDOWED">Viúvo(a)</option>
          </select>
          {errors.maritalStatus && (
            <p className="text-red-500 text-sm">
              {errors.maritalStatus.message}
            </p>
          )}
        </div>
        <div className="col-span-2 md:col-span-1">
          <label className="block text-sm font-medium mb-2">
            Tipo de Residência*
          </label>
          <select
            {...register("residenceType")}
            className="w-full h-16 text-sm font-medium border rounded"
          >
            <option value="HOUSE">Casa</option>
            <option value="APARTMENT">Apartamento</option>
            <option value="OTHER">Outro</option>
          </select>
          {errors.residenceType && (
            <p className="text-red-500 text-sm">
              {errors.residenceType.message}
            </p>
          )}
        </div>
        <div className="col-span-2">
          <label className="block text-sm font-medium mb-2">
            Possui outros pets?*
          </label>
          <input
            type="checkbox"
            {...register("hasOtherPets")}
            className="mr-2"
          />
          {errors.hasOtherPets && (
            <p className="text-red-500 text-sm">
              {errors.hasOtherPets.message}
            </p>
          )}
        </div>
        <Input
          label="Motivo para adoção*"
          {...register("reasonForAdoption")}
          name="reasonForAdoption"
          className="col-span-2 h-16 text-sm font-medium"
          error={errors?.reasonForAdoption?.message}
        />
        <InputFiles
          register={register}
          setValue={setValue}
          name="files"
          label="Anexar*"
          error={errors?.files?.message}
          classname="col-span-2 md:col-span-1"
        />
        <div className="h-4"></div>
        <Controller
          name="termsPrivacity"
          control={control}
          render={({ field }) => (
            <AcceptTerms
              text="Li e Aceito a Política de Privacidade"
              classname="col-span-2"
              value={field.value}
              onChange={field.onChange}
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
              classname="col-span-2"
              value={field.value}
              onChange={field.onChange}
              error={errors.termsAdopter?.message}
            />
          )}
          rules={{ required: "Você deve aceitar os termos para continuar" }}
        />
        <div className="h-4"></div>
        <Button text="Cadastrar" classname="col-span-2" />
        <div className="h-8"></div>
      </form>
    );
};