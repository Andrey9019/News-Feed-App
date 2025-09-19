import AuthForm from "@/components/auth/AuthForm";

export default function RegisterPage() {
  return (
    <div className="flex pt-16 items-center justify-center ">
      <AuthForm formType="register" />
    </div>
  );
}
