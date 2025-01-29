"use server"
import { signIn } from "@/auth";

export default async function loginAction(formData: FormData) {
  try{
    await signIn('credentials', formData)
  }
  catch (err){
    console.error(err);
  }
}
