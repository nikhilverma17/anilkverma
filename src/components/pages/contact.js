import React, { useState } from "react";


const ContactUs = () => {
  const [name, setName] = useState("");
  const [message1, setMessage1] = useState("");
  const countryCode = "+91";
  const phoneNumber = "9415489615";

  const handleSendWhatsAppMessage = () => {
    const message = `Hi, I'm ${name} " ${message1} "`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappLink = `https://wa.me/${countryCode}${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappLink, '_blank');
  };

  return (
    <div id="contact" className="bg-gray-100 w-full min-h-screen p-4 sm:p-8 md:p-16 flex items-center">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 items-center">
          <div className="text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-lg text-gray-700 mb-4">
              If you have any questions or would like to schedule a consultation, please don't hesitate to contact us.
            </p>
            <ul className="text-lg text-gray-700 mb-8">
              <li className="flex items-center mb-2 md:mb-4">
                <i class="fa-solid fa-location-dot fa-xl mr-4"></i>170 Subash Nagar,Palia Kalan
              </li>
              <li className="flex items-center mb-2 md:mb-4">
                <i class="fa-solid fa-phone-volume fa-xl mr-4"></i>+91-9415489615
              </li>
              <li className="flex items-center mb-2 md:mb-4">
                <i class="fa-solid fa-envelope fa-xl mr-4"></i>anillicclia@gmail.com
              </li>

              
            </ul>
          </div>
          <div className="text-center md:text-left">
            <div className="mb-4">
              <label htmlFor="name" className="block text-lg md:text-xl font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="py-3 px-4 block w-full shadow-sm focus:ring-green-800 focus:border-green-800 border border-green-800 rounded-md mb-4"
              />
              <label htmlFor="message1" className="block text-lg md:text-xl font-medium text-gray-700">
                Your Message
              </label>
              <textarea
                id="message1"
                name="message1"
                value={message1}
                onChange={(e) => setMessage1(e.target.value)}
                className="py-3 px-4 block w-full shadow-sm focus:ring-green-800 focus:border-green-800 border border-green-800 rounded-md mb-4 h-36"
              />
              <button
                type="button"
                onClick={handleSendWhatsAppMessage}
                className="inline-flex justify-center py-2 px-4 md:py-3 md:px-6 border border-transparent shadow-sm text-base md:text-lg font-medium rounded-md text-white bg-green-800 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-800"
              >
                <li className="flex items-center">
                  <i class="fa-brands fa-whatsapp fa-lg mr-2"></i> Send WhatsApp Message
                </li>
              </button>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
