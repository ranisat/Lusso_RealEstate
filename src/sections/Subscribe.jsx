import { Element } from "react-scroll"
const Subscribe = () => {
  return (
    <section className="relative z-10 px-8 ">
    <Element name="faboulous">
      <div className="max-lg:block flex items-center justify-between">
      <div className="max-lg:w-full w-3/4 relative">
        <div className="section-title ">
          <h1 className="m-0 p-0 text-[14vw] max-lg:text-[18vw] max-lg:tracking-[-6px] tracking-[-12px] max-lg:-mt-2 -mt-8 font-black">
            Subscribe
          </h1>
        </div>
        </div>
        <div className="max-lg:w-full w-1/4 relative">
        <p className="text-[16px] text-black text-right font-medium">If homes had personalities, we'd be the matchmakers!</p>
        </div>
        </div>
        </Element>
        </section>
  )
}

export default Subscribe
