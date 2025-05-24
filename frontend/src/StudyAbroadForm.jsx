import React from "react";
import logo1 from "./assets/lakeFront_view.webp";
import { MapPin } from "lucide-react";

const StudyAbroadForm = () => {
  return (
    <div className="w-full relative">
      {/* MOBILE VIEW IMAGE */}
      <div className="md:hidden w-full h-[300px] bg-no-repeat bg-center bg-contain" style={{ backgroundImage: `url(${logo1})` }}></div>

      {/* MOBILE VIEW CONTENT */}
      <div className="relative md:hidden w-full max-w-6xl mx-auto px-4 py-2 flex flex-col items-center justify-between space-y-6 z-10">
        <div className="p-4 text-white max-w-md text-start border bg-black bg-opacity-80 rounded-xl">
          <h1 className="text-2xl font-bold leading-snug">
            SKY HABITAT by Urbanrise <br />
            <span className="inline-flex items-center text-green-500 text-sm">
              <MapPin className="w-4 h-4 mr-1 -mt-px" />
              Miyapur, Hyderabad
            </span>
            <hr className="my-2" />
          </h1>

          <ul className="mt-4 space-y-2 text-md">
            {[
              "PAY only 10% NOW",
              "REST 90% On Possession*",
              "No loan, no EMI till handover",
              "Luxury 3 BHK Residences",
              "3.5 Acres Central Park",
              "1 Lacs sq ft Club House",
              "Rooftop Amenities",
              
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="text-green-400 text-xl mr-2">✔</span>
                {item}
              </li>
            ))}
          </ul>

          <hr className="my-4" />

          <div className="mt-4 flex justify-center">
            <div className="text-green-600 px-4 py-2 shadow-sm text-sm font-semibold">
                        <a href="tel:+919515519536"
                          className="blinking-button bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full flex items-center gap-3 shadow-md transition-all duration-300"
                        >
                        Starting from ₹1.24 Cr* Onwards
                        </a>
            </div>
          </div>
        </div>
      </div>

      {/* DESKTOP VIEW */}
      <div
        className="hidden md:flex w-full min-h-screen bg-cover bg-center bg-no-repeat items-center justify-start relative"
        style={{ backgroundImage: `url(${logo1})` }}
      >
        {/* Desktop Content */}
        <div className="relative z-10 bg-black bg-opacity-90 text-white p-10 rounded-lg max-w-md shadow-xl ml-0 mt-10">
          <h1 className="text-4xl font-bold leading-snug">
            SKY HABITAT by Urbanrise <br />
            <span className="inline-flex items-center text-green-500 text-base mt-1">
              <MapPin className="w-4 h-4 mr-1 -mt-px" />
              Miyapur, Hyderabad
            </span>
            <hr className="my-1 border-gray-600" />
          </h1>

          <ul className="mt-2 space-y-3 text-lg">
            {[
              "PAY only 10% NOW",
              "REST 90% On Possession*",
              "No loan, no EMI till handover",
              "Luxury 3 BHK Residences",
              "3.5 Acres Central Park",
              "1 Lacs sq ft Club House",
              "Rooftop Amenities",
            ].map((item, index) => (
              <li key={index} className="flex items-center">
                <span className="text-green-400 text-2xl mr-2">✔</span>
                {item}
              </li>
            ))}
          </ul>

          <hr className="my-4 border-gray-600" />

          <div className="mt-4">
            <div className="text-green-800 px-4 py-2 inline-block font-semibold text-sm">
              <a href="tel:+919515519536"
                          className="blinking-button bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full flex items-center gap-3 shadow-md transition-all duration-300"
                        >
                        Starting from ₹1.24 Cr* Onwards
                        </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudyAbroadForm;
