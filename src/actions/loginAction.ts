"use server";
import { signIn } from "@/auth";

export default async function loginAction(_prevState: unknown, formData: FormData) {
  try {
    const result = await signIn("credentials", {
      redirect: false, // Impede o redirecionamento automático
      email: formData.get("email"),
      password: formData.get("password"),
    });
    

     if (result?.error) {
      return { success: false, message: "Dados de login incorretos" };
    }
    return { success: true, message: "Login realizado com sucesso!" };
  } catch (e) {
    console.error(e);
    if ((e as Error & { type?: string }).type === "CredentialsSignin") {
      return { success: false, message: "Dados de login incorretos" };
    }
  }
}
