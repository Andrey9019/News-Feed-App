import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  loginSchema,
  registerSchema,
  type LoginFormData,
  type RegisterFormData,
} from "@/lib/authSchema";
import { registerUser, loginUser } from "@/services";
import { useAuth } from "@/context/AuthContext";
import { useNavigate } from "react-router-dom";

export const useAuthForm = (formType: "register" | "login") => {
  const isRegister = formType === "register";
  const schema = isRegister ? registerSchema : loginSchema;
  const { login } = useAuth();
  const navigate = useNavigate();

  const form = useForm<RegisterFormData | LoginFormData>({
    resolver: zodResolver(schema),
    defaultValues: isRegister
      ? { email: "", password: "", confirmPassword: "", name: "" }
      : { email: "", password: "" },
  });

  const onSubmit = async (data: RegisterFormData | LoginFormData) => {
    try {
      if (isRegister) {
        const result = await registerUser(data as RegisterFormData);
        console.log("[useAuthForm] Register success:", result);
        navigate("/login");
      } else {
        const result = await loginUser(data as LoginFormData);
        console.log("[useAuthForm] Login response:", result);
        if (
          !result.token
          // || !result.user
        ) {
          console.error("[useAuthForm] Invalid login response:", result);
          throw new Error("Invalid response from server: no token or user data");
        }
        login(result.token);
        console.log("[useAuthForm] Login success:", result);
        navigate("/");
      }
    } catch (error) {
      console.error(`[useAuthForm] Error during ${formType}:`, error);
      throw error;
    }
  };

  return { form, onSubmit };
};
