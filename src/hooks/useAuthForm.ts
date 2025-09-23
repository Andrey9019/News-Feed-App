import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  loginSchema,
  registerSchema,
  type LoginFormData,
  type RegisterFormData,
} from "@/lib/authSchema";

export const useAuthForm = (formType: "register" | "login") => {
  const isRegister = formType === "register";
  const schema = isRegister ? registerSchema : loginSchema;

  const form = useForm<RegisterFormData | LoginFormData>({
    resolver: zodResolver(schema),
    defaultValues: isRegister
      ? { email: "", password: "", confirmPassword: "", name: "" }
      : { email: "", password: "" },
  });

  const onSubmit = (data: RegisterFormData | LoginFormData) => {
    console.log(`${isRegister ? "Registration" : "Login"} data:`, data);
    // Тут можна додати API-запит, наприклад:
    // await api.auth[formType](data);
  };

  return { form, onSubmit };
};
