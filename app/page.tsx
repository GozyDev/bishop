import Globe from "@/app/component/hero/globe";
import PaternerImages from "@/app/component/hero/partner";
import FormDisplay from "@/app/component/hero/formDisplay";
import Cards from "@/app/component/hero/cards";
import Starts from "@/app/component/hero/stats";
export default function BishoHomePage() {
  return (
    <>
      <section className="space-y-24 bg-gray-100/90 pt-20 px-5 md:px-11 md:pt-28 pb-28">
        <section className="flex flex-col md:flex-row justify-between items-center gap-20 md:gap-5">
          <section className="md:w-2/3  space-y-5">
            <div className="space-y-6 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-[60px] xl:text-[75px] font-bold text-gray-900">
                A wide range of effective domain name and SEO tools
              </h1>
              <p className="text-md md:text-xl lg:text-2xl font-normal md:w-[90%] text-gray-700">
                Empower your domain investing business with the most advanced
                and powerful tools and services
              </p>
            </div>
            <div className="flex  flex-col  gap-10">
              <div className="flex gap-2 md:gap-5 justify-center md:justify-start">
                <button className="bg-amber-400/50 py-2 px-5 rounded font-medium flex items-center justify-center gap-3">
                  Try Bishop for Free{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg>
                </button>
                <button className="border-black border py-2 px-5 rounded">
                  login
                </button>
              </div>
              <div className="flex flex-col-reverse md:flex-row items-center justify-center md:justify-start gap-3 md:gap-10">
                <p className="text-[12px] sm:text-sm text-gray-500">
                  Trusted by leading Companies
                </p>
                <div className="flex gap-5 items-center">
                  <PaternerImages />
                </div>
              </div>
            </div>
          </section>
          <Globe />
        </section>
        <FormDisplay></FormDisplay>
      </section>

      <section className="py-28 px-3 md:px-11">
        <div className="space-y-10">
          <div className="text-center space-y-5">
            <h2 className="text-3xl md:text-5xl text-gray-900 max-w-4xl mx-auto font-semibold">
              Unlock the power of data driven domain management
            </h2>
            <p className="text:sm md:text-lg  text-gray-500">
              stay informed ,monitor trend , and make smarter domain decisions
              with cutting edge tools and real time insight
            </p>
          </div>
          <div className="md:px-[10px]">
            <Cards></Cards>
          </div>
        </div>
      </section>

      <section className="py-20 px-2 md:px-11 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8  bg-white/50 hover:bg-white transition-all duration-300 shadow-sm hover:shadow-lg rounded-xl">
            <Starts number="400M" text="Registered domain names" />
            <Starts number="4M" text="Past domain sales" />
            <Starts number="12K" text="Daily lookups" />
            <Starts number="400M" text="Daily API requests" />
          </div>
        </div>
      </section>
    </>
  );
}
