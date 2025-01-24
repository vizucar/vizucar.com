import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-32">
      <div className="relative group">
        <Link href={"/"}>
          <Image
            src={"/vizucar-logo/vizucar.com-bg-black.png"}
            alt="vizucar.com logo"
            width={350}
            height={10}
          />
        </Link>
        <p className="w-full text-center italic absolute top-[70%] left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-y-2 text-white text-xl font-medium transition-all duration-300">
          Visualize the car of your dream
        </p>
      </div>
      <nav className="flex items-center gap-20 text-3xl">
        <Link href={"#how-it-works"} className="font-medium transition-all duration-300 hover:font-bold">How it works</Link>
        <Link href={"#team"} className="font-medium transition-all duration-300 hover:font-bold">Team</Link>
        <Link href={"https://github.com/vizucar"}>
          <Image
            src={"/icons/github.png"}
            alt="vizucar.com logo"
            width={65}
            height={60}
            className="transition-transform duration-300 hover:scale-110"
          />
        </Link>
        
      </nav>
    </header>
  );
}
