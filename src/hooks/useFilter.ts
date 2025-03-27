import { useRouter, useParams, useSearchParams } from "next/navigation";

export function useFilters() {
  const router = useRouter();
  const params = useParams();
  const searchParams = useSearchParams();

  // Função para atualizar os filtros na URL
  const setFilters = (filters: Record<string, string | null>) => {
    let newCategorie = params.categorie;
    let newSlug = params.slug;
    let basepath = params.basepath;

    console.log("filters", filters)

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

      // Atualiza os parâmetros de paginação
    if (filters.page) query.set("page", filters.page);
    if (filters.limit) query.set("limit", filters.limit);

    Object.entries(filters).forEach(([key, value]) => {
      if (!["categorie", "slug", "basepath", "page", "limit"].includes(key)) {
        if (value) {
          query.set(key, value);
        } else {
          query.delete(key);
        }
      }
    });
    
    const pathSegments = [basepath, newCategorie, newSlug].filter(Boolean).join('/');
    const newPath = `/${pathSegments}${query.toString() ? '?' + query.toString() : ''}`;

    try {
      const url = new URL(newPath, window.location.origin); // ✅ Agora funciona
      console.log("url", url)
      router.push(url.toString(), { scroll: false });
    } catch (error) {
      console.error("Erro ao construir a URL:", error);
    }
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
