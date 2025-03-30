import Globe from "@/app/component/hero/globe";
import PaternerImages from "@/app/component/hero/partner";
import FormDisplay from "@/app/component/hero/formDisplay";
import Cards from "@/app/component/hero/cards";
export default function BishoHomePage() {
  return (
    <>
      <section className="space-y-24 bg-gray-100/90 pt-20 px-5 md:px-11 md:pt-28 pb-28">
        <section className="flex flex-col md:flex-row justify-between items-center gap-15 md:gap-5">
          <section className="md:w-2/3  space-y-10">
            <div className="space-y-6 text-center md:text-left">
              <h1 className="text-4xl md:text-7xl font-bold text-gray-900">
                A wide range of effective domain name and SEO tools
              </h1>
              <p className="text-md md:text-2xl font-normal text-gray-700">
                Empower your domain investing business with the most advanced and
                powerful tools and services
              </p>
            </div>
            <div className="flex  flex-col  gap-10">
              <div className="flex gap-2 md:gap-5 justify-center md:justify-start">
                <button className="bg-amber-400/50 py-2 px-5 rounded font-medium">
                  Try Bishop for Free
                </button>
                <button className="border-black border py-2 px-5 rounded">
                  login
                </button>
              </div>
              <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-3 md:gap-10">
                <p className="text-sm text-gray-500">
                  Trusted by
                  leading Companies
                </p>
                <div className="flex gap-5 items-center">
                <PaternerImages/>
                </div>
              </div>
            </div>
          </section>
          <Globe/>
        </section>
        <FormDisplay></FormDisplay>
      </section>

      <section className="py-28 px-3 md:px-11">
        <div className="space-y-20">
          <div className="text-center space-y-5">
            <h2 className="text-3xl md:text-5xl text-gray-900 max-w-4xl mx-auto font-semibold">Unlock the power of data driven domain management</h2>
            <p className="text:sm md:text-lg  text-gray-500">stay informed ,monitor trend , and make smarter domain decisions with cutting edge tools and real time insight</p>
          </div>
          <div className="md:px-[10px]">
            <Cards></Cards>
          </div>
        </div>
      </section>
    </>
  );
}
