"use server";
import { signIn } from "@/auth";

export default async function loginAction(_prevState: any, formData: FormData) {
  try {
    await signIn("credentials", formData);
    return { sucess: true };
  } catch (e) {
    console.error(e);
    if (e.type === "CredentialsSignin") {
      return { sucess: false, message: "Dados de login incorretos" };
    }
    return { sucess: false, message: "Ops, algum erro aconteceu." };
  }
}
