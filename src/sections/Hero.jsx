import React from "react";
import { Element } from "react-scroll";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { IoStar } from "react-icons/io5";



const Hero = () => {
  return (
    <section className="hero-bg relative b rounded-lg overflow-hidden shadow-[0_35px_60px_-15px_rgba(0,0,0,0.8)]">
      <Element name="hero">
        <img
          src="images/slider-2.jpg"
          alt=""
          className="w-[100%] h-[100vh] object-cover bg-center "/>
        <div className="container">
          <div className="absolute top-14 z-10 w-full right-0 px-5 max-lg:px-2">
            <div className="flex items-start justify-between">
              <div className="flex max-lg:flex-col items-center gap-3 max-lg:mb-0">
                <div className="w-7 h-7 border rounded-full transition-all duration-300 hover:bg-orange-400 flex items-center justify-center text-white">
                  <FaFacebook />
                </div>
                <div className="w-7 h-7 border rounded-full transition-all duration-300 hover:bg-orange-400 flex items-center justify-center text-white">
                  <FaTwitter />
                </div>
                <div className="w-7 h-7 border rounded-full transition-all duration-300 hover:bg-orange-400 flex items-center justify-center text-white">
                  <FaYoutube />
                </div>
              </div>
              <div className="max-lg:w-1/2 w-1/5 text-right">
                <p className="text-wrap text-sm text-white italic">
                  Realty executives international experience excellence and
                  we're the key to your new home.
                </p>
              </div>
            </div>
            <div className="w-full max-lg:mt-32 max-md:mt-32 mt-28">
              <form action="" className="flex justify-center">
                <input
                  type="text"
                  placeholder="Search Your Propery Now"
                  className="focus:outline-none px-3 py-4 max-lg:h-16 h-20 w-3/4 mx-auto rounded-xl text-center text-xl font-normal border-2 border-gray-400 bg-cyan-950/80 bg:blur-xl  text-white"
                />
              </form>
            </div>
            <div className="max-lg:block flex  items-end justify-between mt-[12%] max-lg:mt-[15%] ">
              <div>
                <ul className="flex gap-2 mb-5">
                  <li className="text-orange-400 text-xl">
                    <IoStar />
                  </li>
                  <li className="text-orange-400 text-xl">
                    <IoStar />
                  </li>
                  <li className="text-orange-400 text-xl">
                    <IoStar />
                  </li>
                  <li className="text-orange-400 text-xl">
                    <IoStar />
                  </li>
                  <li className="text-orange-400 text-xl">
                    <IoStar />
                  </li>
                </ul>
                <div className="max-lg:w-3/4 w-1/2">
                  <p className="italic text-sm text-white">
                    "Colourful Places to live and play we're the only realtor
                    you will ever want"
                  </p>
                </div>
              </div>
              <div className="max-lg:w-full w-3/4">
                <ul className="flex items-center justify-end max-lg:justify-start gap-10 max-lg:gap-1.5 max-lg:mt-5">
                  <li className="border border-gray-400 rounded-full py-1.5 px-4 text-white text-sm transition-all duration-500 hover:bg-orange-500 hover:border-transparent bg-orange-500">
                    <a href="">House</a>
                  </li>
                  <li className="border border-gray-400 rounded-full py-1.5 px-4 text-white text-sm transition-all duration-500 hover:bg-orange-500 hover:border-transparent">
                    <a href="">Candominium</a>
                  </li>
                  <li className="border border-gray-400 rounded-full py-1.5 px-4 text-white text-sm transition-all duration-500 hover:bg-orange-500 hover:border-transparent">
                    <a href="">Apartment</a>
                  </li>
                  <li className="border border-gray-400 rounded-full py-1.5 px-4 text-white text-sm transition-all duration-500 hover:bg-orange-500 hover:border-transparent">
                    <a href="">Villa</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Hero;
