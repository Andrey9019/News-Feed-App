import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { getFormFields, type FormFieldConfig } from "@/lib/formConfig";
import { useAuthForm } from "@/hooks/useAuthForm";

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
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {fields.map((field) => (
            <FormField
              key={field.name}
              control={form.control}
              name={field.name}
              render={({ field: formField }) => (
                <FormItem>
                  <FormLabel>{field.label}</FormLabel>
                  <FormControl>
                    <Input
                      type={field.type}
                      placeholder={field.placeholder}
                      {...formField}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}
          <Button type="submit" className="w-full">
            {formType === "register" ? "Register" : "Login"}
          </Button>
        </form>
      </Form>
    </div>
  );
}
