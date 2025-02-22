import { useRouter, useParams, useSearchParams } from "next/navigation";

export function useFilters() {
  const router = useRouter();
  const params = useParams();
  const searchParams = useSearchParams();

  // Função para atualizar os filtros na URL
  const setFilters = (filters: Record<string, string | null>) => {
    let newCategorie = params.categorie || "";
    let newSlug = params.slug || "/";
    const query = new URLSearchParams(searchParams.toString());
    if (filters.categorie) {
      newCategorie = filters.categorie;
    }
    if (filters.slug) {
      newSlug = filters.slug;
    }

    Object.entries(filters).forEach(([key, value]) => {
      if (key !== "categorie" && key !== "slug") {
        if (value) query.set(key, value);
        else query.delete(key);
      }
    });
    const newPath = `/dashboard/blog/${newCategorie}/${newSlug}?${query.toString()}`;
    router.push(newPath, { scroll: false });
  };

  return { setFilters, searchParams };
}
