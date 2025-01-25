import Button from "../form/Button";
import Input from "../form/input";

const FormLogin = () => {
  return (
    <form className="flex flex-col gap-2 w-[90%] md:w-[95%] mx-auto">
      <Input name="email" label="Email" type="text" borderRounded={true} />
      <Input name="email" label="Email" type="password" borderRounded={true} />
      <div className="h-3"></div>
      <div className="flex flex-wrap text-xs md:text-base  items-center justify-between px-2 ">
        <h1>Aceito a Política de Privacidade</h1>
        <h1>Esqueceu a senha?</h1>
      </div>
      <div className="h-3"></div>
      <Button text="Entrar" borderRounded={true} />
      <div className="h-6"></div>
      <div className="flex items-center justify-center">
        <h1>OU</h1>
      </div>
    </form>
  );
};

export default FormLogin;
