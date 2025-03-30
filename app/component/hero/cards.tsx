import Image from "next/image";
import icon1 from "@/public/Bimage/SVGs/icon-1 1.svg";
import icon2 from "@/public/Bimage/SVGs/icon-2 1.svg";
import icon3 from "@/public/Bimage/SVGs/icon-3 1.svg";
import icon4 from "@/public/Bimage/SVGs/icon-4 1.svg";

export default function Cards() {
  const CardData = [
    {
      img: icon1,
      head: "Research based Domain Name Analysis",
      color: "bg-green-100",
      sunHead:
        "We use the latest market research to review and access each domain",
    },
    {
      img: icon2,
      head: "Prompt Notifications",
      color: "bg-blue-100",
      sunHead:
        "Instant notifications and monitoring service allows you to stay ahead of the game",
    },
    {
      img: icon3,
      head: "Data Backend Market Information",
      color: "bg-red-100",
      sunHead:
        "Identify and gain insights into how certain keywords are trending",
    },
    {
      img: icon4,
      head: "Progressive Domain Name Tools",
      color: "bg-yellow-100",
      sunHead: "Our platform is designed for domain discovery and monitoring",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 px-4 sm:px-6 lg:px-8">
      {CardData.map((card) => (
        <div
          key={card.head}
          className={`${card.color} group relative flex flex-col items-center justify-between rounded-3xl p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer`}
        >
          {/* Image Container */}
          <div className="relative w-full h-48 mb-8">
            <Image
              src={card.img}
              alt={card.head}
              fill
              className="object-contain p-4"
            />
          </div>

          {/* Content */}
          <div className="text-center space-y-4">
            <h3 className="text-xl font-bold text-gray-900 lg:text-2xl">
              {card.head}
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">{card.sunHead}</p>
          </div>

          {/* Button */}
          <button
            className="w-full py-3 bg-gray-900 text-white rounded-xl transition-all 
            hover:bg-gray-800 hover:shadow-md active:scale-95"
          >
            Learn More
          </button>
        </div>
      ))}
    </div>
  );
}
