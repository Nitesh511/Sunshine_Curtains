import React, { useState } from "react";
import logo from "../../assets/removebg.png";
import { HiMenuAlt3 } from "react-icons/hi";
import { Link } from "react-router-dom";
import frontimg from "../../assets/front.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  //For Menu items Toogle
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav
      className="bg-cover  shadow-md"
      style={{ backgroundImage: `url(${frontimg})` }}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center ">
        <div className="flex items-center ">
          <Link to={"/"}>
            {" "}
            <img src={logo} alt="Sunshine Logo" className="h-24 md:h-32  " />
          </Link>

          <div className="flex flex-col mt-2">
            <span className="text-white font-subheading text-2xl font-bold ">
              SUN SHINE{" "}
            </span>

            <span className="text-white text-xl -mt-1">BLINDS CANBERRA</span>
            {/* <span className="text-gray-500 text-sm mt-1">
                            CURTAINS | BLINDS | AWNINGS | SHUTTERS
                        </span> */}
          </div>
        </div>

        <div className=" items-center hidden lg:block  ">
          <a
            href="#"
            className=" bg-customColorRgb text-white font-subheading py-2 px-4 rounded-xl mr-4 hover:bg-yellow-600"
          >
            BOOK APPOINTMENT
          </a>
          <a
            href="#"
            className="text-white font-subheading hover:bg-green-700 bg-gray-500 py-2 px-4 rounded-xl"
          >
            DOWNLOAD BROCHURE
          </a>
        </div>

        {/* Hamburger Menu Icon */}
        <button className="text-2xl lg:hidden" onClick={toggleMenu}>
          <HiMenuAlt3 />
        </button>
      </div>

      {/* Menu */}
      <div
        className={` text-black ${
          isOpen ? "block" : "hidden"
        } lg:block`}
      >
        <div className="container mx-auto px-4 py-3 flex flex-col lg:flex-row md:items-center md:justify-center border-b-4 border-gray-300">
          <ul className="flex flex-col lg:flex-row lg:space-x-8 space-y-4 lg:space-y-0 text-lg font-subheading text-white">
            <li>
              <Link
                to="/"
                className="block hover:text-orange-600"
                onClick={closeMenu}
              >
                HOME
              </Link>
            </li>
            <li>
              <Link
                to="/blinds"
                className="block hover:text-orange-600"
                onClick={closeMenu}
              >
                BLINDS
              </Link>
            </li>
            <li>
              <Link
                to="/curtains"
                className="block hover:text-orange-600"
                onClick={closeMenu}
              >
                CURTAINS
              </Link>
            </li>
            <li>
              <Link
                to="/shutters"
                className="block hover:text-orange-600"
                onClick={closeMenu}
              >
                SHUTTERS
              </Link>
            </li>
            <li>
              <Link
                to="/awnings"
                className="block hover:text-orange-600"
                onClick={closeMenu}
              >
                AWNINGS
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="block hover:text-orange-600"
                onClick={closeMenu}
              >
                CONTACT US
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
