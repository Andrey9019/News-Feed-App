import type { Article } from "@/types";

const BASE_URL = import.meta.env.VITE_API_URL;

export async function fetchArticle(url: string): Promise<Article> {
  const params = new URLSearchParams();
  params.append("url", url);

  console.log(`[API] Sending request to: ${url}`);

  const response = await fetch(`${BASE_URL}/parse-article?${params}`);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data: Article = await response.json();
  console.log("[API] Received data:", data);
  return data;
}
