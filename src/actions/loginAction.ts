"use server";
import { signIn } from "@/auth";

export default async function loginAction(formData: FormData) {
  try {
    console.log(formData)
    await signIn("credentials", formData);
  } catch (err) {
    console.error(err);
  }
}
