'use client'
import SpinLoader from "@/components/spinLoader";
import { useGetPetBySlug } from "@/hooks/useGetPetBySlug";
import { useParams } from "next/navigation";


export default function PetPage() {
      const params = useParams();
      const slug = params?.slug as string;
    
      const { data, error, isLoading } = useGetPetBySlug(slug);

      console.log("data", data);

      if (isLoading) {
        return (
          <div className="py-10">
            <SpinLoader />
          </div>
        );
      }
    
      if (error) {
        return <div>Error loading article</div>;
      }
      return(
        <div>
            <h1>
                pet by slug
            </h1>
        </div>
      )

}