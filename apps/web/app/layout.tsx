import Footer from "@/src/feature/layout/Footer";
import Header from "@/src/feature/layout/Header";
import clsx from "clsx";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";


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
          <div className="absolute top-0 right-0 w-8/10 h-full bg-[url('/audi-r8-rouge.jpg')] bg-cover bg-no-repeat bg-[length:130%]"></div>

          <div className="relative z-10 ">
            <Header />
            <main className="w-2/5">{children}</main>
          </div>
        </section>
        
        <article className="flex justify-between items-center p-4 gap-4">
          <Image src={"/cars-logo/9807_McLaren_Logo.png"} alt={"logo maclaren"} width={200} height={200}/>
          <Image src={"/cars-logo/778270e3447e1c123e72a4fa4e9a827e.png"} alt={"logo maclaren"} width={200} height={200}/>
          <Image src={"/cars-logo/1686109983toyota-car-logo-551086012.png"} alt={"logo maclaren"} width={200} height={200}/>
          <Image src={"/cars-logo/acura_PNG76-1142256518.png"} alt={"Acura logo "} width={200} height={200}/>
          <Image src={"/cars-logo/Alpine-logo-1440x900-grand.png"} alt={"alpine logo "} width={200} height={200}/>
          <Image src={"/cars-logo/aston_martin_PNG48-3602338575.png"} alt={"aston martin logo "} width={200} height={200}/>
          <Image src={"/cars-logo/BMW_logo_(gray).svg.png"} alt={"BMW logo "} width={200} height={200}/>
          <Image src={"/cars-logo/Buick-Logo.png"} alt={"Buick logo "} width={200} height={200}/>
          <Image src={"/cars-logo/Chevrolet-Logo.png"} alt={"Chevrolet logo "} width={200} height={200}/>
          <Image src={"/cars-logo/Dodge_logo_2010.png"} alt={"Dodge logo "} width={200} height={200}/>
          <Image src={"/cars-logo/ferrari-logo-750x1100-grand.png"} alt={"ferrari logo "} width={200} height={200}/>
          <Image src={"/cars-logo/Ford-Motor-Company-Logo.png"} alt={"Ford logo "} width={200} height={200}/>
        </article>


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











        <div className="bg-gradient-to-b from-black via-[#161414] to-black">
          <section className="text-white p-4">Section</section>
        </div>
        <Footer />
      </body>
    </html>
  );
}
