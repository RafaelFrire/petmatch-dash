'use client'
import { useActionState } from "react";
import { useEffect } from "react";
import Button from "../form/Button";
import Input from "../form/input";
import loginAction from "@/actions/loginAction";
import Form from "next/form";
import { toast } from "sonner";

export default function FormLogin() {
  const [state, formAction] = useActionState(loginAction, null);

  

  useEffect(() => {
    if (!state?.sucess) {
      toast.error(state?.message);
    } else if (state?.sucess) {
      toast.success("Login realizado com successo!!");
    }
  }, [state]);

  return (
    <>
      <Form
        className="flex flex-col gap-2 w-[90%] md:w-[95%] mx-auto"
        action={formAction}
      >
        <Input name="email" label="Email" type="email" borderRounded={true} />
        <Input
          name="password"
          label="Password"
          type="password"
          borderRounded={true}
        />
        <div className="h-3"></div>
        <div className="flex flex-wrap text-xs md:text-base items-center justify-between px-2">
          <h1>Aceito a Política de Privacidade</h1>
          <h1>Esqueceu a senha?</h1>
        </div>
        <div className="h-3"></div>
        <Button text="Entrar" borderRounded={true} type="submit" />
        <div className="h-6"></div>
        <div className="flex items-center justify-center">
          <h1>OU</h1>
        </div>
      </Form>
    </>
  );
}
