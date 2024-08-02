import React from 'react';
import { GiSydneyOperaHouse } from "react-icons/gi";
import { FaChild } from "react-icons/fa";
import { MdLineWeight } from "react-icons/md";
import { GiTheaterCurtains } from "react-icons/gi";

const Banner = () => {
  return (
    <div className="bg-white py-8 md:py-12 p-10">
      <div className="container mx-auto flex flex-col md:flex-row gap-10 md:gap-20 items-center">
        <div className="flex items-center space-x-4 md:space-x-1">
          <div className="w-8 md:w-12 h-8 md:h-12 bg-blue-400 rounded-full flex justify-center items-center">
            <svg
              className="w-5 md:w-6 h-5 md:h-6 text-white"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
           <GiSydneyOperaHouse/>
            </svg>
          </div>
          <span className="text-gray-700 text-sm md:text-base font-medium">
            Manufactured In Canberra
          </span>
        </div>
        <div className="flex items-center space-x-4 md:space-x-6">
          <div className="w-8 md:w-12 h-8 md:h-12 bg-blue-400 rounded-full flex justify-center items-center">
            <svg
              className="w-5 md:w-6 h-5 md:h-6 text-white"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
            <FaChild />
            </svg>
          </div>
          <span className="text-gray-700 text-sm md:text-base font-medium">
            100% Child Safe
          </span>
        </div>
        <div className="flex items-center space-x-4 md:space-x-6">
          <div className="w-8 md:w-12 h-8 md:h-12 bg-blue-400 rounded-full flex justify-center items-center">
            <svg
              className="w-5 md:w-6 h-5 md:h-6 text-white"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
            <MdLineWeight />
            </svg>
          </div>
          <span className="text-gray-700 text-sm md:text-base font-medium">
            Full Light and View Control
          </span>
        </div>
        <div className="flex items-center space-x-4 md:space-x-6">
          <div className="w-8 md:w-12 h-8 md:h-12 bg-blue-400 rounded-full flex justify-center items-center">
            <svg
              className="w-5 md:w-6 h-5 md:h-6 text-white"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
             <GiTheaterCurtains />
            </svg>
          </div>
          <span className="text-gray-700 text-sm md:text-base font-medium">
            Limited Lifetime Warranty
          </span>
        </div>
      </div>
    </div>
  );
};

export default Banner;