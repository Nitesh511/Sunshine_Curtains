import React from "react";
import FrontPage from "../resuable_components/front_page";
import FeatureSection from "../resuable_components/features_section";
import { GiKangaroo } from "react-icons/gi";
import { IoColorPaletteSharp } from "react-icons/io5";
import { MdAddHomeWork } from "react-icons/md";
import { FaAward } from "react-icons/fa";
import BlindsSection from "../resuable_components/products";
import shutterData from "./shutter_data";
import BookingBanner from "../booking_banner/booking_banner";
import BrochureRequestForm from "../bourchers_form/bourches_form";
import { ShutterTypes, WindowShutterSection } from "./windows_shutter";
import PlantationShuttersPage from "./plantation_shutter_page";
import ChooseTransparency from "../blinds/transperency";
import FAQs from "../faq/faq";
import ClientReviews from "../reviews/reviews";
import reviewsData from "../reviews/reviews_data";

const Shutter = () => {
  const features = [
    { icon: <GiKangaroo />, title: "Custom Made In Australia" },
    { icon: <IoColorPaletteSharp />, title: "Custom Colour Service" },
    { icon: <MdAddHomeWork />, title: "Add Value To Your Home" },
    { icon: <FaAward />, title: "Up To 20 Year Quality Guarantee" },
  ];
  return (
    <>
      <div className="bg-white">
        <div className="container mx-auto py-3">
          {/* Main text centered at the top */}
          <div className="flex flex-col items-center text-center mb-16 font-subheading">
            <h1 className="text-3xl md:text-3xl font-bold text-blue-800 mb-4">
              Add Value To Your Home With Custom-Made Window Shutters
            </h1>
            <p className="text-gray-700 mb-8">
              And Enjoy 20 Year Warranties & Timeless Style That Will Never Age
            </p>
          </div>
          <div className="-mt-32 font-subheading">
            <FrontPage
              imageUrl="https://watsonblinds.com.au/wp-content/uploads/2015/01/header-img.jpg"
              title="Add even more value to your home."
              description="Pull them down for full privacy, or roll them up to enjoy the sunshine."
              buttonText="BOOK HERE & GET $300 FREE"
              buttonLink="#"
            />
          </div>
        </div>
      </div>

      <div className=" font-subheading ">
        {" "}
        <FeatureSection features={features} />
      </div>

      <div className="container mx-auto py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-0  md:p-10 font-subheading ">
        {shutterData.map((item) => (
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
      <div className=" font-subheading "></div>
      <BookingBanner
        title="Book Appointment Today And Get a Free $300 Voucher To Use Towards Your Order!"
        description="Our customer consultants have a wealth of experience and will guide you along the way to creating the home you love. Take the first step and book an appointment with our expert local advisers."
        buttonText="BOOK APPOINTMENT"
        buttonLink="#"
        imageUrl="https://watsonblinds.com.au/wp-content/uploads/2018/05/shutterstock_721093795.jpg"
      />

      <div className="mt-10 font-subheading ">
        <BrochureRequestForm />
      </div>
      <div className=" font-subheading ">
        {" "}
        <WindowShutterSection />
        <PlantationShuttersPage />
      </div>

      <div className="-mt-20 ">
        <ChooseTransparency
          title={"Choose Your Shutter"}
          title1={"PLANTATION SHUTTERS"}
          title2={"ROLLER SHUTTERS"}
          title3={"ALUMINIUM SHUTTERS"}
          img1={
            "https://watsonblinds.com.au/wp-content/uploads/elementor/thumbs/Aluminium-Shutters-pf2lf22l6odn66i7zmdid4e2w76kcqpqavmg6ulqd4.jpg"
          }
          img2={
            "https://watsonblinds.com.au/wp-content/uploads/elementor/thumbs/Roller-Shutters-pf2lfg6616wy0bxqpagwwitzsz92k79pcteqe00trs.jpg"
          }
          img3={
            "https://watsonblinds.com.au/wp-content/uploads/elementor/thumbs/External-Shutters-pf2lce71tkqe9ydhjgxkasl2awb4jm53xp2x8mjvzs.jpg"
          }
        />
      </div>

      <div className=" font-subheading ">

      <ShutterTypes />

      <div className=" md:-mt-24">
        {" "}
        <FAQs />{" "}
      </div>

      <ClientReviews reviews={reviewsData} />

      </div>
    </>
  );
};

export default Shutter;
