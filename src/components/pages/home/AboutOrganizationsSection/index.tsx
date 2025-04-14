import { FC } from "react";
import { SectionText } from "./SectionText";
import { SectionImages } from "./SectionImages";
import { TitleWithPaw } from "@/components/TitleWithPaw";

export const AboutOrganizationsSection: FC = () => {
  return (
    <>
      <div className="text-6xl font-bold text-center mb-8">
        <TitleWithPaw title="Eventos" />
      </div>
      <section className="w-full py-16 flex flex-col md:flex-row gap-8 justify-between">
        <SectionText />
        <SectionImages />
      </section>
    </>
  );
};
