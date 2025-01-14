import Image from "next/image";

export default function BrandSection() {
    return (
      <article className="relative overflow-hidden py-16 whitespace-nowrap bg-black">
        <div className="absolute inset-y-0 left-0 w-64 bg-gradient-to-l from-transparentBlack to-fullBlack z-10 pointer-events-none"></div>


        <div className="flex justify-between items-center inline-block animate-marquee">
            <div className="inline-block px-8">
                <Image src={"/cars-logo/9807_McLaren_Logo.png"} alt={"logo maclaren"} width={200} height={200}/>
            </div>

            <div className="inline-block px-8">
                <Image src={"/cars-logo/778270e3447e1c123e72a4fa4e9a827e.png"} alt={"logo maclaren"} width={200} height={200}/>
            </div>

            <div className="inline-block px-8">
                <Image src={"/cars-logo/1686109983toyota-car-logo-551086012.png"} alt={"logo maclaren"} width={200} height={200}/>
            </div>

            <div className="inline-block px-8">
                <Image src={"/cars-logo/acura_PNG76-1142256518.png"} alt={"Acura logo "} width={200} height={200}/>   
            </div>

            <div className="inline-block px-8">
                <Image src={"/cars-logo/Alpine-logo-1440x900-grand.png"} alt={"alpine logo "} width={200} height={200}/>    
            </div>

            <div className="inline-block px-8">
                <Image src={"/cars-logo/aston_martin_PNG48-3602338575.png"} alt={"aston martin logo "} width={200} height={200}/>    
            </div>

            <div className="inline-block px-8">
                <Image src={"/cars-logo/BMW_logo_(gray).svg.png"} alt={"BMW logo "} width={200} height={200}/>
            </div>

            <div className="inline-block px-8">
                <Image src={"/cars-logo/Buick-Logo.png"} alt={"Buick logo "} width={200} height={200}/>      
            </div>

            <div className="inline-block px-8">
                <Image src={"/cars-logo/Chevrolet-Logo.png"} alt={"Chevrolet logo "} width={200} height={200}/>    
            </div>

            <div className="inline-block px-8">
                <Image src={"/cars-logo/Dodge_logo_2010.png"} alt={"Dodge logo "} width={200} height={200}/>      
            </div>
          

            <div className="inline-block px-8">
                <Image src={"/cars-logo/ferrari-logo-750x1100-grand.png"} alt={"ferrari logo "} width={200} height={200}/>     
            </div>

            <div className="inline-block px-8">
                <Image src={"/cars-logo/Ford-Motor-Company-Logo.png"} alt={"Ford logo "} width={200} height={200}/>        
            </div>       
            
        </div>

        <div className="absolute inset-y-0 right-0 w-64 bg-gradient-to-r from-transparentBlack to-fullBlack z-10 pointer-events-none"></div>
      </article>
    );
  }
  