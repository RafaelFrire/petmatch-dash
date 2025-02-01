"use client";
import { useActionState } from "react";
import { useEffect } from "react";
import loginAction from "@/actions/loginAction";
import Form from "next/form";
import { toast } from "sonner";
import Input from "@/components/form/input";
import AcceptTerms from "@/components/form/acceptTerms";
import Button from "@/components/form/Button";
import Text from "@/components/Text";

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
        <div className="flex flex-wrap text md:text-base items-center justify-between px-2">
          <AcceptTerms text="Aceito a Política de Privacidade" />
          <Text text="Esqueceu a senha?" />
        </div>
        <div className="h-3"></div>
        <Button text="Entrar" borderRounded={true} type="submit" />
        <div className="h-6"></div>
      </Form>
    </>
  );
}
