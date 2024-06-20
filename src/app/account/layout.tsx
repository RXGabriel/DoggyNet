import AccountHeader from "@/components/account/account-header";
import type { ReactNode } from "react";

export default async function AccountLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <section className="container">
      <AccountHeader />
      {children}
    </section>
  );
}
