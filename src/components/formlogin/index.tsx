import { useState } from "react";
import Button from "../form/Button";
import Input from "../form/input";
import loginAction from "@/actions/loginAction";



const FormLogin = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };

  // const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault(); // Evita o reload da página
  //   console.log(formData)
  // };


  return (
    <form
      className="flex flex-col gap-2 w-[90%] md:w-[95%] mx-auto"
      action={loginAction}
    >
      <Input
        name="email"
        label="Email"
        type="email"
        borderRounded={true}
        onChange={handleChange}
      />
      <Input
        name="password"
        label="Password"
        type="password"
        borderRounded={true}
        onChange={handleChange}
      />
      <div className="h-3"></div>
      <div className="flex flex-wrap text-xs md:text-base  items-center justify-between px-2 ">
        <h1>Aceito a Política de Privacidade</h1>
        <h1>Esqueceu a senha?</h1>
      </div>
      <div className="h-3"></div>
      <Button text="Entrar" borderRounded={true} type="submit" />
      <div className="h-6"></div>
      <div className="flex items-center justify-center">
        <h1>OU</h1>
      </div>
    </form>
  );
};

export default FormLogin;
