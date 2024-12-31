import Footer from "@/src/feature/layout/Footer";
import Header from "@/src/feature/layout/Header";
import clsx from "clsx";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vizucar.com",
  description: "Landing site for the car selector application Vizucar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={clsx(inter.className, "bg-background")}>
        <section className="bg-[url('/audi-r8-rouge.jpg')] bg-cover bg-no-repeat">
          <Header />
          <main>{children}</main>
        </section>
        <Footer />
      </body>
    </html>
  );
}
