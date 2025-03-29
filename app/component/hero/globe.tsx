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
      <section className=" w-1/3">
        <div className="relative">
          <Image
            alt="globle image"
            src={GlobeImg}
            className="bg-amber-400/30 rounded-4xl w-full "
          ></Image>
          <div className="flex solid justify-evenly absolute w-full bottom-[-20px]">
            <Image alt="globle image" src={logo1} className=""></Image>
            <Image alt="globle image" src={logo2} className=""></Image>
            <Image alt="globle image" src={logo3} className=""></Image>
          </div>
          <Image alt="globle image" src={logo4} className="absolute top-[-60px] right-0"></Image>
          <Image alt="globle image" src={logo5} className="absolute top-[-60px]"></Image>
          <Image alt="globle image" src={logo6} className="absolute top-[50%] transform translate-y-[-50%] left-[-50px]"></Image>
        </div>
      </section>
    </>
  );
}
