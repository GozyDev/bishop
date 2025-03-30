import Image from "next/image";
import GlobeImg from "@/public/Bimage/SVGs/Globe Component.svg";
import logo1 from "@/public/Bimage/SVGs/icon 1.svg";
import logo2 from "@/public/Bimage/SVGs/icon 2.svg";
import logo3 from "@/public/Bimage/SVGs/icon 3.svg";
import logo4 from "@/public/Bimage/Images/img 1.png";
import logo5 from "@/public/Bimage/Images/Coding and api on laptop.png";
import logo6 from "@/public/Bimage/Images/Search.png";



export default function Globe() {
  return (
    <>
      <section className=" md:w-2/3 xl:w-1/3">
        <div className="relative">
          <Image
            alt="globle image"
            src={GlobeImg}
            className="bg-amber-400/30 rounded-4xl w-[80%] md:w-full mx-auto "
          ></Image>
          <div className="flex solid justify-evenly absolute w-full bottom-[-20px] ">
            <Image alt="globle image" src={logo1} className=""></Image>
            <Image alt="globle image" src={logo2} className=""></Image>
            <Image alt="globle image" src={logo3} className=""></Image>
          </div>
          <div className="md:block">
            <Image
              alt="globle image"
              src={logo4}
              className="absolute md:top-[30px] top-[20px] md:right-0 right-[20px] w-[100px] md:w-[150px]"
            ></Image>
            <Image
              alt="globle image"
              src={logo5}
              className="absolute md:top-[-40px] top-[-10px] left-[10px]  w-[100px] md:w-[200px]"
            ></Image>
            <Image
              alt="globle image"
              src={logo6}
              className="absolute top-[60%] transform translate-y-[-50%] md:left-[-50px] left-[10px] w-[70px] md:w-[120px]"
            ></Image>
          </div> 
        </div>
      </section>
    </>
  );
}
