import React from "react";
import financiali from "../../assets/financiali.png";
import help from "../../assets/help.png";
import work from "../../assets/work.png";
import carrer from "../../assets/carrer.png";
import brand from "../../assets/brand.png";

const OurClients = () => {
  return (
    <div id="OurClients" className="flex flex-col md:flex-row w-full min-h-screen">
      <div className="w-full md:w-1/2 p-4 md:p-8 flex items-center justify-center bg-blue-500">
        <div className="text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Benefits of being a LIC Agent?</h2>
          <ul className="list-disc list-inside mb-8 space-y-4"> {/* Added space-y-4 to adjust the gap */}
            <li className="flex flex-col items-center space-y-2 md:space-y-0 mb-4 md:mb-0 md:flex-row md:space-x-4"> {/* Adjusted space between items here */}
              <img src={financiali} alt="House Icon" className="w-20 h-12" />
              <span><b>Financial Independence:</b> LIC agents have the potential to earn a substantial income and enjoy financial freedom.</span>
            </li>
            <li className="flex flex-col items-center space-y-2 my-4 md:my-10 md:flex-row md:space-x-4"> {/* Adjusted space between items here */}
              <img src={help} alt="Location Icon" className="w-20 h-12" />
              <span><b>Helping Others:</b> It's a rewarding career where you can make a significant positive impact on people's lives by providing them with financial security.</span>
            </li>
            <li className="flex flex-col items-center space-y-2 my-4 md:my-10 md:flex-row md:space-x-4"> {/* Adjusted space between items here */}
              <img src={work} alt="Money Icon" className="w-20 h-12" />
              <span><b>Flexible Work Schedule:</b> You can enjoy a flexible work schedule that allows you to balance your personal and professional life.</span>
            </li>
            <li className="flex flex-col items-center space-y-2 my-4 md:my-10 md:flex-row md:space-x-4"> {/* Adjusted space between items here */}
              <img src={carrer} alt="Money Icon" className="w-20 h-12" />
              <span><b>Career Growth:</b> LIC offers opportunities for career advancement, including becoming a Chief Life Insurance Advisor, like yourself.</span>
            </li>
            <li className="flex flex-col items-center space-y-2 my-4 md:my-10 md:flex-row md:space-x-4"> {/* Adjusted space between items here */}
              <img src={brand} alt="Money Icon" className="w-20 h-12" />
              <span><b>Trusted Brand:</b> LIC is a trusted and well-established brand with a long history of providing reliable insurance services, making it easier to build trust with clients.</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full md:w-1/2 p-4 md:p-8 flex items-center justify-center">
        <div className="text-center">
          <div style={{ width: "420px", height: "300px" }}>
            <iframe
              title="YouTube Video"
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/mZw1rNqE4hk"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurClients;
