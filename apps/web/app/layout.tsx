import Footer from "@/src/feature/layout/Footer";
import Header from "@/src/feature/layout/Header";
import clsx from "clsx";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";


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

        <article className="flex justify-around items-center p-4 h-[500px]">

          <Link href={"https://github.com/oshio10"} className="relative group block w-[400px]  mx-auto">
            <div className="relative bg-gray-900 text-white rounded overflow-hidden shadow-lg">
              <Image src="/icons/profil.png" alt="profile" width={200} height={200} className="object-cover"/>
              <h2 className="text-center text-xl font-bold p-4">Developer</h2>

              <div className="absolute inset-0 bg-gray-800 bg-opacity-90 flex flex-col items-center justify-center text-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-lg font-semibold mb-2">About Me</h3>
                <p className="text-sm">
                  Passionate developer specializing in web and mobile applications. 
                  Loves solving complex problems and building amazing user experiences.
                </p>
              </div>
            </div>
          </Link>


          <Link href={"https://github.com/mohamed-rahmani"} className="block w-[400px] overflow-hidden group ">
            <div className="relative bg-gray-900 text-white rounded shadow-lg transition-all duration-300 group-hover:h-[350px]   ">
              <Image src="/icons/profil.png" alt="profile" width={200} height={200} className="object-cover"/>
              <div className="absolute bottom-0 w-full bg-gradient-to-t from-gray-900 to-transparent p-4">
                <h2 className="text-center text-xl font-bold">Developer</h2>
              </div>

              <div className="absolute left-0 right-0 top-[200px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
              <p className="text-sm text-gray-300">
                  Passionate developer specializing in web and mobile applications. 
                  Loves solving complex problems and building amazing user experiences.
                </p>
              </div>
            </div>
          </Link>


          <Link href={"https://github.com/K-Yann-K"} className="relative group block w-[400px]  mx-auto">
            <div className="relative bg-gray-900 text-white rounded overflow-hidden shadow-lg">
              <Image src="/icons/profil.png" alt="profile" width={200} height={200} className="object-cover"/>
              <h2 className="text-center text-xl font-bold p-4">Developer</h2>

              <div className="absolute inset-0 bg-gray-800 bg-opacity-90 flex flex-col items-center justify-center text-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-lg font-semibold mb-2">About Me</h3>
                <p className="text-sm">
                  Passionate developer specializing in web and mobile applications. 
                  Loves solving complex problems and building amazing user experiences.
                </p>
              </div>
            </div>
          </Link>

          <Link href={"https://github.com/vithurzen"} className="block w-[400px] overflow-hidden group ">
            <div className="relative bg-gray-900 text-white rounded shadow-lg transition-all duration-300 group-hover:h-[350px]   ">
              <Image src="/icons/profil.png" alt="profile" width={200} height={200} className="object-cover"/>

              <div className="absolute bottom-0 w-full bg-gradient-to-t from-gray-900 to-transparent p-4">
                <h2 className="text-center text-xl font-bold">Developer</h2>
              </div>

              <div className="absolute left-0 right-0 top-[200px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
              <p className="text-sm text-gray-300">
                  Passionate developer specializing in web and mobile applications. 
                  Loves solving complex problems and building amazing user experiences.
                </p>
              </div>
            </div>
          </Link>
        </article>

        <Footer/>

      </body>
    </html>
  );
}
