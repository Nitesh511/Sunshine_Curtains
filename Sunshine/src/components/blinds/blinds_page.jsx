import React, { useEffect, useState } from "react";
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
import { WindowBlindsSection, Automating } from "./whysunshine";
import ChooseTransparency from "./transperency";
import FAQs from "../faq/faq";
import ClientReviews from "../reviews/reviews";
import reviewsData from "../reviews/reviews_data";
import { useGetblindsQuery } from "../redux/api";
import LoadingPage from "../loading_page/loadingpage";

const Blinds_page = () => {
  const features = [
    { icon: <GiKangaroo />, title: "Custom Made In Australia" },
    {
      icon: <GiBorderedShield />,
      title: "All Products 100% ACCC Compliant & Child Safe",
    },
    { icon: <GiLightBulb />, title: "Reduce Your Energy Bills Up To 49%" },
    { icon: <FaAward />, title: "Limited Lifetime Warranty" },
  ];

  const [blinds, setBlinds] = useState([]);
  const { data, error, isLoading } = useGetblindsQuery();





  useEffect(() => {
    if (data) {
      setBlinds(data.data);
    }
  }, [data]);

  console.log(data)



  if (isLoading) {
    return <LoadingPage />;
  }

  if (error) {
    return <div>Error Loading Data: {error.message}</div>;
  }
  return (
    <>
      <div className="bg-white">
        <div className="container mx-auto py-3">
          {blinds.map((items, index) => (
            <div key={index} className="mb-16">
              {/* Main text centered at the top */}
             
              <div className="flex flex-col items-center text-center mb-16 font-subheading text-3xl">
                <h1 className="font-bold text-blue-800 mb-4">
                 {items.attributes.title1}
                </h1>
                <p className="text-gray-700 mb-8 font-subheading text-lg">
                {items.attributes.title2}
                </p>
              </div>
              <div className="-mt-32 font-subheading text-base">
                <FrontPage
                  imageUrl={`${process.env.STRAPI_API}${items.attributes.img.data.attributes.url}`}
                  
                  title={items.attributes.imgtext1}
                  description={items.attributes.imgtext2}
                  buttonText={items.attributes.buttontext}
                  buttonLink="#"
                />
            
              </div>
            </div>
          ))}
          
        </div>
      </div>
      

      <div className=" font-subheading ">
        {" "}
        <FeatureSection features={features} />
      </div>

      <div className="container mx-auto py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-0  md:p-10 font-subheading">
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

      <div className=" font-subheading ">
        <BookingBanner
          title="Book Appointment Today And Get a Free $300 Voucher To Use Towards Your Order!"
          description="Our customer consultants have a wealth of experience and will guide you along the way to creating the home you love. Take the first step and book an appointment with our expert local advisers."
          buttonText="BOOK APPOINTMENT"
          buttonLink="#"
          imageUrl="https://watsonblinds.com.au/wp-content/uploads/2018/05/shutterstock_721093795.jpg"
        />
      </div>
      <div className="mt-10 font-subheading ">
        <BrochureRequestForm />
      </div>

      <div className=" font-subheading ">
        <WindowBlindsSection />
      </div>
      <div className=" ">
        <ChooseTransparency
          title={"Choose Your Transparency"}
          title1={"BLockout"}
          title2={"Light Filter"}
          title3={"Screen"}
          img1={
            "https://watsonblinds.com.au/wp-content/uploads/elementor/thumbs/Blockout-pf2l9e3n7heussw8hl2my4pf0xbjm6fp2mn977hdwg-q7ydhnpg2pttjif6zxa5hzonn4aexzaaqoqdbufxy8.jpg"
          }
          img2={
            "https://watsonblinds.com.au/wp-content/uploads/elementor/thumbs/Light-Filter-pf2l8y4dzaszbfjg2w5z9qqkxdiazbo9cfk01i52u8-q7ydhzxcjkajqfxg0kkawelnd4m6q1mt4d7okfxtpc.jpg"
          }
          img3={
            "https://watsonblinds.com.au/wp-content/uploads/elementor/thumbs/Screen-1-pf2l7n4ghl0n6xfppbumt2lj83xyaghohyxq1o2rhc-q7ydi7g228kubbmisntbgcpc47l4fmgntefkenmobk.jpg"
          }
        />
      </div>

      <div className=" font-subheading ">
        <Automating />
      </div>

      <div className=" font-subheading ">
        <FAQs />
      </div>

      <div className=" font-subheading text-base ">
        {" "}
        <ClientReviews reviews={reviewsData} />
      </div>
    </>
  );
};

export default Blinds_page;
