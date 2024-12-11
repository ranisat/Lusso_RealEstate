import { MdArrowOutward } from "react-icons/md";

const Shaowcase = () => {
  return (
    <section className='relative'>
      <div className="container">
         <div className="grid grid-cols-1 max-sm:grid-cols-2 max-md:grid-cols-3 lg:grid-cols-4 gap-2">
          <div className='rounded-md shadow-xl overflow-hidden relative'>
             <img src="/images/show-2.jpg" alt="shaowcase" className='object-cover'/>
            <a href="">
            <div className="absolute right-10 top-8 w-7 h-7 rounded-full border border-[#cb773f] flex items-center justify-center">
              <MdArrowOutward className="text-[#cb773f] font-medium text-xl "/>
             </div>
            </a>
          </div>
          <div className="relative z-10 bg-gradient-to-b to-[#fff6e4] from-[#fffdfa] border rounded-md border-gray-200 overflow-hidden shadow-xl ">
          <div className="absolute right-3 bottom-8 w-3/4">
          <p className="text-2xl leading-6  text-right font-medium tracking-[-1px] text-black mb-2">Journey buddies</p>
          <p className="text-[14px] text-[#935226] text-right ">Crafting your next journey, one home at a time.</p>
             </div>
          </div>
          <div className=' rounded-md shadow-xl overflow-hidden relative'>
             <img src="/images/show-3.jpg" alt="shaowcase" className='object-contain bg-bottom'/>
            <a href="">
            <div className="absolute right-10 top-8 w-7 h-7 rounded-full border border-[#cb773f] flex items-center justify-center">
              <MdArrowOutward className="text-[#cb773f] font-medium text-xl "/>
             </div>
            </a>
          </div>
          <div className="relative z-10 bg-gradient-to-b to-[#fff6e4] from-[#fffdfa]  rounded-md overflow-hidden shadow-xl">
          <div className="absolute right-3 top-8 w-3/4">
          <p className="text-2xl leading-6 tracking-[-1px] text-right font-medium  text-black mb-2">Giant step</p>
          <p className="text-[14px] text-[#935226] text-right ">Elevating the art of real estate, home begins with us</p>
             </div>
          </div>
          <div className="relative z-10 bg-white bg-[url('images/show-4.jpg')] bg-bottom bg-contain bg-no-repeat border rounded-md border-gray-200 overflow-hidden shadow-xl ">
          <div className="absolute left-3 top-8 w-3/4">
          <p className="text-2xl leading-6 tracking-[-1px] text-left font-medium  text-black mb-2">Best for you</p>
          <p className="text-[14px] text-[#935226] text-left ">Helping you find your signature property</p>
             </div>
          </div>
          <div className='border rounded-md shadow-xl overflow-hidden relative'>
             <img src="/images/show-5.jpg" alt="shaowcase" className='object-contain'/>
            <a href="">
            <div className="absolute right-10 top-8 w-7 h-7 rounded-full border border-[#cb773f] flex items-center justify-center">
              <MdArrowOutward className="text-[#cb773f] font-medium text-xl "/>
             </div>
            </a>
          </div>
          <div className="relative z-10 bg-gradient-to-b to-[#fff6e4] from-[#fffdfa]  rounded-mdoverflow-hidden shadow-xl ">
          <div className="absolute right-3 top-8 w-3/4">
          <p className="text-2xl leading-6 tracking-[-1px] text-right font-medium  text-black mb-2">It's so easy</p>
          <p className="text-[14px] text-[#935226] text-right ">Your home is your castle, we making your life easier</p>
             </div>
          </div>
          <div className='border rounded-md  overflow-hidden relative shadow-xl'>
             <img src="/images/show-6.jpg" alt="shaowcase" className='object-contain'/>
            <a href="">
            <div className="absolute right-10 top-8 w-7 h-7 rounded-full border border-[#cb773f] flex items-center justify-center">
              <MdArrowOutward className="text-[#cb773f] font-medium text-xl "/>
             </div>
            </a>
          </div>
         </div>
      </div>
    </section>
  )
}

export default Shaowcase
