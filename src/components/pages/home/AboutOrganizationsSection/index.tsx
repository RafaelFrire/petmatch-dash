import { FC } from "react";
import { SectionText } from "./SectionText";
import { SectionImages } from "./SectionImages";

export const AboutOrganizationsSection: FC = () => {
  return (
    <section className="w-full py-16 flex flex-col md:flex-row gap-8 justify-between">
      <SectionText />
      <SectionImages />
    </section>
  );
};
