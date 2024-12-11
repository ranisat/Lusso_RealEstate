import React from "react";
import { Element } from "react-scroll";
import { FaRegHeart } from "react-icons/fa";
import { RiHomeLine } from "react-icons/ri";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const Faboulous = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + "</span>";
    },
  };
  return (
    <section className="relative z-10">
      <Element name="faboulous">
        <div className="w-full relative">
          <div className="section-title ">
            <h1 className="m-0 p-0 text-[21.5vw] max-lg:tracking-[-6px] tracking-[-16px] max-lg:-mt-2 -mt-12 font-black">
              Fabulous
            </h1>
          </div>
          <div className="lg:flex flex-wrap items-center justify-between px-2 max-lg:-mt-5 -mt-10">
            <div className="max-lg:w-[250px] w-1/4 max-lg:mb-3 mb-0">
              <p className="text-[14px] max-lg:text-[14px] w-full text-left text-black font-medium">
                Your housing needs deserve the care of a specialist, be home
              </p>
            </div>
            <div className="max-lg:hidden relative w-1/2">
               <div className="w-[95%]">
              <p className="w-full h-0.5 bg-orange-400 rounded-xl"></p>
              </div>
            </div>
            <div className="max-lg:w-full w-1/4">
              <div className="text-right">
                <p className="text-[14px] max-lg:text-[14px] w-full text-right text-black font-medium">
                  Let's going above and beyond  to find<br/> your next home
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full relative py-3 px-3">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            <div className="relative  overflow-hidden">
              <img
                src="/images/talk-1.jpg"
                alt="talk"
                className="object-contain rounded-xl"
              />
              <h6 className="uppercase absolute top-10 left-12 border rounded-full px-3 py-2 bg-orange-400 font-bold text-white">
                Talk with us
              </h6>
              <h6 className="Capitilize absolute bottom-20 text-sm italic left-12  text-white">
                If you would like help with <br/> Real Estate, Please Talk
                Us
              </h6>
            </div>

            <div className="relative">
            <img
                    src="/images/sofa-chair-1.jpg"
                    alt="talk"
                    className="object-contain rounded-xl"
                  />
            </div>
            <div className="relative max-lg:col-span-2">
               <div className="h-[200px] mb-3 border relative rounded-md overflow-hidden">
                 <img src="images/home-match.jpg" alt="" className="h-[100%] w-[100%] object-cover"/>
                 <div className="w-1/2 absolute text-right z-10 bottom-9 right-6">
                   <FaRegHeart className="text-2xl  inline text-[#935226] mb-3 border-[#935226] border rounded-full p-1"/>
                   <p className="text-2xl leading-6 tracking-normal text-right font-medium  text-black mb-2">Expert Better</p>
                   <p className="text-[14px] text-[#935226]">Extraordinary reach + results helping you find your home</p>
                 </div>
               </div>
               <div className="h-[200px] relative border rounded-md overflow-hidden">
                 <img src="images/hand-shake.jpg" alt="" className="h-[100%] w-[100%] object-cover"/>
                 <div className="w-1/2 absolute text-right z-10 bottom-5 left-4">
                   <RiHomeLine className="text-2xl   text-[#935226] mb-3 border-[#935226] border rounded-full p-1"/>
                   <p className="text-xl leading-6 tracking-normal font-medium text-left text-black mb-2">Homes That Match</p>
                   <p className="text-[13px] text-[#935226] text-left">Realty executives international, experience excellence for now</p>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Faboulous;
