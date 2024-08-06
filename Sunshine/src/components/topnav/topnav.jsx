import React from 'react';
import upto from "../../assets/upto.png";
import experience from "../../assets/experience.png";
import expertise from "../../assets/locally.png";

const TopNavbar = () => {
  return (
    <nav className="bg-gray-100 py-5 overflow-x-hidden">
      <div className="container mx-auto flex gap-5 ml-4 font-subheading ">
        <div className="flex items-center">
          <img src={upto} alt="Check Icon" className="h-6 mr-2" />
          <span className="text-black text-sm  font-medium">Product Lifetime Warranties</span>
        </div>
        <div className="flex items-center">
          <img src={experience} alt="50 Years Experience" className="h-6 mr-2" />
          <span className="text-black text-sm font-medium">50 Years Experience</span>
        </div>
        <div className="flex items-center">
          <img src={expertise} alt="Local Manufacturing" className="h-6 mr-2" />
          <span className="text-black text-sm font-medium">Local Manufacturing</span>
        </div>
      </div>
    </nav>
  );
};

export default TopNavbar;