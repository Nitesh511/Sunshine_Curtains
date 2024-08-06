import React, { useState } from "react";
import logo from "../../assets/Logo-Large.jpg";
import { HiMenuAlt3 } from "react-icons/hi";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    //For Menu items Toogle 
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-white shadow-md">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <div className="flex items-center">
                <Link to={"/"}>   <img src={logo} alt="W. Watson Logo" className="h-24 mr-4" /></Link>
                  
                    <div className="flex flex-col mt-2">
                        <span className="text-gray-800 font-subheading text-lg font-bold ">SUN SHINE </span>
                  
                           <span className="text-gray-500 text-sm -mt-1">
                           BLINDS CANBERRA
                        </span>
                        {/* <span className="text-gray-500 text-sm mt-1">
                            CURTAINS | BLINDS | AWNINGS | SHUTTERS
                        </span> */}
                    </div>
                </div>

                <div className=" items-center hidden lg:block">
                    <a
                        href="#"
                        className="bg-yellow-500 text-white font-subheading py-2 px-4 rounded-xl mr-4 hover:bg-yellow-600"
                    >
                        BOOK APPOINTMENT
                    </a>
                    <a
                        href="#"
                        className="text-white font-subheading hover:text-green-700 bg-gray-500 py-2 px-4 rounded-xl"
                    >
                        DOWNLOAD BROCHURE
                    </a>
                </div>
                
                {/* Hamburger Menu Icon */}
                <button 
                    className="text-2xl lg:hidden" 
                    onClick={toggleMenu}
                >
                    <HiMenuAlt3 />
                </button>
            </div>

            {/* Menu */}
            <div 
                className={`bg-white text-black ${isOpen ? 'block' : 'hidden'} lg:block`} // to show for lg screen hie fot 
            >
                <div className="container mx-auto px-4 py-4 flex flex-col lg:flex-row justify-between border-b-4 border-gray-300 ">
                    <ul className="flex flex-col lg:flex-row font-subheading space-y-4 ml-0 md:ml-64 lg:space-y-0 lg:space-x-8 justify-center text-lg  ">
                        
                        <li><Link to="/blinds" className="hover:text-gray-400  ">BLINDS</Link></li>
                        <li><Link to={"/curtains"} className="hover:text-gray-400">CURTAINS</Link></li>
                        <li><Link to={"/shutters"} className="hover:text-gray-400">SHUTTERS</Link></li>
                        {/* <li><Link to={"/"} className="hover:text-gray-400">SECURITY</Link></li> */}
                        <li><Link to={"/awnings"} className="hover:text-gray-400">AWNINGS</Link></li>
                        <li><Link to={"/commercial"} className="hover:text-gray-400">COMMERCIAL</Link></li>
                        <li><Link to={"/contact"} className="hover:text-gray-400">CONTACT US</Link></li>
                        {/* <li><a href="#" className="hover:text-gray-400">QUOTE OFF PLAN</a></li>
                        <li><a href="#" className="hover:text-gray-400">VIRTUAL SHOWROOM</a></li> */}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar