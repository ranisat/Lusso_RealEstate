import  { useState } from "react";
import { Link as LinkScroll } from "react-scroll";
import { RiMenu3Fill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import clsx from 'clsx'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const NavLink = ({ title }) => (
    <LinkScroll
      to={title}
      offset={-100}
      spy
      smooth
      activeClass="nav-active"
      onClick={()=>setIsOpen(false)}
      className="base-bold transition-colors duration-500 cursor-pointer hover:text-p1
    max-lg:my-4 max-lg:h5"
    >
      {title}
    </LinkScroll>
  );
  return (
    <header className=" z-20 w-full py-1 bg-orange-50 fixed top-0 left-0  transition-all duration-500">
      <div className="container mx-auto">
        <div className="lg:hidden nav-logo w-[max-content]">
          <LinkScroll to="hero" >
            <h4 className="text-3xl">Lussio</h4>
          </LinkScroll>
        </div>
        <div className={clsx('w-full max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:w-full max-lg:opacity-0', isOpen ? 'max-lg:opacity-100':' max-lg:pointer-events-none')}>
        <div className="max-lg:relative max-lg:flex max-lg:flex-col max-lg:min-h-screen max-lg:p-6 max-lg:overflow-hidden max-md:px-4 sidebar_before transition-all duration-700">
          <nav className="max-lg:relative max-lg:z-2 ">
            <ul className="md:flex max-lg:items-center items-center justify-between ">
              <li className="nav-li max-lg:text-white cursor-pointer duration-300 transition-all hover:text-orange-400">
                <NavLink title="Buy Property" />
              </li>
              <li className="nav-li max-lg:text-white cursor-pointer duration-300 transition-all hover:text-orange-400">
                <NavLink title="sell property" />
              </li>
              <li className="nav-logo  max-lg:before:hidden">
                <LinkScroll
                  to="hero"
                  offset={-100}
                  spy
                  smooth
                  className={clsx("max-lg:hidden transition-transform duration-500 cursor-pointer")}
                >
                  <h4 className="text-3xl">Lusso</h4>
                </LinkScroll>
              </li>
              <li className="nav-li max-lg:text-white cursor-pointer duration-300 transition-all hover:text-orange-400">
                <NavLink title="user guide" />
              </li>
              <li className="nav-li max-lg:text-white cursor-pointer duration-300 transition-all hover:text-orange-400">
                <NavLink title="Account" />
              </li>
            </ul>
          </nav>
        </div>
        </div>
        <div className="absolute lg:hidden right-2 top-1 w-8 h-8 flex items-center justify-center text-xl font-bold">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="font-bold text-2xl object-contain"
          >
            {isOpen ? <IoMdClose className="max-lg:text-white"/> : <RiMenu3Fill />  }
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
