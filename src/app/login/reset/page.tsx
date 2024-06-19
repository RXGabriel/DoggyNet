import LoginResetForm from "@/components/login/login-reset-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reset | Doggy Net",
  description: "Reset your password",
};

interface ResetSearchParams {
  searchParams: {
    key: string;
    login: string;
  };
}

export default async function ResetPage({ searchParams }: ResetSearchParams) {
  return (
    <div className="animeLeft">
      <h1 className="title">Reset Password</h1>
      <LoginResetForm keyToken={searchParams.key} login={searchParams.login} />
    </div>
  );
}
