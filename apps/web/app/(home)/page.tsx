import Image from "next/image";

export default function page() {
  return (
  <div className="h-screen w-[800px] absolute top-[210%] left-1.2/10">
    {/* retirer les valeurs statiques w-[800px] et w-[750px] => responsivité */}
      <Image
        src={"/vizucar-logo/vizucar-bg-short-black.png"}
        alt="vizucar logo"
        width={750}
        height={20}
      />
      <p className="text-5xl mb-10">
        Vizucar is a free & open-source car selector that has
        more than <span className="text-white font-bold">144 car brands</span>
      </p>
      <div className="flex items-center justify-between w-[750px]">
        <button className="bg-red-600 text-white px-4 py-4 w-[45%] flex items-center justify-center gap-4 rounded-xl transition-all duration-300 hover:bg-red-500">
          <div className="bg-white p-1  rounded">
            <Image
              src={"/icons/windows.png"}
              alt="window's logo by Smashicons"
              width={35}
              height={35}
            />
          </div>
          <p className="text-3xl">Download</p>
        </button>
        <button className="bg-red-600 text-white py-4 w-[45%] flex items-center justify-center gap-4 rounded-xl transition-all duration-300 hover:bg-red-500">
          <div className="bg-white p-1 rounded">
            <Image
              src={"/icons/linux.png"}
              alt="linux's logo by Freepik"
              width={35}
              height={35}
            />
          </div>
          <p className="text-3xl">Download</p>
        </button>
      </div>
  </div>
  );
}
