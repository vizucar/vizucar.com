import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className=" flex flex-col sm:flex-row items-center justify-between pt-4 pb-4 pl-8 pr-8 bg-[#181516]">
      <div className="relative group">
        <Link href={"/"}>
          <Image
            src={"/vizucar-logo/vizucar.com-bg-gray.png"}
            alt="vizucar.com"
            width={130}
            height={100}
            className="w-[110px] mb-5 sm:w-[130px]"
          />
        </Link>
        <p className="w-full text-center italic absolute top-[50%] left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-y-2 text-white text-xxs sm:text-xs font-medium transition-all duration-300">
          Visualize the car of your dream
        </p>
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex justify-between text-xm">
          <div>
            <ul className="flex flex-col gap-4">
              <li className="pb-2">
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
        <div className="flex mt-2 gap-10 text-xs text-gray-500">
          <p>This website is open-source</p>
          <p>Copyright © 2024 Vizucar Org</p>
        </div>
      </div>
    </footer>
  );
}
