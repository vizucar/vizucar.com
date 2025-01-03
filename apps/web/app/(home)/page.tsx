import Image from "next/image";

export default function page() {
  return (
  <div className=" h-screen">
    <Image
      src={"/vizucar-logo/vizucar-bg-black.png"}
      alt="vizucar logo"
      width={600}
      height={120}
    />
    <p className="text-gray-300">
      Vizucar is a free & open-source car selector that has
      more than <span className="text-white font-bold">144 car brands</span>
    </p>
    <div className="flex items-center justify-between">
    <button className="bg-red-500 text-white px-4 py-2 flex items-center gap-2 rounded">
        <div className="bg-white p-1 rounded">
          <Image
            src={"/icons/windows.png"}
            alt="window's logo by Smashicons"
            width={25}
            height={25}
          />
        </div>
        Download
      </button>
      <button className="bg-red-500 text-white px-4 py-2 flex items-center gap-2 rounded">
        <div className="bg-white p-1 rounded">
          <Image
            src={"/icons/linux.png"}
            alt="linux's logo by Freepik"
            width={25}
            height={25}
          />
        </div>
        Download
      </button>
    </div>
  </div>
  );
}
