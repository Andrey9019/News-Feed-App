import { useQuery } from "@tanstack/react-query";
import { parseArticle } from "@/services/api";
import type { Article } from "@/types";

export function useArticleQuery(url: string) {
  const { data, isLoading, error } = useQuery<Article, Error>({
    queryKey: ["article", url],
    queryFn: () => parseArticle(url),
    enabled: !!url,
  });
  console.log(`[useArticleQuery] Starting fetch with url=${url}`);
  console.log("[useArticleQuery] Data fetched successfully:", data);
  return {
    data,
    isLoading,
    error,
  };
}
