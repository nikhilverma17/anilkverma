import React from "react";
import Image from "../../assets/4.png";

const AboutUs = () => {
  return (
    <div id="about" className="w-full min-h-screen p-4 md:p-8 flex flex-col md:flex-row bg-gradient-to-b from-blue-200 to-gray-500">

      <div className="w-full md:w-1/2 p-0 md:p-8 flex items-center justify-center">
        <div className="text-center md:text-left">
          <h2 className="text-2xl md:text-4xl font-bold text-amber-800 mb-4">
            About Us
          </h2>
          <p className="text-sm md:text-lg text-black-700 mb-8">
            Hello, I'm Anil Kumar Verma, an insurance professional with 23 years of experience. My journey began as an LIC (Life Insurance Corporation) agent, and I now hold the prestigious position of Chief Life Insurance Advisor.
            <br /><br></br>
            My career path has been both challenging and fulfilling. Starting as an LIC agent provided me with a solid foundation, and I've since advanced to become an experienced advisor. LIC's reputation for trust and reliability has been a cornerstone of my journey.
            <br /><br></br>
            In addition to my insurance work, I lead a dedicated team of sub-agents. Their accomplishments reflect my commitment and expertise, and mentoring them is a source of immense satisfaction.
            <br /><br></br>
            With over two decades of experience, I am not just an insurance professional; I am a dedicated guardian of my clients' financial well-being and the driving force behind my exceptional team's success. LIC represents trust, and I'm honored to be part of this legacy as the Chief Life Insurance Advisor, looking forward to more years of growth in the insurance industry.
          </p>
        </div>
      </div>

      <div className="w-full md:w-1/2 p-4 md:p-8 flex items-center justify-center">
        <img
          src={Image}
          alt="About Us"
          className="object-cover rounded-full"
        />
      </div>
    </div>
  );
};

export default AboutUs;
