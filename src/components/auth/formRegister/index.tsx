import AcceptTerms from "@/components/form/acceptTerms";
import Button from "@/components/form/Button";
import Input from "@/components/form/input";
import InputFiles from "@/components/form/inputFiles";

export default function FormRegister() {
  return (
    <form className="grid w-[90%] md:w-[100%] mx-auto grid-cols-1 md:grid-cols-2 gap-2">
      <Input
        label="Digite seu primeiro nome*"
        name="firstName"
        className="col-span-2 md:col-span-1 h-16 text-sm font-medium"
      />
      <Input
        label="Digite seu sobrenome*"
        name="lastName"
        className="col-span-2 md:col-span-1 h-16 text-sm font-medium"
      />
      <Input
        label="Email*"
        name="email"
        className="col-span-2 h-16 text-sm font-medium"
      />
      <Input
        label="Digite uma senha*"
        name="Password"
        type="password"
        className="col-span-2 h-16 text-sm font-medium"
      />
      <Input
        label="Digite a senha novamente*"
        name="confirmPassword"
        type="password"
        className="col-span-2 h-16 text-sm font-medium"
      />
      <Input
        label="Telefone*"
        name="Phone"
        className="col-span-2 md:col-span-1 h-16 text-sm font-medium"
      />{" "}
      <Input
        label="CEP*"
        name="zipcode"
        className="col-span-2 md:col-span-1 h-16 text-sm font-medium"
      />
      <Input
        label="Endereço*"
        name="address"
        className="col-span-2 h-16 text-sm font-medium"
      />
      <Input
        label="Estado*"
        name="state"
        className="col-span-2 md:col-span-1 h-16 text-sm font-medium"
      />{" "}
      <Input
        label="Cidade"
        name="city"
        className="col-span-2 md:col-span-1 h-16 text-sm font-medium"
      />
      <Input
        label="Documento de identificação*"
        name="documentId"
        className="col-span-2 md:col-span-1 h-16 text-sm font-medium"
      />
      <InputFiles
        name=""
        label="anexar*"
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
