import React from "react";
import FrontPage from "../resuable_components/front_page";
import FeatureSection from "../resuable_components/features_section";
import { GiKangaroo } from "react-icons/gi";
import { GiBorderedShield } from "react-icons/gi";
import { GiLightBulb } from "react-icons/gi";
import { FaAward } from "react-icons/fa";
import BlindsSection from "../resuable_components/products";
import blindData from "./blinds";
import BookingBanner from "../booking_banner/booking_banner";
import BrochureRequestForm from "../bourchers_form/bourches_form";
import {WindowBlindsSection ,Automating } from "./whysunshine";
import ChooseTransparency from "./transperency";
import FAQs from "../faq/faq";
import ClientReviews from "../reviews/reviews";
import reviewsData from "../reviews/reviews_data";

const Blinds_page = () => {
    const features = [
        { icon: <GiKangaroo />, title: 'Custom Made In Australia' },
        { icon: <GiBorderedShield />, title: 'All Products 100% ACCC Compliant & Child Safe' },
        { icon: <GiLightBulb />, title: 'Reduce Your Energy Bills Up To 49%' },
        { icon: <FaAward />, title: 'Limited Lifetime Warranty' },
      ];
    
  return (
    <>
      <div className="bg-white">
        <div className="container mx-auto py-3">
          {/* Main text centered at the top */}
          <div className="flex flex-col items-center text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">
              Handmade Window Blinds Direct From The Region's Only Local Factory
            </h1>
            <p className="text-gray-700 mb-8">
              Let Us Help You Create Your Dream Home, Starting With Your
              Windows.
            </p>
          </div>
          <div className="-mt-32">
            <FrontPage 
              imageUrl="https://watsonblinds.com.au/wp-content/uploads/2018/05/Vertilux_Roller_Single_Roller_Blind.jpg"
              title="Take full control of light& privacy with Roller Blinds."
              description="Pull them down for full privacy, or roll them up to enjoy the sunshine."

              buttonText="BOOK HERE & GET $300 FREE"
              buttonLink="#"
            />
          </div>
        </div>
      </div>
      <FeatureSection features={features}/>
      <div className="container mx-auto py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-0  md:p-10">
      {blindData.map((item) => (
        <BlindsSection
          key={item.id}
          title={item.title}
          description={item.description}
          imageUrl={item.imageUrl}
          buttonText={item.buttonText}
          buttonLink={item.buttonLink}
        />
      ))}
    </div>

    <BookingBanner
        title="Book Appointment Today And Get a Free $300 Voucher To Use Towards Your Order!"
        description="Our customer consultants have a wealth of experience and will guide you along the way to creating the home you love. Take the first step and book an appointment with our expert local advisers."
        buttonText="BOOK APPOINTMENT"
        buttonLink="#"
        imageUrl="https://watsonblinds.com.au/wp-content/uploads/2018/05/shutterstock_721093795.jpg"
      />
      <div className="mt-10 ">
      <BrochureRequestForm/>
      </div>

      <WindowBlindsSection/>

      <ChooseTransparency
        title={"Choose Your Transparency"}
        title1={"BLockout"}
        title2={"Light Filter"}
        title3={"Screen"}
        img1={"https://watsonblinds.com.au/wp-content/uploads/elementor/thumbs/Blockout-pf2l9e3n7heussw8hl2my4pf0xbjm6fp2mn977hdwg-q7ydhnpg2pttjif6zxa5hzonn4aexzaaqoqdbufxy8.jpg"}
        img2={"https://watsonblinds.com.au/wp-content/uploads/elementor/thumbs/Light-Filter-pf2l8y4dzaszbfjg2w5z9qqkxdiazbo9cfk01i52u8-q7ydhzxcjkajqfxg0kkawelnd4m6q1mt4d7okfxtpc.jpg"}
        img3={"https://watsonblinds.com.au/wp-content/uploads/elementor/thumbs/Screen-1-pf2l7n4ghl0n6xfppbumt2lj83xyaghohyxq1o2rhc-q7ydi7g228kubbmisntbgcpc47l4fmgntefkenmobk.jpg"}
      />

      <Automating/>

      <FAQs/>

      <ClientReviews reviews={reviewsData}/>
      


      
    </>
  );
};

export default Blinds_page;
