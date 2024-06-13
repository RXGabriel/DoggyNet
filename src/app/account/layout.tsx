import AccountHeader from "@/components/account/account-header";
import { ReactNode } from "react";

export default async function AccountLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="container">
      <AccountHeader />
      {children}
    </div>
  );
}
