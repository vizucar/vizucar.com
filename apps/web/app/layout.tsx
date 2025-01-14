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
          <div className="absolute top-0 right-0 w-8/10 h-full bg-[url('/audi-r8-rouge.jpg')] bg-cover bg-no-repeat bg-[length:125%]"></div>

          <div className="relative z-10 ">
            <Header />
            <main className="w-2/5">{children}</main>
          </div>
        </section>
        
        <BrandSection />


        <article className="flex justify-between items-center p-4 gap-4">
          <Image src={"/cars-logo/gmc-logo.png"} alt={"GMC logo "} width={200} height={200}/>
          <Image src={"/cars-logo/honda-logo-png-picture-20.png"} alt={"Honda logo "} width={200} height={200}/>
          <Image src={"/cars-logo/lamborghini_PNG10709-4027778433.png"} alt={"Lamborghini logo "} width={200} height={200}/>
          <Image src={"/cars-logo/Logo-Renault.png"} alt={"Renault logo"} width={200} height={200}/>
          <Image src={"/cars-logo/MBG.DE-da0d7ae5.png"} alt={"Mercedes Benz logo "} width={200} height={200}/>
          <Image src={"/cars-logo/Mercedes-AMG_logo_(grey).png"} alt={"Mercedes AMG logo "} width={200} height={200}/>
          <Image src={"/cars-logo/nissan-logo-1-3703895588.png"} alt={"Nissan logo "} width={200} height={200}/>
          <Image src={"/cars-logo/peugeot-logo-eps-png-peugeot-logo-hd-png-meaning-information-2200-1097620236.png"} alt={"Peugeot logo "} width={200} height={200}/>
          <Image src={"/cars-logo/Porsche-Logo.png"} alt={"Porsche logo "} width={200} height={200}/>
          <Image src={"/cars-logo/Red-Bull-Logo.png"} alt={"RedBull logo "} width={200} height={200}/>
          <Image src={"/cars-logo/Tesla_T_symbol.svg.png"} alt={"Tesla logo "} width={200} height={200}/>
          <Image src={"/cars-logo/Volkswagen-logo-2019-1500x1500-grand.png"} alt={"Volkswagen logo "} width={200} height={200}/>
        </article>

        <section className="bg-gradient-to-b from-black to-[#161414]  text-center text-white p-4 h-full flex flex-col items-center">
          <h1 id="how-it-works" className="text-7xl font-bold mt-[100px]">How does it Works</h1>
            <p className="text-gray-100 text-4xl mt-[100px] w-[700px]">
              Vizucar allows his user to search a car among thousands of vehicles.
              All of this is possible due to the Vizucar API
            </p>
        </section>

        <section className="bg-[#161414] p-4 h-full flex items-center justify-center">
          <Image className="rounded mt-[100px] mb-[100px]"
            src={"/vizucar-visual.png"}
            alt="window's logo by Smashicons"
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
