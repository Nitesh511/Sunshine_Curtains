import React from "react";
import FrontPage from "../resuable_components/front_page";
import FeatureSection from "../resuable_components/features_section";
import { GiKangaroo } from "react-icons/gi";
import { GiBorderedShield } from "react-icons/gi";
import { GiLightBulb } from "react-icons/gi";
import { FaAward } from "react-icons/fa";
import curtainsdata from "./curtainsdata";
import BlindsSection from "../resuable_components/products";
import BookingBanner from "../booking_banner/booking_banner";
import BrochureRequestForm from "../bourchers_form/bourches_form";
import { CurtainsFeature, Tiebacks } from "./curtains_feature";
import Fearures_part from "./fearures_part";
import ChooseTransparency from "../blinds/transperency";
import FAQs from "../faq/faq";
import ClientReviews from "../reviews/reviews";
import reviewsData from "../reviews/reviews_data";

const Curtains_Page = () => {
  const features = [
    { icon: <GiKangaroo />, title: "Custom Made In Australia" },
    {
      icon: <GiBorderedShield />,
      title: "All Products 100% ACCC Compliant & Child Safe",
    },
    { icon: <GiLightBulb />, title: "Reduce Your Energy Bills Up To 49%" },
    { icon: <FaAward />, title: "Limited Lifetime Warranty" },
  ];
  return (
    <>
      <div className="bg-white">
        <div className="container mx-auto py-3">
          {/* Main text centered at the top */}
          <div className="flex flex-col items-center text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">
              Explore The Widest Range Of Custom-Made Curtains in Australia
            </h1>
            <p className="text-gray-700 mb-8">
              Sophistication & Practicality. The Easiest Decision You'll Ever
              Make.
            </p>
          </div>
          <div className="-mt-32">
            <FrontPage
              imageUrl="https://watsonblinds.com.au/wp-content/uploads/2018/05/curtains-01.jpg"
              title="Sheer Elegance"
              description="For luxury without the hefty price tag, browse our range of Sheer Curtains. Go on,you know you want to!"
              buttonText="BOOK HERE & GET $300 FREE"
              buttonLink="#"
            />
          </div>
        </div>
      </div>
      <FeatureSection features={features} />

      <div className="container mx-auto py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1 p-10">
        {curtainsdata.map((item) => (
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

      <div className="mt-10 mb-10">
        {" "}
        <BrochureRequestForm />
      </div>

      <CurtainsFeature/>

      <Fearures_part/>

      <ChooseTransparency
        title={"Choose Your Pleats"}
        title1={"Double & Triple pinch pleat"}
        title2={"Box pleat"}
        title3={"Pencil pleat"}
        img1={"https://watsonblinds.com.au/wp-content/uploads/2021/08/1c.png"}
        img2={"https://watsonblinds.com.au/wp-content/uploads/2021/08/2c.png"}
        img3={"https://watsonblinds.com.au/wp-content/uploads/2021/08/3c.png"}
  
      />

      <Tiebacks/>

      <FAQs/>

      
      <ClientReviews reviews={reviewsData}/>


      

      


    

    </>
  );
};

export default Curtains_Page;
