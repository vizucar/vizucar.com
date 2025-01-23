import Footer from "@/src/feature/layout/Footer";
import { TeamSection } from "@/src/feature/layout/TeamSection";
import Header from "@/src/feature/layout/Header";
import clsx from "clsx";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import BrandSection from "@/src/feature/layout/BrandSection";

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
      <section className="relative h-screen">
          <div className="absolute top-0 right-0 w-8/10 h-full bg-[url('/audi-r8-rouge.jpg')] bg-cover bg-no-repeat bg-custom-zoom max-[1900px]:bg-none"></div>
          {/* retirer la valeurs statiques du background en fonction du main == page.tsx*/}

          <div className="relative z-10 ">
            <Header />
            <main className="w-2/5">{children}</main>
          </div>
        </section>
        
        <BrandSection />

        <section className="bg-gradient-to-b from-black to-[#161414]  text-center text-white p-4 h-full flex flex-col items-center">
          <h1 id="how-it-works" className="text-7xl font-bold mt-[100px]">How does it Works</h1>
            <p className="text-gray-100 text-4xl mt-[100px] w-full sm:w-[500px] md:w-[600px] lg:w-[700px]">
              Vizucar allows his user to search a car among thousands of vehicles.
              All of this is possible due to the Vizucar API
            </p>
        </section>

        <section className="bg-[#161414] p-4 h-full flex items-center justify-center">
          <Image className="rounded mt-[100px] mb-[100px]"
            src={"/vizucar-visual.png"}
            alt="interface of vizucar (beta)"
            width={1000}
            height={1020}
          />
        </section>

        <section className="bg-gradient-to-b from-[#161414] to-black text-cente p-4 h-full flex flex-col items-center justify-center">
          <h1 id="team" className="text-7xl font-bold">Team</h1>
        </section>

        <TeamSection/>

        <Footer/>

      </body>
    </html>
  );
}
