import { IoArrowForwardSharp } from "react-icons/io5";


const Footer = () => {
  return (
    <section className="bg-orange-100 relative">
      <div className="container py-10">
        <div className="grid lg:grid-cols-2 grid-cols-1">
          <div className="max-w-96 lg:order-first order-last">
            <p className="text-[#95684b] text-[14px] font-medium mb-5">
              Unlock the doors to your future home by subscribing to our premier
              real estate website!
            </p>
            <form action="" className="flex items-center justify-center gap-3 relative">
              <input type="text" placeholder="Enter you email"
                className="border border-[#95684b] px-3 py-1.5 rounded-full w-full text-[#8d6347] bg-transparent focus:outline-none"/>
              <div className="absolute right-2 top-2 w-7 h-7 rounded-full ">
                <IoArrowForwardSharp className="text-[#95684b] font-medium text-xl " />
              </div>
            </form>
          </div>
          <div className="text-right lg:order-last order-first">
          <div className="nav-logo w-[max-content] inline  relative mb-5">
            <h4 className="text-4xl text-right">Lusso</h4>
          </div>
          <p className="text-[#95684b] text-[14px] font-medium mt-3 mb-5">We understand that a home is more than just a physical<br/> space- it's where memories are made</p>
          </div>
         </div>
         <div className="grid grid-cols-4 max-lg:grid-cols-2 mt-20">
          <div>
             <h3 className="mb-5 font-medium text-xl tracking-[-1px]">Contact</h3>
             <ul>
              <li className="text-[#95684b] font-medium  text-[14px] mb-3">
                <a href="">Hello@lusso.in</a>
              </li>
              <li className="text-[#95684b] font-medium  text-[14px] mb-3">
                <a href="">Support@lusso.in</a>
              </li>
              <li className="text-[#95684b] font-medium  text-[14px] mb-3">
                <a href="">+91 1234567890</a>
              </li>
             </ul>
          </div>
          <div className="text-right">
             <h3 className="mb-5 font-medium text-xl tracking-[-1px]">Social Media</h3>
             <ul>
              <li className="text-[#95684b] font-medium  text-[14px] mb-3">
                <a href="">Facebook</a>
              </li>
              <li className="text-[#95684b] font-medium  text-[14px] mb-3">
                <a href="">Instagram</a>
              </li>
              <li className="text-[#95684b] font-medium  text-[14px] mb-3">
                <a href="">Youtube</a>
              </li>
             </ul>
          </div>
          <div className="text-right max-lg:text-left">
             <h3 className="mb-5 font-medium text-xl tracking-[-1]">Company</h3>
             <ul className="text-right max-lg:text-left">
              <li className="text-[#95684b] font-medium  text-[14px] mb-3">
                <a href="">News & Update</a>
              </li>
              <li className="text-[#95684b] font-medium  text-[14px] mb-3">
                <a href="">About Us</a>
              </li>
              <li className="text-[#95684b] font-medium  text-[14px] mb-3">
                <a href="">Careers</a>
              </li>
             </ul>
          </div>
          <div className="text-right">
             <h3 className="mb-5 font-medium text-xl tracking-[-1px]">Terms & Policy</h3>
             <ul className="text-right">
              <li className="text-[#95684b] font-medium  text-[14px] mb-3">
                <a href="">Privacy Policy</a>
              </li>
              <li className="text-[#95684b] font-medium  text-[14px] mb-3">
                <a href="">Terms of Use</a>
              </li>
              <li className="text-[#95684b] font-medium  text-[14px] mb-3">
                <a href="">Accessibility</a>
              </li>
             </ul>
          </div>
         </div>
        </div>
      <div className="bg-orange-200 relative py-1.5 text-center">
         <p className="text-[14px] font-medium">&copy; copyright all right reserved.</p>
      </div>
    </section>
  );
};

export default Footer;
