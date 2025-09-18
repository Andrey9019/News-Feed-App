import AuthForm from "@/components/auth/AuthForm";

export default function RegisterPage() {
  return (
    <div className="flex pt-16 items-center justify-center ">
      <div className="w-full max-w-md space-y-8 rounded-lg bg-white p-6 shadow-md">
        <h2 className="text-center text-2xl font-bold">Register</h2>
        <AuthForm formType="register" />
      </div>
    </div>
  );
}
