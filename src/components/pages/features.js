import React from "react";
import Imagee from "../../assets/1.png";
import Imageee from "../../assets/2.png";
import Imageeee from "../../assets/3.png";

const Features = () => {
  return (
    <div id="feature" className="w-full min-h-screen p-2 flex items-center bg-gradient-to-b from-white to-gray-400">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Services</h2>
        <p className="text-lg text-gray-700 mb-8"></p>
        <div className="grid grid-cols-1 gap-20 sm:grid-cols-2 md:grid-cols-3">
          <div className="shadow-lg shadow-[#040c16] hover:scale-110 duration-500">
            <div className="bg-white rounded-lg shadow-lg">
              <img src={Imagee} alt="Property" className="w-full h-40 md:h-64 object-cover rounded-t-lg" />
              <div className="py-6 px-4">
                <h3 className="text-lg font-medium text-gray-900">LIFE INSURANCE</h3>
              </div>
            </div>
          </div>
          <div className="shadow-lg shadow-[#040c16] hover:scale-110 duration-500">
            <div className="bg-white rounded-lg shadow-lg">
              <img src={Imageee} alt="Property" className="w-full h-40 md:h-64 object-cover rounded-t-lg" />
              <div className="py-6 px-4">
                <h3 className="text-lg font-medium text-gray-900">HEALTH INSURANCE</h3>
              </div>
            </div>
          </div>
          <div className="shadow-lg shadow-[#040c16] hover:scale-110 duration-500">
            <div className="bg-white rounded-lg shadow-lg">
              <img src={Imageeee} alt="Property" className="w-full h-40 md:h-64 object-cover rounded-t-lg" />
              <div className="py-6 px-4">
                <h3 className="text-lg font-medium text-gray-900">VEHICLE INSURANCE</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
