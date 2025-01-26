import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between pr-2 pl-2 sm:pl-5 sm:pr-5 md:pl-15 md:pr-15">
      <div className="relative group">
        <Link href={"/"}>
          <Image
            src={"/vizucar-logo/vizucar.com-bg-black.png"}
            alt="vizucar.com logo"
            width={175}
            height={10}
            className="w-[110px] sm:w-[175px]"
          />
        </Link>
        <p className="w-full text-center italic absolute top-[70%] left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-y-2 text-white text-xxs sm:text-xs font-medium transition-all duration-300">
          Visualize the car of your dream
        </p>
      </div>
      <nav className="flex items-center text-xs sm:text-lg  gap-8 sm:gap-12 ">
        <Link href={"#how-it-works"} className="font-medium transition-all duration-300 hover:font-bold">How it works</Link>
        <Link href={"#team"} className="font-medium transition-all duration-300 hover:font-bold">Team</Link>
        <Link href={"https://github.com/vizucar"}>
          <Image
            src={"/icons/github.png"}
            alt="vizucar.com logo"
            width={32}
            height={30}
            className="w-[26px] sm:w-[32px] transition-transform duration-300 hover:scale-110"
          />
        </Link>
        
      </nav>
    </header>
  );
}
