import { useQuery } from "@tanstack/react-query";
import { fetchFeed } from "@/services";
import type { Feed } from "@/types";
import { useSearchParams } from "react-router-dom";

export function useFeedQuery(url?: string, force?: number) {
  const searchParams = useSearchParams();
  const queryUrl = searchParams.toString();

  const { data, isLoading, error } = useQuery<Feed, Error>({
    queryKey: ["feed", { queryUrl, force }],
    queryFn: () => fetchFeed(url, force),
  });
  // console.log(`[useFeedQuery] Starting fetch with url=${url}`);
  // console.log("[useFeedQuery] Data fetched successfully:", data);
  return {
    data,
    isLoading,
    error,
  };
}
