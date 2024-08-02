import React from "react";

const BlindsSection = ({
  title,
  description,
  imageUrl,
  buttonText,
  buttonLink,
}) => {
  return (
    <div className="py-1 flex justify-center">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col items-center max-w-sm w-full">
        <img
          className="w-full h-64 object-cover"
          src={imageUrl}
          alt={title}
        />
        <div className="p-4 flex flex-col h-48">
          <h2 className="text-xl font-semibold mb-2">{title}</h2>
          <p className="text-gray-600 mb-4 overflow-hidden text-ellipsis line-clamp-3">{description}</p>
          <a
            href={buttonLink}
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg font-medium text-center"
          >
            {buttonText}
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlindsSection;
