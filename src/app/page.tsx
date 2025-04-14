import { AboutOrganizationsSection } from "@/components/pages/home/AboutOrganizationsSection";
import { ArticlesSection } from "@/components/pages/home/articles/articleSection";
import { EventsSection } from "@/components/pages/home/eventSection";

export default function HomePage() {
  return (
    <div>

      <div className="w-[80%] mx-auto flex flex-col space-y-8 py-16">
       <AboutOrganizationsSection />
       <EventsSection />
       <ArticlesSection />
      </div>
  </div>
  );
}
