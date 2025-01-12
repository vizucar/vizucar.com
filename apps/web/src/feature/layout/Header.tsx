import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-32">
      <div>
        <Link href={"/"}>
          <Image
            src={"/vizucar-logo/vizucar.com-bg-black.png"}
            alt="vizucar.com logo"
            width={350}
            height={10}
          />
        </Link>
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
