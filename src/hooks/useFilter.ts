import { useRouter, useParams, useSearchParams } from "next/navigation";

export function useFilters() {
  const router = useRouter();
  const params = useParams();
  const searchParams = useSearchParams();

  // Função para atualizar os filtros na URL
  const setFilters = (filters: Record<string, string | null>) => {
    let newCategorie = params.categorie || "/";
    let newSlug = params.slug || "/";
    let basepath = params.basepath || "/";

    

    const query = new URLSearchParams(searchParams.toString());
    if (filters.categorie) {
      newCategorie = filters.categorie;
    }
    if (filters.slug) {
      newSlug = filters.slug;
    }

    if (filters.basepath) {
      basepath = filters.basepath || "/";
    }

    Object.entries(filters).forEach(([key, value]) => {
      if (key !== "categorie" && key !== "slug" && key !== "basepath") {
        if (value) query.set(key, value);
        else query.delete(key);
      }
    });
    const newPath = `/${basepath}/${newCategorie}/${newSlug}?${query.toString()}`;
    console.log("newPath: ", newPath);
    console.log("base: ", basepath);
    router.push(newPath, { scroll: false });
  };

  const getFiltersFromParams = () => {
    const paramsObject: Record<string, string> = {};
    searchParams.forEach((value, key) => {
      if (value) paramsObject[key] = value; // Só adiciona se não for vazio
    });
    return paramsObject;
  };

  return { setFilters, searchParams, getFiltersFromParams };
}
