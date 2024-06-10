import type { Metadata } from "next";
import "./globals.css";
import { type_second } from "@/functions/fonts";
import Header from "@/components/header";

export const metadata: Metadata = {
  title: "Doggy Net",
  description: "Social network for dogs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={type_second.variable}>
        <Header />
        {children}
      </body>
    </html>
  );
}
