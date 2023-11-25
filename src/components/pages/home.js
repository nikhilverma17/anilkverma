import React from "react";
import Image from "../../assets/main.png";

const HomePage = () => {
  return (
    <div id="home" className="w-full min-h-screen p-8 flex items-center bg-gradient-to-b from-white to-gray-400">
      <div className="max-w-7xl mx-auto md:flex md:flex-row md:items-center">
        <div className="md:w-1/2 md:pr-8 my-11">
          <img
            src={Image}
            alt="Home"
            className="object-cover rounded-full"
          />
        </div>
        <div className="md:w-1/2 md:pl-8">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-black-800 mb-6">MR. ANIL KUMAR VERMA</h2>
            <h1 className="text-4xl font-bold text-gray-800 mb-6">Secure your future with us, your trusted partner for life's uncertainties.</h1>
            <p className="text-lg text-gray-700 mb-8">
              Welcome to our insurance agency, where securing your dreams is our utmost commitment. Our team of seasoned agents specializes in Life and Health Insurance through LIC, while also providing coverage options for your vehicles through New India. As CLIA agents, we're dedicated to delivering exceptional service and guiding you through the intricate process of protecting your future. Additionally, if you're interested in a rewarding career, you can join us as an LIC agent under our mentorship.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
