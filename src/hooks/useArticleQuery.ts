import { useQuery } from "@tanstack/react-query";
import { fetchArticle } from "@/services";
import type { Article } from "@/types";

export function useArticleQuery(url: string) {
  const { data, isLoading, error } = useQuery<Article, Error>({
    queryKey: ["article", url],
    queryFn: () => fetchArticle(url),
    enabled: !!url,
  });
  // console.log(`[useArticleQuery] Starting fetch with url=${url}`);
  // console.log("[useArticleQuery] Data fetched successfully:", data);
  return {
    data,
    isLoading,
    error,
  };
}
