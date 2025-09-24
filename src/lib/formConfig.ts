export interface FormFieldConfig {
  name: "email" | "password" | "confirmPassword" | "name";
  label: string;
  type: string;
  placeholder: string;
}

export const loginFields: FormFieldConfig[] = [
  {
    name: "email",
    label: "Email",
    type: "email",
    placeholder: "Enter your email",
  },
  {
    name: "password",
    label: "Password",
    type: "password",
    placeholder: "Enter your password",
  },
];

export const registerFields: FormFieldConfig[] = [
  ...loginFields,
  {
    name: "confirmPassword",
    label: "Confirm Password",
    type: "password",
    placeholder: "Confirm your password",
  },
  {
    name: "name",
    label: "Name",
    type: "text",
    placeholder: "Enter your name",
  },
];

export const getFormFields = (formType: "register" | "login"): FormFieldConfig[] => {
  return formType === "register" ? registerFields : loginFields;
};
