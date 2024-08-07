import React, { useEffect, useState } from "react";
import aboutImage from "../../assets/about.jpg";
import { useGetaboutQuery } from "../redux/api";
import LoadingPage from "../loading_page/loadingpage";

const AboutUs = () => {
  const [about, setAbout] = useState([]);

  const { data, isLoading, error } = useGetaboutQuery();

  useEffect(() => {
    if (data) {
      setAbout(data.data);
      console.table(data); // Log the data to the console
    }
  }, [data]);

  if (isLoading) {
    return <LoadingPage />;
  }

  if (error) {
    return <div>Error Loading Data: {error.message}</div>;
  }

  return (
    <div className="py-8">
      <div className="container mx-auto px-4 md:px-16">
        <div className="flex flex-col-reverse md:flex-row gap-8 items-center font-subheading">
          {/* Text on top for mobile, left side for larger screens */}
          {about.map((items, index) => (
            <React.Fragment key={index}>
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-3xl md:text-3xl font-bold text-blue-800 mb-4 mt-0 md:-mt-32">
                  {items.attributes.title}
                </h1>
                <p className="text-gray-700 mb-8 leading-relaxed">
                  {items.attributes.des}
                </p>
              </div>

              {/* Image on bottom for mobile, right side for larger screens */}
              <div className="flex-1 flex justify-center md:justify-end">
                <img
                  src={`${process.env.STRAPI_API}${items.attributes.img.data.attributes.url}`}
                  alt="About Us"
                  className="w-full md:w-2/3 h-auto object-cover rounded-lg shadow-lg"
                />
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
