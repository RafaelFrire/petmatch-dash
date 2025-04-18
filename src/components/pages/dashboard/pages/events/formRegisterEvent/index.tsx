import Button from "@/components/form/Button";
import Input from "@/components/form/input";
import InputFiles from "@/components/form/inputFiles";

export const FormRegisterEvent = () => {
  return (
    <form className="grid grid-cols-1 md:grid-cols-2 gap-4 min-w-[350px] md:max-w-[600px]">
      <Input
        label="Título do evento*"
        name="title"
        error={"Campo obrigatório"}
        className="col-span-2 md:col-span-1 h-16 text-sm font-medium"
      />

      <Input
        label="Slug (ex: nome-do-evento)*"
        name="slug"
        error={"Campo obrigatório"}
        className="col-span-2 md:col-span-1 h-16 text-sm font-medium"
      />

      <Input
        label="Categoria*"
        name="categorie"
        error={"Campo obrigatório"}
        className="col-span-2 md:col-span-1 h-16 text-sm font-medium"
      />

      <Input
        label="Data do Evento*"
        name="date"
        type="date"
        error={"Campo obrigatório"}
        className="col-span-2 md:col-span-1 h-16 text-sm font-medium"
      />

      <Input
        label="Descrição*"
        name="description"
        error={"Campo obrigatório"}
        className="col-span-2 h-32 text-sm font-medium resize-none"
      />

      <InputFiles
        register={() => {}}
        setValue={() => {}}
        name="files"
        label="Imagem do Evento*"
        error={"Campo obrigatório"}
        classname="col-span-2 md:col-span-1"
      />
      <div className="col-span-2 w-64 h-32 text-sm font-medium resize-none">
        <Button text="Cadastrar" />
      </div>
    </form>
  );
};
