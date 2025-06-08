'use client'
import AcceptTerms from "@/components/form/acceptTerms";
import Button from "@/components/form/Button";
import Input from "@/components/form/input";
import InputFiles from "@/components/form/inputFiles";
import UserSchema from "@/schemas/registerUser";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { cepMask, phoneMask, rgMask } from "@/utils/MaskStrings";
import { useMutation } from "@tanstack/react-query";
import { ongSignup } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";

type Inputs = {
  name: string;
  lastname: string;
  email: string;
  password: string;
  confirmPassword: string;
  phone: string;
  zipcode: string;
  address: string;
  state: string;
  city: string;
  document: string;
  files: File;
  termsPrivacity: boolean
  termsAdopter: boolean
};


export default function FormRegister() {
  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(UserSchema),
  });
  const router = useRouter();


  const mutation = useMutation({
    mutationFn: (data: Inputs) => ongSignup(data),
    onSuccess() {
      router.push("/login")
    },
  });
  const onSubmit: SubmitHandler<Inputs> = (data) => {
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
        label="Nome da ONG*"
        className="col-span-2 md:col-span-1 h-16 text-sm font-medium"
        {...register("name")}
        name="name"
        error={errors?.name?.message}
      />
      <Input
        label="Complemento*"
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
        label="Digite uma senha*"
        {...register("password")}
        name="password"
        type="password"
        className="col-span-2 h-16 text-sm font-medium"
        error={errors?.password?.message}
      />
      <Input
        label="Digite a senha novamente*"
        {...register("confirmPassword")}
        name="confirmPassword"
        type="password"
        className="col-span-2 h-16 text-sm font-medium"
        error={errors?.confirmPassword?.message}
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
      />{" "}
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
      />{" "}
      <Input
        {...register("city")}
        label="Cidade"
        name="city"
        error={errors?.city?.message}
        className="col-span-2 md:col-span-1 h-16 text-sm font-medium"
      />
      <Input
        label="Número do CNPJ*"
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
      <InputFiles
        register={register}
        setValue={setValue}
        name="files"
        label="anexar*"
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
}
