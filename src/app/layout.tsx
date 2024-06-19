import type { Metadata } from "next";
import "./globals.css";
import { type_second } from "@/functions/fonts";
import Header from "@/components/header";
import Footer from "@/components/footer";
import type { ReactNode } from "react";
import userGet from "@/actions/user-get";
import { User } from "@/interfaces/user";
import { UserContextProvider } from "@/context/user-context";

export const metadata: Metadata = {
  title: "Doggy Net",
  description: "Social network for dogs",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const { data: user } = (await userGet()) as { data: User };

  return (
    <html lang="en">
      <body className={type_second.variable}>
        <UserContextProvider user={user}>
          <div className="App">
            <Header />
            <main className="AppBody">{children}</main>
            <Footer />
          </div>
        </UserContextProvider>
      </body>
    </html>
  );
}
