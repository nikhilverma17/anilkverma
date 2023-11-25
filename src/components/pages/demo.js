import React from "react";
import trust from "../../assets/trust.png";
import products from "../../assets/products.png";
import service from "../../assets/service.png"
import financial from "../../assets/financial.png"
import tax from "../../assets/tax.png"

const Demo = () => {
  return (
    <div id="demo" className="flex flex-col md:flex-row w-full min-h-screen bg-yellow-400">
      <div className="w-full md:w-1/2 p-4 md:p-8 bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div style={{ width: "420px", height: "300px" }}>
            <iframe
              title="YouTube Video"
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/m4N4I0z09Ks"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>




        </div>
      </div>
      <div className="w-full md:w-1/2 p-4 md:p-8 flex items-center justify-center">
        <div className="text-black">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Why to Choose LIC?</h2>
          <ul className="list-disc list-inside mb-8">
            <li className="flex flex-col items-center space-y-4 mb-4 md:mb-0 md:flex-row md:space-x-4">
              <img src={trust} alt="House Icon" className="w-18 h-12" />
              <span className="flex-grow"><b>Longevity and Trust:</b> LIC, with its long history, is a name you can trust for financial security.</span>
            </li>
            <li className="flex flex-col items-center space-y-4 mb-4 md:mb-0 md:flex-row md:space-x-4">
              <img src={products} alt="Location Icon" className="w-20 h-12" />
              <span className="flex-grow"><b>Wide Range of Products:</b> LIC offers a diverse portfolio of insurance and investment options to suit various needs.</span>
            </li>
            <li className="flex flex-col items-center space-y-4 mb-4 md:mb-0 md:flex-row md:space-x-4">
              <img src={service} alt="Money Icon" className="w-20 h-12" />
              <span className="flex-grow"><b>Exceptional Customer Service:</b> LIC is known for its excellent customer service and prompt claim settlement.</span>
            </li>
            <li className="flex flex-col items-center space-y-4 mb-4 md:mb-0 md:flex-row md:space-x-4">
              <img src={financial} alt="Money Icon" className="w-20 h-12" />
              <span className="flex-grow"><b>Financial Stability:</b> LIC's strong financial position provides assurance that your investments are safe.</span>
            </li>
            <li className="flex flex-col items-center space-y-4 mb-4 md:mb-0 md:flex-row md:space-x-4">
              <img src={tax} alt="Money Icon" className="w-20 h-12" />
              <span className="flex-grow"><b>Tax Benefits:</b> LIC policies offer tax advantages under Section 80C and Section 10(10D) of the Income Tax Act, making it a smart choice for tax planning.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Demo;
