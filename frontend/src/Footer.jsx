import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6 px-4 w-full">
      <div className="max-w-6xl mx-auto text-center">
        {/* Main Content */}
        <p className="text-[10px] font-light mb-3">
          ©2025 | SKY HABITAT by Urbanrise (Project RERA No.: P01100006655) Promoted by Authorised Channel Partner.
        </p>

        {/* Disclaimer */}
        <p className="text-[10px] text-gray-400 leading-relaxed mb-3">
          Disclaimer: The content mentioned on this website is for information purposes only, prices mentioned are subject to change without notice & properties mentioned are subject to availability. Images are for representation purposes only. This is not the official website. This website belongs to the authorised sales partner. We may also send updates to the mobile number/email ID registered with us.
        </p>

        {/* Digital Marketing Partner */}
        <p className="text-[10px] text-gray-400 mb-3">
          Digital Marketing Partner:{" "}
          <span className="font-semibold">
                VR2 Technologies
           
          </span>
        </p>

        {/* Footer Links */}
        <div className="mt-4 space-x-4">
          <Link to="/privacy-policy" className="text-[10px] text-white hover:underline">
            Privacy Policy
          </Link>
          <Link to="/terms-conditions" className="text-[10px] text-white hover:underline">
            Terms & Conditions
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
