import Image from "next/image";
import logo1 from "@/public/Bimage/Images/logo 1.jpg";
import logo2 from "@/public/Bimage/Images/logo 2.jpg";
import logo3 from "@/public/Bimage/Images/logo 3.jpg";
import logo4 from "@/public/Bimage/Images/logo 4.jpg";
import logo5 from "@/public/Bimage/Images/logo 5.jpg";
const patnersImage = [
  {
    src: logo1,
    alt: "logo 1",
  },
  {
    src: logo2,
    alt: "logo 2",
  },
  {
    src: logo3,
    alt: "logo 3",
  },
  {
    src: logo4,
    alt: "logo 4",
  },
  {
    src: logo5,
    alt: "logo 5",
  },
];

export default function PaternerImages() {
  return (
    <>
      {patnersImage.map((image) => (
        <Image
          key={image.alt}
          src={image.src}
          alt={image.alt}
          className="w-7 md:w-10"
        ></Image>
      ))}
    </>
  );
}
