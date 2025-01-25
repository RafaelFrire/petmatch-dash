import FormLogin from "@/components/formlogin";

export default function Login(){
return (
    <>
        <div className="h-14"></div>

        <div className="min-h-[60vh] max-w-[600px] flex-col mx-auto justify-center insert-ring-4 ring-primary100 rounded-xl border border-primary40 shadow-xl">
            <div className="md:w-[450px] mx-auto">
                <div className="flex justify-evenly items-center h-16">
                    <h1>Entrar</h1>
                    <h1>Cadastrar</h1>
                </div>
                <FormLogin />
            </div>
        </div>
    </>
);
}