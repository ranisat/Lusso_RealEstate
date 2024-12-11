import { Element } from "react-scroll"
const Foryou = () => {
  return (
    <section className="relative z-10 px-5">
    <Element name="faboulous">
      <div className="max-lg:block flex items-center justify-between gap-3  max-lg:mt-3">
        <div className="max-lg:w-full w-1/2 order-first">
          <div className="max-lg:w-[250px] inline w-2/4 mb-5">
            <p className="text-[14px] max-lg:text-[14px] w-full text-right text-black font-medium pb-2">
              Real estate for your world, you<br/> deserve a home you love
            </p>
          </div>
          <div className="max-lg:w-full w-full border-t border-t-orange-600 pt-5">
            <div className="flex items-center justify-between">
              <div className=" text-right">
                <p className="text-[14px] max-lg:text-[14px] w-full text-left text-black font-medium">
                  Here to help you own your future <br/>let's get you all the way home
                </p>
              </div>
              <div className="max-lg:hidden block">
                <button className="border-2 border-black/100 px-4 py-1.5 rounded-full transition-all duration-500 hover:bg-cyan-950 hover:text-white">
                  View all
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="section-title max-lg:w-full w-1/2 max-lg:order-first order-last">
          <h1 className="m-0 p-0 text-[12vw] max-lg:text-[18vw] max-lg:tracking-[-4px] tracking-[-10px] max-lg:-mt-2 -mt-12 font-black">
            For You
          </h1>
        </div>
      </div>
      </Element>
      </section>
  )
}

export default Foryou
