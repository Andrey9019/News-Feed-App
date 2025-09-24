import type { Feed, Article } from "@/types";

const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

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
//
export async function parseArticle(url: string): Promise<Article> {
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

// export async function registerUser(
//   email: string,
//   password: string,
//   name: string
// ): Promise<{ id: string; email: string; name: string }> {
//   const response = await fetch(`${BASE_URL}/auth/register`, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ email, password, name }),
//   });
//   if (!response.ok) {
//     const error = await response.json();
//     throw new Error(error.error || "Registration failed");
//   }
//   return response.json();
// }

// export async function loginUser(
//   email: string,
//   password: string
// ): Promise<{ token: string }> {
//   const response = await fetch(`${BASE_URL}/auth/login`, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ email, password }),
//   });
//   if (!response.ok) {
//     const error = await response.json();
//     throw new Error(error.error || "Login failed");
//   }
//   return response.json();
// }
