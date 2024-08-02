import React from "react";
import powerimg from "../../assets/power.jpg";
import AboutUs from "../aboutus/aboutus";
import Banner from "./banner";
import BlindsSection from "../resuable_components/products";
import FrontPage from "../resuable_components/front_page";
import BookingBanner from "../booking_banner/booking_banner";
import ShowroomMap from "../showroommap/map";
import ClientReviews from "../reviews/reviews";
import reviewsData from "../reviews/reviews_data";

const Dashboard = () => {
  return (
    <>
      <div className="bg-white">
        <div className="container mx-auto py-3">
          {/* Main text centered at the top */}
          <div className="flex flex-col items-center text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">
              Uncover Motorised Blinds. For Smarter, Smoother Shade.
            </h1>
            <p className="text-gray-700 mb-8">
              Set the mood with the touch of a button.
            </p>
          </div>
          <div className="-mt-32">
            <FrontPage
              imageUrl={powerimg}
              title="At Sunshine You Always Get More"
              description="We bring over 56 years' experience, lifetime product warranties, price-beat guarantees and flexible payment options along with $300 on us to get you started, so you can always get that little bit more."
              buttonText="Get More Here"
              buttonLink="#"
            />
          </div>
        </div>
      </div>
      <AboutUs />
      <div className="-mt-16 lg:mt-0"></div>
      <Banner />

      <div className="container mx-auto py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-0 md:p-10">
        <BlindsSection
          title="Blinds"
          description="At Watson we truly wear our hearts on our windows and never compromise on quality. Our blinds are always custom measured and fitted for you and we provide the region's widest range."
          imageUrl="https://watsonblinds.com.au/wp-content/uploads/2018/05/shutterstock_1013219707-sml-02.jpg"
          buttonText="View Blinds"
          buttonLink="#"
        />
        <BlindsSection
          title="Curtains"
          description="Complete every room in elegant style while also slashing the price of your energy bill when you opt for our huge range of curtains with supreme insulation. Watson curtains easily transform a room"
          imageUrl="https://watsonblinds.com.au/wp-content/uploads/2018/05/shutterstock_1013219707-sml-02.jpg"
          buttonText="View Curtains"
          buttonLink="#"
        />
        <BlindsSection
          title="Blinds"
          description="At Watson we truly wear our hearts on our windows and never compromise on quality. Our blinds are always custom measured and fitted for you and we provide the region's widest range."
          imageUrl="https://watsonblinds.com.au/wp-content/uploads/2018/05/shutterstock_1013219707-sml-02.jpg"
          buttonText="View Blinds"
          buttonLink="#"
        />
        <BlindsSection
          title="Blinds"
          description="At Watson we truly wear our hearts on our windows and never compromise on quality. Our blinds are always custom measured and fitted for you and we provide the region's widest range."
          imageUrl="https://watsonblinds.com.au/wp-content/uploads/2018/05/shutterstock_1013219707-sml-02.jpg"
          buttonText="View Blinds"
          buttonLink="#"
        />
        <BlindsSection
          title="Blinds"
          description="At Watson we truly wear our hearts on our windows and never compromise on quality. Our blinds are always custom measured and fitted for you and we provide the region's widest range."
          imageUrl="https://watsonblinds.com.au/wp-content/uploads/2018/05/shutterstock_1013219707-sml-02.jpg"
          buttonText="View Blinds"
          buttonLink="#"
        />
        <BlindsSection
          title="Blinds"
          description="At Watson we truly wear our hearts on our windows and never compromise on quality. Our blinds are always custom measured and fitted for you and we provide the region's widest range."
          imageUrl="https://watsonblinds.com.au/wp-content/uploads/2018/05/shutterstock_1013219707-sml-02.jpg"
          buttonText="View Blinds"
          buttonLink="#"
        />
      </div>
      <BookingBanner
        title="Book Appointment Today And Get a Free $300 Voucher To Use Towards Your Order!"
        description="Our customer consultants have a wealth of experience and will guide you along the way to creating the home you love. Take the first step and book an appointment with our expert local advisers."
        buttonText="BOOK APPOINTMENT"
        buttonLink="#"
        imageUrl="https://watsonblinds.com.au/wp-content/uploads/2018/05/shutterstock_721093795.jpg"
      />

      <ShowroomMap/>

      <ClientReviews reviews={reviewsData}/>
      
    </>
  );
};

export default Dashboard;
