'use client'
import AcceptTerms from "@/components/form/acceptTerms";
import Button from "@/components/form/Button";
import Input from "@/components/form/input";
import InputFiles from "@/components/form/inputFiles";
import UserSchema from "@/schemas/registerUser";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

type Inputs = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  phone: string;
  zipcode: string;
  address: string;
  state: string;
  city: string;
  documentId: string;
  attachment?: File | null;
};

export default function FormRegister() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(UserSchema),
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <form
      className="grid w-[90%] md:w-[100%] mx-auto grid-cols-1 md:grid-cols-2 gap-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        label="Digite seu primeiro nome*"
        className="col-span-2 md:col-span-1 h-16 text-sm font-medium"
        {...register("firstName")}
        name="firstName"
        error={errors?.firstName?.message}
      />
      <Input
        label="Digite seu sobrenome*"
        className="col-span-2 md:col-span-1 h-16 text-sm font-medium"
        {...register("lastName")}
        name="lastName"
        error={errors?.lastName?.message}
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
      />{" "}
      <Input
        label="CEP*"
        {...register("zipcode")}
        name="zipcode"
        className="col-span-2 md:col-span-1 h-16 text-sm font-medium"
        error={errors?.zipcode?.message}
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
        label="Documento de identificação*"
        {...register("documentId")}
        name="documentId"
        error={errors?.documentId?.message}
        className="col-span-2 md:col-span-1 h-16 text-sm font-medium"
      />
      <InputFiles
        {...register("attachment")}
        name="attachment"
        label="anexar*"
        // error={errors?.attachment?.message}
        classname="col-span-2 md:col-span-1"
      />
      <div className="h-4"></div>
      <AcceptTerms
        text="Li e Aceito a Política de Privacidade"
        classname="col-span-2"
      />
      <AcceptTerms
        text="Li e Aceito os Termos de Responsabilidade de Adoção"
        classname="col-span-2"
      />
      <div className="h-4"></div>
      <Button text="Cadastrar" classname="col-span-2" />
      <div className="h-8"></div>
    </form>
  );
}
