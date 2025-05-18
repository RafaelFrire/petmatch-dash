/* eslint-disable react-hooks/exhaustive-deps */
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
import { useRouter } from "next/navigation";

export default function FormLogin() {
  const [state, formAction] = useActionState(loginAction, null);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    if (!acceptTerms) {
      event.preventDefault(); // Impede o envio do formulário
      setError("Você deve aceitar os termos antes de continuar.");
      toast.error("Você deve aceitar os termos antes de continuar.");
      return;
    }

    setError(null); // Remove erro caso tenha sido resolvido
  };

  const formAdocaoPetId = sessionStorage.getItem("formAdocaoPetId");

  useEffect(() => {
    if (state === null) return;
    if (!state?.success) {
      toast.error(state?.message);
      return;
    } else if (
      (state?.success && state.data.user, state.data?.user?.role === "ONG")
    ) {
      router.push("/dashboard");
      toast.success(state?.message);
      return;
    } else if (
      (state?.success && state.data.user, state.data?.user?.role === "ADOPTER")
    ) {
      router.push("/");
      toast.success(state?.message);
      return;
    }
    
  }, [state, formAdocaoPetId]);

  useEffect(() => {
    if (state?.success) {
      if (formAdocaoPetId) {
        window.location.href = `/adocao/${formAdocaoPetId}`;
      } else {
        window.location.href = "/";
      }
    }
  }, [state, formAdocaoPetId]);
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
