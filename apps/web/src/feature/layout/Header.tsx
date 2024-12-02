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
            width={200}
            height={50}
          />
        </Link>
      </div>
      <nav className="flex items-center gap-20 font-bold">
        <Link href={"#how-it-works"}>How it works ?</Link>
        <Link href={"#team"}>Team</Link>
        <Link href={"https://github.com/vizucar"}>
          <Image
            src={"/icons/github.png"}
            alt="vizucar.com logo"
            width={30}
            height={30}
          />
        </Link>
      </nav>
    </header>
  );
}
