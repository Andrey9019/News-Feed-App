import type { LoginFormData, RegisterFormData } from "@/lib/authSchema";

const BASE_URL = import.meta.env.VITE_API_URL;

const getHeaders = () => ({
  "Content-Type": "application/json",
  Authorization: `Bearer ${localStorage.getItem("token") || ""}`,
});

export async function registerUser(
  data: RegisterFormData
): Promise<{ id: string; email: string; name: string }> {
  console.log("[API] Registering user:", data);
  const response = await fetch(`${BASE_URL}/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  console.log(`[API] Register response status: ${response.status}`);
  if (!response.ok) {
    const errorText = await response.text();
    console.error(`[API] Register error: ${errorText}`);
    throw new Error(errorText);
  }
  const result = await response.json();
  console.log("[API] Register success:", result);
  return result;
}

export async function loginUser(data: LoginFormData): Promise<{
  token: string;
  //   user: { id: string; email: string; name: string };
}> {
  console.log("[API] Logging in user:", data);
  const response = await fetch(`${BASE_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  console.log(`[API] Login response status: ${response.status}`);
  if (!response.ok) {
    const errorText = await response.text();
    console.error(`[API] Login error: ${errorText}`);
    throw new Error(errorText);
  }
  const result = await response.json();
  console.log("[API] Login success raw response:", result);
  if (!result || typeof result !== "object") {
    console.error("[API] Login error: Invalid response format", result);
    throw new Error("Invalid response format from server");
  }
  return result;
}
//   console.log("[API] Logging in user:", data);
//   const response = await fetch(`${BASE_URL}/login`, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(data),
//   });
//   console.log(`[API] Login response status: ${response.status}`);
//   if (!response.ok) {
//     const errorText = await response.text();
//     console.error(`[API] Login error: ${errorText}`);
//     throw new Error(errorText);
//   }
//   const result = await response.json();
//   console.log("[API] Login success:", result);
//   return result;
// }
