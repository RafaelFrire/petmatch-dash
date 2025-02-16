"use client";
import { useActionState, useState } from "react";
import { useEffect } from "react";
import loginAction from "@/actions/loginAction";
import Form from "next/form";
import Input from "@/components/form/input";
import AcceptTerms from "@/components/form/acceptTerms";
import Button from "@/components/form/Button";
import Text from "@/components/Text";
import { toast } from "react-toastify";

export default function FormLogin() {
  const [state, formAction] = useActionState(loginAction, null);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    if (!acceptTerms) {
      event.preventDefault(); // Impede o envio do formulário
      setError("Você deve aceitar os termos antes de continuar.");
      toast.error("Você deve aceitar os termos antes de continuar.");
      return;
    }
  
    setError(null); // Remove erro caso tenha sido resolvido
  };


  useEffect(() => {
    if (state === null) return; 
    console.log("state", state?.success)
    if (!state?.success) {
      toast.error(state?.message);
    } else if (state?.success) {
      toast.success(state?.message);
    }
  }, [state]);

  return (
    <>
      <Form
        className="flex flex-col gap-2 w-[90%] md:w-[95%] mx-auto"
        action={formAction}
        onSubmit={handleSubmit}
      >
        <Input name="email" label="Email" type="email" borderRounded={true} />
        <Input
          name="password"
          label="Password"
          type="password"
          borderRounded={true}
        />
        <div className="h-3"></div>
        <div className="flex flex-wrap text md:text-base items-center justify-between px-2 md:px-0">
            <AcceptTerms
              text="Aceito a Política de Privacidade"
              value={acceptTerms}
              onChange={() => setAcceptTerms(!acceptTerms)}
              error={error || ""} 
            />

          <div className="h-3"></div>

          <Text text="Esqueceu a senha?" />
        </div>
        <div className="h-3"></div>
        <Button text="Entrar" borderRounded={true} type="submit" />
        <div className="h-6"></div>
      </Form>
    </>
  );
}
