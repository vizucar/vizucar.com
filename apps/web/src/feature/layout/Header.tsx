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
      <nav className="flex items-center gap-20 font-bold text-2xl">
        <Link href={"#how-it-works"}>How it works</Link>
        <Link href={"#team"} className="hover:text-blue-500">Team</Link>
        <Link href={"https://github.com/vizucar"}>
          <Image
            src={"/icons/github.png"}
            alt="vizucar.com logo"
            width={65}
            height={60}
          />
        </Link>
      </nav>
    </header>
  );
}
