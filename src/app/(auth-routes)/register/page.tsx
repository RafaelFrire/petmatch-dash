import FormRegister from "@/components/auth/formRegister";
import { ButtonRedirect } from "@/components/form/ButtonRedirect";


export default async function RegisterPage(){
    return (
        <>
        <div className="h-14"></div>
        <div className="min-h-[60vh] max-w-[600px] flex-col mx-auto justify-center insert-ring-4 ring-primary100 rounded-xl border border-primary40 shadow-xl">
          <div className="md:w-[450px] mx-auto">
            <div className="flex justify-evenly items-center h-16">
              <ButtonRedirect text="Entrar" redirect={"/login"} isActive={false} />
              <ButtonRedirect text="Cadastrar" redirect={"/register"} isActive={true} />
            </div>
            <FormRegister />
          </div>
        </div>
        <div className="flex justify-center items-center flex-col ">
          <div className="h-20"></div>
        </div>
      </>
    );
}