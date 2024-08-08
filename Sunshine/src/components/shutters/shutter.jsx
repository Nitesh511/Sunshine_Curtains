import React, { useEffect, useState } from "react";
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
import { useGetproductshutterQuery, useGetshuttersQuery } from "../redux/api";
import LoadingPage from "../loading_page/loadingpage";

const Shutter = () => {
  const[shutter, setShutter]= useState([]);
  const[productShutter, setSProductShutter]= useState([]);

  const{data:pro,isLoading:duc,error:te}= useGetshuttersQuery();
  const{data:sh, isLoading:ut, error:ter}= useGetproductshutterQuery();

  useEffect(()=>{
    if(pro){
      setShutter(pro.data)
    }
    if(sh){
      setSProductShutter(sh.data)
    }
  },[pro,sh]);

  const isLoading= duc || ut;

  const error = te || ter

  if(isLoading){
    return <LoadingPage/>

  }

  if(error){
    return <div> Error Loading Data:{error.message}</div>
  }
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
          {shutter.map((items)=>(
            <React.Fragment key={items.id}>
            <div className="flex flex-col items-center text-center mb-16 font-subheading">
            <h1 className="text-3xl md:text-3xl font-bold text-blue-800 mb-4">
            {items.attributes.title1}
            </h1>
            <p className="text-gray-700 mb-8">
            {items.attributes.title2}
            </p>
          </div>
          <div className="-mt-32 font-subheading">
          <FrontPage
            imageUrl={`${process.env.STRAPI_API}${items.attributes.img.data.attributes.url}`}
            title={items.attributes.imgtext1}
            description={items.attributes.imgtext2}
            buttonText={items.attributes.buttontext}
            buttonLink="#"
          />
          </div>

            </React.Fragment>
          ))}

        </div>
      </div>

      <div className=" font-subheading ">
        {" "}
        <FeatureSection features={features} />
      </div>

      <div className="container mx-auto py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-0  md:p-10 font-subheading ">
        {productShutter.map((item) => (
          <BlindsSection
            key={item.id}
            title={item.attributes.title}
            description={item.attributes.des}
            imageUrl={`${process.env.STRAPI_API}${item.attributes.img.data.attributes.url}`}
            buttonText={item.attributes.buttontext}
            buttonLink={`/shutters/${item.attributes.slug}`}
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
