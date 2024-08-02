import React from "react";
import aboutImage from "../../assets/about.jpg";

const AboutUs = () => {
  return (
    <div className="py-8">
      <div className="container mx-auto px-4 md:px-16">
        <div className="flex flex-col-reverse md:flex-row gap-8 items-center">
          {/* Text on top for mobile, left side for larger screens */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4 mt-0 md:-mt-32">
              About Us
            </h1>
            <p className="text-gray-700 mb-8 leading-relaxed">
              Sunshine is a friend-owned business
              established in 2018 with the vision of being your go-to
              destination for window furnishings. We are passionate about
              transforming your home with our top-quality products and services,
              offering a range of customization options, premium fabrics, and
              advanced automation solutions. Our mission is to blend elegance
              and functionality, turning your living spaces into welcoming and
              stylish environments. At Sunshine, we’re dedicated to exceeding
              your expectations and making your home shine.
            </p>
          </div>

          {/* Image on bottom for mobile, right side for larger screens */}
          <div className="flex-1 flex justify-center md:justify-end">
            <img
              src={aboutImage}
              alt="About Us"
              className="w-full md:w-2/3 h-auto object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
