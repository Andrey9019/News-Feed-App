import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import type { FormFieldConfig } from "@/lib/formConfig";
import type { UseFormReturn } from "react-hook-form";
import type { LoginFormData, RegisterFormData } from "@/lib/authSchema";

interface FormContentProps {
  form: UseFormReturn<RegisterFormData | LoginFormData>;
  fields: FormFieldConfig[];
  formType: "register" | "login";
  onSubmit: (data: RegisterFormData | LoginFormData) => void;
}

export function FormContent({ form, fields, formType, onSubmit }: FormContentProps) {
  return (
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
                  <Input type={field.type} placeholder={field.placeholder} {...formField} />
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
  );
}
