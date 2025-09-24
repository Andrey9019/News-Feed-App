import { getFormFields, type FormFieldConfig } from "@/lib/formConfig";
import { useAuthForm } from "@/hooks/useAuthForm";
import { FormContent } from "./FormContent";

interface AuthFormProps {
  formType: "register" | "login";
}

export default function AuthForm({ formType }: AuthFormProps) {
  const { form, onSubmit } = useAuthForm(formType);
  const fields = getFormFields(formType);

  return (
    <div className="w-full max-w-md space-y-8 rounded-lg bg-white p-6 shadow-md">
      <h2 className="text-center text-2xl font-bold">
        {formType === "register" ? "Register" : "Login"}
      </h2>
      <FormContent
        form={form}
        fields={fields}
        formType={formType}
        onSubmit={onSubmit}
      />
    </div>
  );
}
