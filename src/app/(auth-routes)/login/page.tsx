import { auth } from "@/auth";
import FormLogin from "@/components/auth/formlogin";
import { ButtonRedirect } from "@/components/form/ButtonRedirect";
import Text from "@/components/Text";
import { redirect } from "next/navigation";

export default async function Login() {
  const session = await auth();
  if(session){
    return redirect("/")
  }
  return (
    <>
      <div className="h-14"></div>
      <div className="min-h-[60vh] max-w-[600px] flex-col mx-auto justify-center insert-ring-4 ring-primary100 rounded-xl border border-primary40 shadow-xl">
        <div className="md:w-[450px] mx-auto">
          <div className="flex justify-evenly items-center h-16">
            <ButtonRedirect text="Entrar" redirect={"/login"} isActive={true} />
            <ButtonRedirect text="Cadastrar" redirect={"/register"} isActive={false} />
          </div>
          <FormLogin />
        </div>
      </div>
      <div className="flex justify-center items-center flex-col ">
        <div className="h-20"></div>
          <div>
            <Text text="Faça Login como usuário aqui" />
          </div>
      </div>
    </>
  );
}
