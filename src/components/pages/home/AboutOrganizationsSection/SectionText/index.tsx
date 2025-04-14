import { FC } from "react";
export const SectionText: FC = () => {
  return (
    <div className="w-full md:w-1/2 flex flex-col space-y-6">
      <h2 className="font-semibold text-5xl text-primary100 tracking-[0.60px] leading-[48.1px] font-['Montserrat',Helvetica]">
        Conheça As Ongs
      </h2>

      <div className="space-y-6">
        <h3 className="font-bold text-[32px] text-sencondary100 tracking-[0.60px] leading-[51.1px] font-['Montserrat',Helvetica]">
          Venha Saber Tudo Sobre As Responsáveis Por Salvar Tantos Animais De
          Maus-tratos
        </h3>

        <p className="font-medium text-xl text-black-100 tracking-[0.60px] leading-[30px] font-['Montserrat',Helvetica]">
          Pellentesque maximus augue orci, quis congue purus iaculison id.
          Maecenas eu lorem quisesdoi massal molestie vulputate in sitagi amet
          diam. Cras eu odio sit amet ipsum cursus for that gone pellentesquea.
          thisaton
        </p>
      </div>

    </div>
  );
};
