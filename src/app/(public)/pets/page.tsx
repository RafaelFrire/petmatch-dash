import { PetsGallerySection } from "@/components/pages/pets";
import FilterSidebar from "@/components/pages/pets/filterPets";
import { TitleWithPaw } from "@/components/TitleWithPaw";

export default function PetsPage() {
  return (
    <div className="min-h-screen w-full">
      <div className="h-6"></div>
      <TitleWithPaw title="Pets" />
      <div className="h-10"></div>
      <div className="flex flex-wrap flex-row md:flex-nowrap md:justify-center gap-10 md:gap-1 md:w-[90%] mx-auto">
        <div className="w-[95%] md:w-[30%] mx-auto">
          <FilterSidebar />
        </div>
        <div className="w-[95%] md:w-[90%] mx-auto">
          <PetsGallerySection />
        </div>
      </div>
    </div>
  );
}
