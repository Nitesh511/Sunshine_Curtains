import React from 'react';

const FeatureSection = ({ features }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      {features.map((feature, index) => (
        <div key={index} className="flex flex-col items-center">
          <div className="text-gray-800 text-3xl"> {/* Adjust icon size */}
            {feature.icon}
          </div>
          <h3 className="text-gray-800 text-center text-lg mt-2"> {/* Adjust spacing */}
            {feature.title}
          </h3>
        </div>
      ))}
    </div>
  );
};

export default FeatureSection;
