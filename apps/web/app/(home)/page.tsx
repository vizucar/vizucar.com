import Image from "next/image";

export default function page() {
  return (
  <div className="h-screen w-[325px] lg:w-[375px] mt-[260px] sm:mt-[100px] lg:mt-[180px] ml-[30%] sm:ml-[25%]  lg:ml-[30%]">
    {/* modifier les tailles car adaptés lorsque le zoom naviguateur est 50% au lieu de 100%  */}
    <Image
      src={"/vizucar-logo/vizucar-bg-short-black.png"}
      alt="vizucar logo"
      width={375}
      height={10}
    />
    <p className="text-2xl  mt-5 mb-5">
      Vizucar is a free & open-source car selector that has
      more than <span className="text-white font-bold">144 car brands</span>
    </p>
    <div className="flex items-center justify-between w-full">
      <button className="bg-red-600 text-white py-3 w-[45%] flex items-center justify-center gap-3 rounded-xl transition-all duration-300 hover:bg-red-500">
        <div className="bg-white p-1  rounded">
          <Image
            src={"/icons/windows.png"}
            alt="window's logo by Smashicons"
            width={22}
            height={17}
          />
        </div>
        <p className="text-xl">Download</p>
      </button>
      <button className="bg-red-600 text-white py-3 w-[45%] flex items-center justify-center gap-3 rounded-xl transition-all duration-300 hover:bg-red-500">
        <div className="bg-white p-1 rounded">
          <Image
            src={"/icons/linux.png"}
            alt="linux's logo by Freepik"
            width={22}
            height={17}
          />
        </div>
        <p className="text-xl">Download</p>
      </button>
    </div>
  </div>
  );
}
