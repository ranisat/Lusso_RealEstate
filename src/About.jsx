import { Element } from "react-scroll";
const About = () => {
  return (
    <section className="relative z-10 px-5">
      <Element name="faboulous">
        <div className="max-lg:block flex items-center justify-between gap-3">
          <div className="section-title max-lg:w-full w-1/2">
            <h1 className="m-0 p-0 text-[16vw] max-lg:text-[24vw] max-lg:tracking-[-4px] tracking-[-14px] max-lg:-mt-2 -mt-12 font-black">
              About
            </h1>
          </div>
          <div className="max-lg:w-full w-1/2">
            <div className="max-lg:w-[250px] w-2/4 mb-5">
              <p className="text-[14px] max-lg:text-[14px] w-full text-left text-black font-medium">
                We build spaces that build home for you, we make house speak
              </p>
            </div>
            <div className="max-lg:w-full w-full border-t border-t-orange-600 pt-5">
              <div className="flex items-center justify-between">
                <div className="max-lg:hidden block">
                  <button className="border border-black/100 px-4 py-1.5 rounded-full transition-all duration-500 hover:bg-cyan-950 hover:text-white">
                    Learn More
                  </button>
                </div>
                <div className="text-right">
                  <p className="text-[14px] max-lg:text-[14px] w-full text-right text-black font-medium">
                    Really proud to be calling this beautiful
                    <br /> home yours, this place really has it all
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative bg-orange-50 max-lg:mt-2 -mt-10">
            <div className="relative">
              <img src="images/images.jpg" alt="" className="w-[80%] mx-auto"/>
              <div className="absolute max-lg:left-10 max-lg:top-4 left-40 top-20">
                 <p className="text-[14px] max-lg:text-[14px] w-full text-left text-black font-medium mb-3">Where those who want the life of <br/>luxury are in good company</p>
                 <p className="text-[14px] max-lg:text-[14px] w-full text-left text-black font-medium">We simplifying your home finding hassles<br/> with hundreds of luxuries properties</p>
              </div>
              
              <div className="section-title absolute z-20 w-full left-8 bottom-2">
            <h1 className="m-0 p-0 text-[15vw] max-lg:tracking-[-6px] tracking-[-8px] max-lg:-mt-2 -mt-12 text-white/80 drop-shadow-xl stroke-slate-400">
              About Us
            </h1>
           
          </div>
            </div>
           
        </div>
      </Element>
    </section>
  );
};

export default About;
