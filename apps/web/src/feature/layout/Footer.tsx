import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className=" flex items-center justify-between p-10 bg-[#181516]">
      <div className="relative group">
        <Link href={"/"}>
          <Image
            src={"/vizucar-logo/vizucar.com-bg-gray.png"}
            alt="vizucar.com"
            width={250}
            height={200}
          />
        </Link>
        <p className="w-full text-center italic absolute top-[70%] left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-y-2 text-white text-xl font-medium transition-all duration-300">
          Visualize the car of your dream
        </p>
      </div>
      <div className="flex flex-col gap-10">
        <div className="flex justify-between text-2xl">
          <div>
            <ul className="flex flex-col gap-4">
              <li className="pb-5">
                <Link href={"#how-it-works"}>How it works</Link>
              </li>
              <li>
                <Link href={"#team"}>Team</Link>
              </li>
            </ul>
          </div>
          <div>
            <Link href={"/policy"}>Terms of use</Link>
          </div>
          <div>
            <Link href={"https://github.com/vizucar"}>Github Org</Link>
          </div>
        </div>
        <div className="flex gap-10 text-xl text-gray-500">
          <p>This website is open-source</p>
          <p>Copyright © 2024 Vizucar Org</p>
        </div>
      </div>
    </footer>
  );
}
