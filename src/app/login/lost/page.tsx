import LoginLostForm from "@/components/login/login-lost-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reset Password | Doggy Net",
  description: "Forgot password",
};

export default async function LostPage() {
  return (
    <div className="animeLeft">
      <h1 className="title">Forgot password?</h1>
      <LoginLostForm />
    </div>
  );
}
