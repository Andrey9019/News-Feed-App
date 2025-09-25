import type { Feed } from "@/types";

const BASE_URL = import.meta.env.VITE_API_URL;

export async function fetchFeed(url?: string, force?: number): Promise<Feed> {
  const params = new URLSearchParams();
  if (url) params.append("url", url);
  if (force !== undefined) {
    params.append("force", force.toString());
  }

  const queryString = params.toString();
  const fullUrl = `${BASE_URL}/feed?${queryString ? `${queryString}` : ""}`;

  console.log(`[API] Sending request to: ${fullUrl}`);

  const response = await fetch(fullUrl);

  console.log(`[API] Response status: ${response.status}`);

  if (!response.ok) {
    const errorText = await response.text();
    console.error(`[API] Error response: ${errorText}`);
    throw new Error(
      `HTTP error! status: ${response.status}, message: ${errorText}`
    );
  }
  const data: Feed = await response.json();
  console.log("[API] Received data:", data);
  return data;
}
