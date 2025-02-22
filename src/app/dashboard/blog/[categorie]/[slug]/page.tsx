'use client'
import { TitleWithPaw } from "@/components/TitleWithPaw";
import { useParams } from "next/navigation";


export default function Blog() {
    const params = useParams();
    const slug = params?.slug as string;
    const categorie = params?.categorie as string;
    console.log("slug>", slug)
;  
    return (
        <div>
            <TitleWithPaw title="Artigos"/>
            <h1>Blog {slug}</h1>
            <h1>Categorie {categorie}</h1>
        </div>
    );
}

