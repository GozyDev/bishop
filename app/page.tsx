import Globe from "@/app/component/hero/globe";
import PaternerImages from "@/app/component/hero/partner";
export default function BishoHomePage() {
  return (
    <>
      <section className="flex justify-between items-center gap-5">
        <section className="w-2/3  space-y-10 ">
          <div className="space-y-6">
            <h1 className="text-7xl font-bold text-gray-900">
              A wide range of effective domain name and SEO tools
            </h1>
            <p className="text-2xl font-normal text-gray-700">
              Empower your domain investing business with the most advanced and
              powerful tools and services
            </p>
          </div>

          <div className="flex  flex-col  gap-10">
            <div className="flex gap-5">
              <button className="bg-amber-400/50 py-2 px-5 rounded font-medium">
                Try Bishop for Free
              </button>
              <button className="border-black border py-2 px-5 rounded">
                login
              </button>
            </div>
            <div className="flex items-center gap-10">
              <p className="text-sm text-gray-500">
                Trusted by
                <br />
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

      <section>
      </section>
    </>
  );
}
