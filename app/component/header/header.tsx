import Quote from "@/public/Bimage/SVGs/bishoplogo.svg";
import Image from "next/image";

export default function Header() {
  return (
    <>
      <header className="flex justify-between items-center px-11 shadow py-6">
        <Image src={Quote} alt="bishop-logo" className="w-[130px]"></Image>
        <nav className="">
          <ul className="flex gap-6.5 text-md font-medium">
            <li>Feature + </li>
            <li>Domains</li>
            <li>Pricing</li>
            <li>Contact</li>
            <li>Resources +</li>
          </ul>
        </nav>

        <div className="text-sm font-medium flex gap-1.5">
          <button className="bg-gray-400/30 py-2 px-5 rounded">login</button>
          <button className="bg-amber-400/50 py-2 px-5 rounded">Get Started</button>
        </div>
      </header>
    </>
  );
}
