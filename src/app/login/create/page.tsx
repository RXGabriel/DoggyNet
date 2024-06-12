import LoginCreateForm from "@/components/login/login-create-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up | Doggy Net",
  description: "Create your account",
};

export default async function CreatePage() {
  return (
    <div className="animeLeft">
      <h1 className="title">Sign Up</h1>
      <LoginCreateForm />
    </div>
  );
}
