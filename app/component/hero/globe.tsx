import Image from "next/image";
import GlobeImg from "@/public/Bimage/SVGs/Globe Component.svg";

import logo1 from "@/public/Bimage/SVGs/icon 1.svg";
import logo2 from "@/public/Bimage/SVGs/icon 2.svg";
import logo3 from "@/public/Bimage/SVGs/icon 3.svg";
import logo4 from "@/public/Bimage/Images/SEO.jpg";
import logo5 from "@/public/Bimage/Images/image__API_-removebg-preview.png";
import logo6 from "@/public/Bimage/Images/Search.jpg";

export default function Globe() {
  return (
    <>
      <section className=" md:w-1/3">
        <div className="relative">
          <Image
            alt="globle image"
            src={GlobeImg}
            className="bg-amber-400/30 rounded-4xl w-[80%] md:w-full mx-auto "
          ></Image>
          <div className="flex solid justify-evenly absolute w-full bottom-[-20px]">
            <Image alt="globle image" src={logo1} className=""></Image>
            <Image alt="globle image" src={logo2} className=""></Image>
            <Image alt="globle image" src={logo3} className=""></Image>
          </div>
          <Image
            alt="globle image"
            src={logo4}
            className="absolute md:top-[-60px] top-[0px] md:right-0 right-[20px] w-[100px]"
          ></Image>
          <Image
            alt="globle image"
            src={logo5}
            className="absolute md:top-[-60px] top-[-40px] left-[-20px]  w-[150px]"
          ></Image>
          <Image
            alt="globle image"
            src={logo6}
            className="absolute top-[60%] transform translate-y-[-50%] md:left-[-50px] left-[-10px] w-[100px]"
          ></Image>
        </div>
      </section>
    </>
  );
}
