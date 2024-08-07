import React, { useEffect, useState } from "react";
import AboutUs from "../aboutus/aboutus";
import Banner from "./banner";
import BlindsSection from "../resuable_components/products";
import FrontPage from "../resuable_components/front_page";
import BookingBanner from "../booking_banner/booking_banner";
import ShowroomMap from "../showroommap/map";
import ClientReviews from "../reviews/reviews";
import reviewsData from "../reviews/reviews_data";
import { useGetdashboardproductsQuery, useGetdashboardQuery } from "../redux/api";
import LoadingPage from "../loading_page/loadingpage";

const Dashboard = () => {
  const [dash, setDash] = useState([]);
  const [dashproduct, setDashProduct] = useState([]);
  
  const { data: dashboarddata, isLoading: dahboardloading, error: dashboarderror } = useGetdashboardQuery();
  const { data: dashproducts, isLoading: dashloading, error: dasherror } = useGetdashboardproductsQuery();

  useEffect(() => {
    if (dashboarddata) {
      setDash(dashboarddata.data);
    }
    if (dashproducts) {
      setDashProduct(dashproducts.data);
    }
  }, [dashboarddata, dashproducts]);

  const isLoading = dahboardloading || dashloading;
  const error = dashboarderror || dasherror;

  if (isLoading) {
    return <LoadingPage />;
  }

  if (error) {
    return <div>Error Loading Data: {error.message}</div>;
  }

  // Function to determine the link based on the title
  const getLinkBasedOnTitle = (title) => {
    switch (title.toLowerCase()) {
      case 'blinds':
        return '/blinds';
      case 'curtains':
        return '/curtains';
      case 'shutters':
        return '/shutters';
      case 'awnings':
        return '/awnings';
      case 'commercial':
        return '/commercial';
      default:
        return '#'; // Default link if no match found
    }
  };

  return (
    <>
      <div className="bg-white">
        <div className="container mx-auto py-3">
          {/* Main text centered at the top */}
          {dash.length > 0 ? (
            dash.map((items, index) => (
              <div key={index}>
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
              </div>
            ))
          ) : (
            <div>No data available</div>
          )}
        </div>
      </div>

      <AboutUs />
      <div className="-mt-16 lg:mt-0"></div>
      <Banner />

      <div className="container mx-auto py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-0 md:p-10 font-subheading">
        {dashproduct.map((items, index) => (
          <React.Fragment key={index}>
            <BlindsSection
              title={items.attributes.title}
              description={items.attributes.des}
              imageUrl={`${process.env.STRAPI_API}${items.attributes.img.data.attributes.url}`}
              buttonText={items.attributes.buttontext}
              buttonLink={getLinkBasedOnTitle(items.attributes.title)}
            />
          </React.Fragment>
        ))}
      </div>

      <BookingBanner
        title="Book Appointment Today And Get a Free $300 Voucher To Use Towards Your Order!"
        description="Our customer consultants have a wealth of experience and will guide you along the way to creating the home you love. Take the first step and book an appointment with our expert local advisers."
        buttonText="BOOK APPOINTMENT"
        buttonLink="#"
        imageUrl="https://watsonblinds.com.au/wp-content/uploads/2018/05/shutterstock_721093795.jpg"
      />

      <ShowroomMap />

      <ClientReviews reviews={reviewsData} />
    </>
  );
};

export default Dashboard;
