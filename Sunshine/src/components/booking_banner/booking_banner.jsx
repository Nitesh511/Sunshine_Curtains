import React from "react";

const BookingBanner = ({
  title,
  description,
  buttonText,
  buttonLink,
  imageUrl,
}) => {
  return (
    <div className="flex flex-col md:flex-row relative overflow-hidden">
      {/* Image on the left */}
      <div className="flex-shrink-0 w-full md:w-1/2">
        <img
          src={imageUrl}
          alt="Booking Appointment"
          className="w-full h-64 object-cover md:h-full"
        />
      </div>

      {/* Text and button on the right */}
      <div className="flex-1 flex items-center justify-center bg-black bg-opacity-50 p-4 md:p-8 text-white">
        <div className="text-center md:text-left max-w-lg">
          <h2 className="text-2xl sm:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-lg sm:text-xl mb-8">{description}</p>
          <a
            href={buttonLink}
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-lg"
          >
            {buttonText}
          </a>
        </div>
      </div>
    </div>
  );
};

export default BookingBanner;
