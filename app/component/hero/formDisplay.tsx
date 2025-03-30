import Search from "@/public/Bimage/SVGs/Search svg.svg";
import Quote from "@/public/Bimage/SVGs/quote svg.svg";
import Image from "next/image";
const list = [
  {
    name: "Domain",
    text: "dalynews.com",
  },
  {
    name: "Availability",
    text: "unavailable",
  },
  {
    name: "Lenght",
    text: "9",
  },
  {
    name: "Age",
    text: "24 Years 11 months 1 days",
  },
  {
    name: "Spelling",
    text: "Very Easy",
  },
  {
    name: "Pronounceability",
    text: "10",
  },
];
export default function FormDisplay() {
  return (
    <>
      <section className=" px-2 max-w-2xl mx-auto space-y-8">
        <div className="relative">
          <Image
            src={Search}
            alt="search-icon"
            className="absolute left-2.5 top-[50%] transform translate-y-[-50%]"
          ></Image>
          <input
            type="text"
            placeholder="Check a domain eg.domain.com"
            className="w-full py-5 pl-[45px] pr-[20px] rounded-2xl bg-white "
          />
          <button className="absolute right-2.5 top-[50%] transform translate-y-[-50%] bg-black/90 text-white py-3 px-8 rounded-full">
            Check
          </button>
        </div>

        <div className=" bg-white h-80 rounded-2xl overflow-y-scroll">
          <div className="p-3">
            <ul className="space-y-5">
              {list.map((li) => (
                <div key={li.text} className="flex items-center  gap-3 p-2.5 hover:bg-green-50 cursor-pointer">
                    <Image src={Quote} alt="quote"></Image>
                  <li>
                  <span className="">{li.name}</span> : <span className="text-green-700">&quot;{li.text}&quot;</span>
                  </li>
                </div>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
